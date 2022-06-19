import { promises as fs } from 'fs';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const DEBUG = false;
const debug = DEBUG ? console.log : (...args) => { void args; };

// Load the voting...
const loadProg = async (p) => {
  const s = await fs.readFile(p);
  const b = Uint8Array.from(s);
  return b;
};

export const stdlib = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' });
const {
  parseCurrency: pc,
  bigNumberify: bn,
} = stdlib;
const ALGO = stdlib;
const { algosdk } = ALGO;

const makeRawSend = (acc) => async (fos) => {
  const thisAcc = acc.networkAccount;
  const params = await ALGO.getTxnParams('');
  const rtxns = fos.map(([f, o]) => {
    const paramsp = { ...params };
    if ( o.feeMult !== undefined ) {
      paramsp.flatFee = true;
      paramsp.fee = 1000 * o.feeMult;
    }
    return f({
      from: stdlib.formatAddress(acc),
      suggestedParams: paramsp,
      ...o,
    })
  });
  algosdk.assignGroupID(rtxns);
  const wtxns = rtxns.map(ALGO.toWTxn);
  return await ALGO.signSendAndConfirm( thisAcc, wtxns );
};

const makeABICaller = (appIndex, abi) => (f, args, o = {}) => {
  const sig = `${f}${abi[f]}`;
  console.log('abi caller', { f, sig, args });
  const m = algosdk.ABIMethod.fromSignature(sig);
  const t = m.args.map(({type}) => type);
  //console.log({f, m, t});
  const args_e = args.map((a, i) => t[i].encode(a));
  //console.log({args_e});
  return [ algosdk.makeApplicationCallTxnFromObject, {
    appArgs: [ m.getSelector(), ...args_e ],
    appIndex,
    ...o,
  }];
};

export const launchPALGO = async ({accAdmin}) => {
  const supply = pc('10,000,000,000'.replace(/,/g, ''));
  const pALGO = await stdlib.launchToken(accAdmin, 'pALGO', 'pALGO', { supply });
  const stakeToken = pALGO.id;
  return { stakeToken, supply };
};

export const conManagerABI = {
  'Admin_init': '()void',
  'User_register': '(uint64)void',
  'User_keyreg': '(address,address,byte[64],uint64,uint64,uint64)void',
  'User_keyunreg': '()void',
  'User_unregister': '()void',
  'Admin_delete': '()void',
};
export const launchConsManager = async ({accAdmin, stakeToken}) => {
  const rawSend = makeRawSend(accAdmin);

  const consManager = await (async () => {
    const consApproval = await loadProg('./consensus.approval.teal.tok');
    const consClear = await loadProg('./consensus.clear.teal.tok');
    console.log(`create consManager`);
    const res = await rawSend([
      [algosdk.makeApplicationCreateTxnFromObject, {
        approvalProgram: consApproval,
        clearProgram: consClear,
        numGlobalInts: 3,
        numGlobalByteSlices: 0,
        numLocalInts: 1,
        numLocalByteSlices: 1,
      }]
    ]);
    return res['created-application-index'];
  })();
  const consManagerAddr = algosdk.getApplicationAddress(consManager);
  await stdlib.transfer(accAdmin, consManagerAddr, bn(200000));

  const consManagerCaller = makeABICaller( consManager, conManagerABI );

  const conAdmin_init = async () => {
    console.log('init consManager');
    await rawSend([
      consManagerCaller('Admin_init', [], {
        foreignAssets: [ bn(stakeToken).toNumber() ],
        feeMult: 2,
      }),
    ]);
  };
  await conAdmin_init();

  const conAdmin_delete = async () => {
    console.log('delete consManager');
    await rawSend([
      consManagerCaller('Admin_delete', [], {
        foreignAssets: [ bn(stakeToken).toNumber() ],
        'onComplete': algosdk.OnApplicationComplete.DeleteApplicationOC,
        feeMult: 3,
      }),
    ]);
  };

  return {
    consManager,
    consManagerAddr,
    conAdmin_delete,
  };
};

export const launchGovernancePeriod = async ({
  accAdmin, stakeToken, stakePeriod,
}) => {
  const rawSend = makeRawSend(accAdmin);

  // Launch afgov
  const voteManager = await (async () => {
    if ( stakePeriod.voteManager ) {
      return stakePeriod.voteManager;
    }
    const afgovApproval = await loadProg('./afgov/teal/voting.approval.teal.tok');
    const afgovClear = await loadProg('./afgov/teal/voting.clear.teal.tok');
    console.log(`create voteManager`);
    const res = await rawSend([
      [algosdk.makeApplicationCreateTxnFromObject, {
        approvalProgram: afgovApproval,
        clearProgram: afgovClear,
        numGlobalInts: 7,
        numGlobalByteSlices: 3,
        numLocalInts: 0,
        numLocalByteSlices: 1,
      }],
    ]);
    //console.log('voteManager create', res);
    return res['created-application-index'];
  })();

  const voteManagerAddr = algosdk.getApplicationAddress(voteManager);
  const voteManagerCaller = makeABICaller( voteManager, {
    'Creator_config': "(address,uint64,uint64)void",
    'Creator_setVotingSession': "(uint64,uint64,uint64,uint64,uint64[4])void",
  });
  const callVoteManager = async (f, args) => {
    console.log(`call voteManager ${f}`);
    return await rawSend([
      voteManagerCaller(f, args),
    ]);
  };

  const ctcAdmin = accAdmin.contract(backend);
  const [ govtManager, govtManagerAddr ] = await stdlib.withDisconnect(async () => {
    await ctcAdmin.p.Deployer({
      stakeToken,
      stakePeriod: {
        ...stakePeriod,
        voteManager,
        voteManagerAddr,
      },
      ready: stdlib.disconnect,
    });
    throw new Error('impossible');
  });
  //console.log('deployed', { ctcInfo, ctcAddr });

  // Configure voting
  await callVoteManager('Creator_config', [ stdlib.formatAddress(govtManagerAddr), govtManager.toNumber(), stakePeriod.deadline6_delete ]);
  if ( stakePeriod.voteManager_setVotingSession_done === undefined ) {
    await callVoteManager('Creator_setVotingSession', [ stakePeriod.deadline2_voteStart, stakePeriod.deadline3_voteEnd, stakePeriod.deadline4_voteFinal, stakePeriod.measures, stakePeriod.choicesPerMeasure ]);
  } else {
    console.log(`Skipping Creator_setVotingSession`);
  }

  return {
    voteManager,
    govtManager,
  };
};

export const makeConsClient = (acc, consManager, stakeToken) => {
  const rawSend = makeRawSend(acc);
  const consManagerAddr = algosdk.getApplicationAddress(consManager);
  const consManagerCaller = makeABICaller( consManager, conManagerABI );
  const User_register = async (userAccountAddr, bP) => {
    console.log(`User_register`);
    return await rawSend([
      consManagerCaller('User_register', [ bP.toNumber() ], {
        'onComplete': algosdk.OnApplicationComplete.OptInOC,
        accounts: [ userAccountAddr ],
        rekeyTo: consManagerAddr,
        foreignAssets: [ stakeToken.toNumber() ],
        feeMult: 2,
      }),
    ]);
  };
  const User_keyreg = async (conAccountAddr, ...args) => {
    console.log(`User_keyreg ${conAccountAddr} ${args}`);
    await rawSend([
      consManagerCaller('User_keyreg', args, {
        accounts: [ conAccountAddr ],
        feeMult: 2,
      }),
    ]);
  };
  const User_keyunreg = async (conAccountAddr, ...args) => {
    console.log(`User_keyunreg ${conAccountAddr} ${args}`);
    await rawSend([
      consManagerCaller('User_keyunreg', args, {
        accounts: [ conAccountAddr ],
        feeMult: 2,
      }),
    ]);
  };
  const User_unregister = async (conAccountAddr, bP) => {
    console.log(`User_unregister ${conAccountAddr}`);
    await rawSend([
      [ algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject, {
        amount: stdlib.bigNumberToBigInt(bP),
        assetIndex: stakeToken.toNumber(),
        to: consManagerAddr,
      } ],
      consManagerCaller('User_unregister', [], {
        'accounts': [ conAccountAddr ],
        feeMult: 2,
      }),
    ]);
  };
  return {
    User_register,
    User_keyreg,
    User_keyunreg,
    User_unregister,
  };
};

export const makeClient = (acc, ctcInfo) => {
  const ctc = acc.contract(backend, ctcInfo);
  const rawInfo = ctc.unsafeViews.Info;

  const makeVote = async () => {
    const rawSend = makeRawSend(acc);
    const { voteManager } = (await rawInfo()).stakePeriod;
    // XXX This should be...
    //    stdlib.bigNumberToBigInt(voteManager),
    // But the algosdk doesn't allow that
    // So this will eventually break.
    const voteManagerId = stdlib.bigNumberToNumber(voteManager);
    return { rawSend, voteManagerId };
  };

  const VoteManager_OptIn = async () => {
    const { rawSend, voteManagerId } = await makeVote();
    return await rawSend([
      [algosdk.makeApplicationOptInTxnFromObject, {
        appIndex: voteManagerId,
      }],
    ]);
  };
  const VoteManager_ClearState = async () => {
    const { rawSend, voteManagerId } = await makeVote();
    return await rawSend([
      [algosdk.makeApplicationClearStateTxnFromObject, {
        appIndex: voteManagerId,
      }],
    ]);
  };

  const voteResult = async () => {
    const v = (await rawInfo()).currentVote;
    const maxIdx = (a) => {
      let r = undefined;
      let i = 0;
      let l = undefined;
      for ( const e of a ) {
        if ( l === undefined || l.lt(e) ) {
          l = e; r = i;
        }
        i++;
      }
      return r;
    };
    return v.map(maxIdx);
  };
  const Info = {
    ...rawInfo,
    voteResult,
  };
  const { Governor_stake, Governor_unstake, Governor_vote, Governor_unvote, Other_claimFor, Admin_delete } = ctc.apis;

  return {
    Governor_stake,
    Governor_unstake,
    Governor_vote,
    Governor_unvote,
    Other_claimFor,
    Admin_delete,
    VoteManager_OptIn,
    VoteManager_ClearState,
    Info,
  };
};
