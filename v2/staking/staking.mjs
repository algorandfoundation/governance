// Automatically generated with Reach 0.1.11 (00f11eba*)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (00f11eba*)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  return {
    deleted: [],
    stake: [ctc0, ctc1, ctc1, ctc0],
    unstake: [ctc0, ctc0, ctc1, ctc1, ctc1],
    unvote: [ctc0, ctc3],
    vote: [ctc0, ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc4 = stdlib.T_Struct([['period', ctc1], ['consManager', ctc2], ['consManagerAddr', ctc0], ['voteManager', ctc2], ['voteManagerAddr', ctc0], ['measures', ctc1], ['choicesPerMeasure', ctc3], ['deadline1_signupEnd', ctc1], ['deadline2_voteStart', ctc1], ['deadline3_voteEnd', ctc1], ['deadline4_voteFinal', ctc1], ['deadline5_rewardStart', ctc1], ['deadline6_delete', ctc1], ['totalReward', ctc1]]);
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Struct([['stakePeriod', ctc4], ['stakeToken', ctc5], ['currentVote', ctc6], ['rewardedStake', ctc1], ['rewardedStakeN', ctc1], ['rewardedStakeT', ctc1], ['remainingStake', ctc1], ['remainingStakeN', ctc1], ['remainingStakeT', ctc1], ['remainingReward', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['bene', ctc0], ['stake', ctc1], ['stakeN', ctc1], ['stakeT', ctc1], ['voted', ctc8]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Object({
    bene: ctc0,
    stakeN: ctc1,
    stakeT: ctc1,
    voted: ctc8
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc11
    });
  const map0_ctc = ctc12;
  
  
  return {
    infos: {
      Info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = svs;
            return (await ((async () => {
              
              const v3540 = {
                currentVote: v3472,
                remainingReward: v3474,
                remainingStake: v3538,
                remainingStakeN: v3475,
                remainingStakeT: v3476,
                rewardedStake: v3539,
                rewardedStakeN: v3477,
                rewardedStakeT: v3478,
                stakePeriod: v3398,
                stakeToken: v3399
                };
              
              return v3540;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      accountData: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = svs;
            return (await ((async (_v3452 ) => {
                const v3452 = stdlib.protect(ctc0, _v3452, null);
              
              const v3453 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3452), null);
              const v3454 = {
                bene: v3452,
                stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                voted: false
                };
              const v3456 = stdlib.fromSome(v3453, v3454);
              const v3457 = v3456.stakeN;
              const v3458 = v3456.stakeT;
              const v3459 = stdlib.add(v3457, v3458);
              const v3460 = v3456.bene;
              const v3463 = v3456.voted;
              const v3465 = {
                bene: v3460,
                stake: v3459,
                stakeN: v3457,
                stakeT: v3458,
                voted: v3463
                };
              
              return v3465;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      3: [ctc0, ctc4, ctc5, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Admin_delete3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_delete3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_delete3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc11,
    Governor_stake0_544: ctc12,
    Governor_unstake0_544: ctc11,
    Governor_unvote0_544: ctc11,
    Governor_vote0_544: ctc13,
    Other_claimFor0_544: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc2]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3705 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:301:30:application call to [unknown function] (defined at: ./index.rsh:301:30:function exp)', 'at ./index.rsh:146:19:application call to "runAdmin_delete0_544" (defined at: ./index.rsh:301:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Admin_delete'
    });
  const v3709 = ['Admin_delete0_544', v3705];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3709],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:304:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:304:22:decimal', stdlib.UInt_max, '0'), v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_delete"
            });
          ;
          ;
          const v3974 = stdlib.add(v3475, v3474);
          sim_r.txns.push({
            kind: 'from',
            to: v3397,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v3397,
            tok: v3399
            });
          const v3991 = [v3974, v3476];
          const v3992 = await txn1.getOutput('Admin_delete', 'v3991', ctc16, v3991);
          
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v3399
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3973 = stdlib.lt(v3426, v3840);
      stdlib.assert(v3973, {
        at: './index.rsh:305:16:application',
        fs: ['at ./index.rsh:304:44:application call to [unknown function] (defined at: ./index.rsh:304:44:function exp)'],
        msg: 'a delete',
        who: 'Admin_delete'
        });
      const v3974 = stdlib.add(v3475, v3474);
      ;
      ;
      const v3991 = [v3974, v3476];
      const v3992 = await txn1.getOutput('Admin_delete', 'v3991', ctc16, v3991);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v3841, v3992), {
          at: './index.rsh:301:11:application',
          fs: ['at ./index.rsh:301:11:application call to [unknown function] (defined at: ./index.rsh:301:11:function exp)', 'at ./index.rsh:309:10:application call to "k" (defined at: ./index.rsh:304:44:function exp)', 'at ./index.rsh:304:44:application call to [unknown function] (defined at: ./index.rsh:304:44:function exp)'],
          msg: 'out',
          who: 'Admin_delete'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      return;
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      return;
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      return;
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      return;
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc12 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc10,
    Governor_stake0_544: ctc11,
    Governor_unstake0_544: ctc10,
    Governor_unvote0_544: ctc10,
    Governor_vote0_544: ctc13,
    Other_claimFor0_544: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc17 = stdlib.T_Tuple([ctc2, ctc12]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v3346 = stdlib.protect(ctc8, interact.stakePeriod, 'for Deployer\'s interact field stakePeriod');
  const v3348 = v3346.consManager;
  const v3349 = v3346.consManagerAddr;
  const v3350 = v3346.voteManager;
  const v3351 = v3346.voteManagerAddr;
  const v3354 = v3346.deadline1_signupEnd;
  const v3355 = v3346.deadline2_voteStart;
  const v3356 = v3346.deadline3_voteEnd;
  const v3357 = v3346.deadline4_voteFinal;
  const v3358 = v3346.deadline5_rewardStart;
  const v3359 = v3346.deadline6_delete;
  const v3360 = v3346.totalReward;
  const v3365 = stdlib.protect(ctc9, interact.stakeToken, 'for Deployer\'s interact field stakeToken');
  
  const v3380 = stdlib.ctcAddrEq(v3348, v3349);
  stdlib.assert(v3380, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'consManager',
    who: 'Deployer'
    });
  const v3382 = stdlib.ctcAddrEq(v3350, v3351);
  stdlib.assert(v3382, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'voteManager',
    who: 'Deployer'
    });
  const v3384 = stdlib.gt(v3360, stdlib.checkedBigNumberify('./index.rsh:37:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'totalReward',
    who: 'Deployer'
    });
  const v3386 = stdlib.lt(v3354, v3355);
  stdlib.assert(v3386, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'voteStart',
    who: 'Deployer'
    });
  const v3388 = stdlib.lt(v3355, v3356);
  stdlib.assert(v3388, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'voteEnd',
    who: 'Deployer'
    });
  const v3390 = stdlib.lt(v3356, v3357);
  stdlib.assert(v3390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:40:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'voteFinal',
    who: 'Deployer'
    });
  const v3392 = stdlib.lt(v3357, v3358);
  stdlib.assert(v3392, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'rewardStart',
    who: 'Deployer'
    });
  const v3394 = stdlib.lt(v3358, v3359);
  stdlib.assert(v3394, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:42:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:111:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:109:16:application call to [unknown function] (defined at: ./index.rsh:109:20:function exp)'],
    msg: 'delete',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3346, v3365],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:114:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc9],
    pay: [v3360, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3398, v3399], secs: v3401, time: v3400, didSend: v222, from: v3397 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v3399
        });
      const v3409 = v3398.totalReward;
      sim_r.txns.push({
        amt: v3409,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v3412 = await ctc.getContractInfo();
      const v3413 = await ctc.getContractAddress();
      
      const v3419 = v3398.voteManager;
      const v3421 = v3398.deadline1_signupEnd;
      const v3422 = v3398.deadline2_voteStart;
      const v3423 = v3398.deadline3_voteEnd;
      const v3424 = v3398.deadline4_voteFinal;
      const v3425 = v3398.deadline5_rewardStart;
      const v3426 = v3398.deadline6_delete;
      const v3467 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v3471 = [v3467, v3467, v3467, v3467];
      const v3472 = v3471;
      const v3473 = false;
      const v3474 = v3409;
      const v3475 = stdlib.checkedBigNumberify('./index.rsh:151:24:decimal', stdlib.UInt_max, '0');
      const v3476 = stdlib.checkedBigNumberify('./index.rsh:152:24:decimal', stdlib.UInt_max, '0');
      const v3477 = stdlib.checkedBigNumberify('./index.rsh:149:23:decimal', stdlib.UInt_max, '0');
      const v3478 = stdlib.checkedBigNumberify('./index.rsh:150:23:decimal', stdlib.UInt_max, '0');
      const v3479 = v3400;
      
      if (await (async () => {
        const v3537 = v3473 ? false : true;
        
        return v3537;})()) {
        const v3538 = stdlib.add(v3475, v3476);
        const v3539 = stdlib.add(v3477, v3478);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v3399
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3398, v3399], secs: v3401, time: v3400, didSend: v222, from: v3397 } = txn1;
  ;
  const v3409 = v3398.totalReward;
  ;
  const v3412 = await ctc.getContractInfo();
  const v3413 = await ctc.getContractAddress();
  const v3415 = [v3412, v3413];
  stdlib.protect(ctc0, await interact.ready(v3415), {
    at: './index.rsh:116:26:application',
    fs: ['at ./index.rsh:116:26:application call to [unknown function] (defined at: ./index.rsh:116:26:function exp)', 'at ./index.rsh:116:26:application call to "liftedInteract" (defined at: ./index.rsh:116:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v3417 = v3398.consManager;
  const v3418 = v3398.consManagerAddr;
  const v3419 = v3398.voteManager;
  const v3420 = v3398.voteManagerAddr;
  const v3421 = v3398.deadline1_signupEnd;
  const v3422 = v3398.deadline2_voteStart;
  const v3423 = v3398.deadline3_voteEnd;
  const v3424 = v3398.deadline4_voteFinal;
  const v3425 = v3398.deadline5_rewardStart;
  const v3426 = v3398.deadline6_delete;
  const v3428 = stdlib.ctcAddrEq(v3417, v3418);
  stdlib.assert(v3428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'consManager',
    who: 'Deployer'
    });
  const v3430 = stdlib.ctcAddrEq(v3419, v3420);
  stdlib.assert(v3430, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteManager',
    who: 'Deployer'
    });
  const v3432 = stdlib.gt(v3409, stdlib.checkedBigNumberify('./index.rsh:37:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3432, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'totalReward',
    who: 'Deployer'
    });
  const v3434 = stdlib.lt(v3421, v3422);
  stdlib.assert(v3434, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteStart',
    who: 'Deployer'
    });
  const v3436 = stdlib.lt(v3422, v3423);
  stdlib.assert(v3436, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteEnd',
    who: 'Deployer'
    });
  const v3438 = stdlib.lt(v3423, v3424);
  stdlib.assert(v3438, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:40:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteFinal',
    who: 'Deployer'
    });
  const v3440 = stdlib.lt(v3424, v3425);
  stdlib.assert(v3440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'rewardStart',
    who: 'Deployer'
    });
  const v3442 = stdlib.lt(v3425, v3426);
  stdlib.assert(v3442, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:42:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'delete',
    who: 'Deployer'
    });
  const v3467 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3471 = [v3467, v3467, v3467, v3467];
  let v3472 = v3471;
  let v3473 = false;
  let v3474 = v3409;
  let v3475 = stdlib.checkedBigNumberify('./index.rsh:151:24:decimal', stdlib.UInt_max, '0');
  let v3476 = stdlib.checkedBigNumberify('./index.rsh:152:24:decimal', stdlib.UInt_max, '0');
  let v3477 = stdlib.checkedBigNumberify('./index.rsh:149:23:decimal', stdlib.UInt_max, '0');
  let v3478 = stdlib.checkedBigNumberify('./index.rsh:150:23:decimal', stdlib.UInt_max, '0');
  let v3479 = v3400;
  
  while (await (async () => {
    const v3537 = v3473 ? false : true;
    
    return v3537;})()) {
    const v3538 = stdlib.add(v3475, v3476);
    const v3539 = stdlib.add(v3477, v3478);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn2;
    switch (v3838[0]) {
      case 'Admin_delete0_544': {
        const v3841 = v3838[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3973 = stdlib.lt(v3426, v3840);
        stdlib.assert(v3973, {
          at: './index.rsh:305:16:application',
          fs: ['at ./index.rsh:304:44:application call to [unknown function] (defined at: ./index.rsh:304:44:function exp)'],
          msg: 'a delete',
          who: 'Deployer'
          });
        const v3974 = stdlib.add(v3475, v3474);
        ;
        ;
        const v3991 = [v3974, v3476];
        await txn2.getOutput('Admin_delete', 'v3991', ctc16, v3991);
        null;
        const cv3472 = v3472;
        const cv3473 = true;
        const cv3474 = stdlib.checkedBigNumberify('./index.rsh:316:28:decimal', stdlib.UInt_max, '0');
        const cv3475 = stdlib.checkedBigNumberify('./index.rsh:314:28:decimal', stdlib.UInt_max, '0');
        const cv3476 = stdlib.checkedBigNumberify('./index.rsh:315:28:decimal', stdlib.UInt_max, '0');
        const cv3477 = v3477;
        const cv3478 = v3478;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      case 'Governor_stake0_544': {
        const v4409 = v3838[1];
        undefined /* setApiDetails */;
        const v4421 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '0')];
        const v4422 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '1')];
        const v4424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
        let v4425;
        switch (v4424[0]) {
          case 'None': {
            const v4426 = v4424[1];
            v4425 = true;
            
            break;
            }
          case 'Some': {
            const v4427 = v4424[1];
            v4425 = false;
            
            break;
            }
          }
        stdlib.assert(v4425, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
          msg: 'unstaked',
          who: 'Deployer'
          });
        const v4429 = stdlib.add(v4421, v4422);
        const v4430 = stdlib.gt(v4429, stdlib.checkedBigNumberify('./index.rsh:201:21:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4430, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
          msg: 'positive stake',
          who: 'Deployer'
          });
        ;
        ;
        const v4571 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '2')];
        let v4573;
        switch (v4424[0]) {
          case 'None': {
            const v4574 = v4424[1];
            v4573 = true;
            
            break;
            }
          case 'Some': {
            const v4575 = v4424[1];
            v4573 = false;
            
            break;
            }
          }
        stdlib.assert(v4573, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:55:application call to [unknown function] (defined at: ./index.rsh:202:55:function exp)'],
          msg: 'unstaked',
          who: 'Deployer'
          });
        const v4584 = stdlib.lt(v3840, v3421);
        stdlib.assert(v4584, {
          at: './index.rsh:203:16:application',
          fs: ['at ./index.rsh:202:55:application call to [unknown function] (defined at: ./index.rsh:202:55:function exp)'],
          msg: 'b signupEnd',
          who: 'Deployer'
          });
        const v4585 = {
          bene: v4571,
          stakeN: v4421,
          stakeT: v4422,
          voted: false
          };
        await stdlib.mapSet(map0, v3837, v4585);
        const v4586 = true;
        await txn2.getOutput('Governor_stake', 'v4586', ctc3, v4586);
        null;
        const v4595 = stdlib.add(v3475, v4421);
        const v4596 = stdlib.add(v3476, v4422);
        const cv3472 = v3472;
        const cv3473 = false;
        const cv3474 = v3474;
        const cv3475 = v4595;
        const cv3476 = v4596;
        const cv3477 = v3477;
        const cv3478 = v3478;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      case 'Governor_unstake0_544': {
        const v4977 = v3838[1];
        undefined /* setApiDetails */;
        const v5007 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
        const v5008 = {
          bene: v3837,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v5010 = stdlib.fromSome(v5007, v5008);
        const v5011 = v5010.stakeN;
        const v5012 = v5010.stakeT;
        const v5013 = stdlib.add(v5011, v5012);
        ;
        ;
        const v5174 = v5010.bene;
        const v5177 = v5010.voted;
        const v5181 = stdlib.lt(v3425, v3840);
        const v5182 = v5181 ? v5177 : false;
        let v5183;
        if (v5182) {
          const v5184 = stdlib.muldiv(v3409, v5013, v3539);
          v5183 = v5184;
          }
        else {
          v5183 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
          }
        const v5185 = stdlib.le(v5183, v3474);
        stdlib.assert(v5185, {
          at: './index.rsh:268:43:application',
          fs: ['at ./index.rsh:291:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:290:25:application call to [unknown function] (defined at: ./index.rsh:290:25:function exp)'],
          msg: 'reward is portion of reward',
          who: 'Deployer'
          });
        const v5187 = v5177 ? v5181 : true;
        stdlib.assert(v5187, {
          at: './index.rsh:269:18:application',
          fs: ['at ./index.rsh:291:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:290:25:application call to [unknown function] (defined at: ./index.rsh:290:25:function exp)'],
          msg: 'a rewardStart',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, v3837, undefined /* Nothing */);
        ;
        ;
        ;
        await txn2.getOutput('Governor_unstake', 'v5183', ctc2, v5183);
        null;
        const v5213 = stdlib.sub(v3475, v5011);
        const v5214 = stdlib.sub(v3476, v5012);
        const v5215 = stdlib.sub(v3474, v5183);
        const cv3472 = v3472;
        const cv3473 = false;
        const cv3474 = v5215;
        const cv3475 = v5213;
        const cv3476 = v5214;
        const cv3477 = v3477;
        const cv3478 = v3478;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      case 'Governor_unvote0_544': {
        const v5545 = v3838[1];
        undefined /* setApiDetails */;
        const v5595 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
        const v5596 = {
          bene: v3837,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v5598 = stdlib.fromSome(v5595, v5596);
        const v5605 = v5598.voted;
        stdlib.assert(v5605, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:238:33:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
          msg: 'has voted already',
          who: 'Deployer'
          });
        ;
        ;
        const v5791 = v5598.stakeN;
        const v5792 = v5598.stakeT;
        const v5794 = v5598.bene;
        const v5801 = stdlib.lt(v3422, v3840);
        stdlib.assert(v5801, {
          at: './index.rsh:243:16:application',
          fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
          msg: 'a voteStart',
          who: 'Deployer'
          });
        const v5803 = stdlib.lt(v3840, v3424);
        stdlib.assert(v5803, {
          at: './index.rsh:244:16:application',
          fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
          msg: 'b voteFinal',
          who: 'Deployer'
          });
        const v5817 = {
          bene: v5794,
          stakeN: v5791,
          stakeT: v5792,
          voted: false
          };
        await stdlib.mapSet(map0, v3837, v5817);
        const v5821 = undefined /* Remote */;
        const v5822 = await txn2.getOutput('internal', 'v5821', ctc17, v5821);
        const v5824 = v5822[stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '0')];
        const v5825 = v5822[stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '1')];
        const v5850 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5824);
        stdlib.assert(v5850, {
          at: './index.rsh:248:11:application',
          fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        await txn2.getOutput('Governor_unvote', 'v5825', ctc12, v5825);
        null;
        const v5896 = stdlib.sub(v3477, v5791);
        const v5897 = stdlib.sub(v3478, v5792);
        const cv3472 = v5825;
        const cv3473 = false;
        const cv3474 = v3474;
        const cv3475 = v3475;
        const cv3476 = v3476;
        const cv3477 = v5896;
        const cv3478 = v5897;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      case 'Governor_vote0_544': {
        const v6113 = v3838[1];
        undefined /* setApiDetails */;
        const v6184 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
        const v6185 = {
          bene: v3837,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v6187 = stdlib.fromSome(v6184, v6185);
        const v6194 = v6187.voted;
        const v6196 = v6194 ? false : true;
        stdlib.assert(v6196, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:216:35:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
          msg: 'hasn\'t voted yet',
          who: 'Deployer'
          });
        ;
        ;
        const v6468 = v6113[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
        const v6473 = v6187.stakeN;
        const v6474 = v6187.stakeT;
        const v6475 = stdlib.add(v6473, v6474);
        const v6476 = v6187.bene;
        const v6485 = stdlib.lt(v3422, v3840);
        stdlib.assert(v6485, {
          at: './index.rsh:221:16:application',
          fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
          msg: 'a voteStart',
          who: 'Deployer'
          });
        const v6487 = stdlib.lt(v3840, v3423);
        stdlib.assert(v6487, {
          at: './index.rsh:222:16:application',
          fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
          msg: 'b voteEnd',
          who: 'Deployer'
          });
        const v6501 = {
          bene: v6476,
          stakeN: v6473,
          stakeT: v6474,
          voted: true
          };
        await stdlib.mapSet(map0, v3837, v6501);
        const v6525 = undefined /* Remote */;
        const v6526 = await txn2.getOutput('internal', 'v6525', ctc17, v6525);
        const v6528 = v6526[stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '0')];
        const v6529 = v6526[stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '1')];
        const v6554 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6528);
        stdlib.assert(v6554, {
          at: './index.rsh:226:11:application',
          fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        await txn2.getOutput('Governor_vote', 'v6529', ctc12, v6529);
        null;
        const v6621 = stdlib.add(v3477, v6473);
        const v6622 = stdlib.add(v3478, v6474);
        const cv3472 = v6529;
        const cv3473 = false;
        const cv3474 = v3474;
        const cv3475 = v3475;
        const cv3476 = v3476;
        const cv3477 = v6621;
        const cv3478 = v6622;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      case 'Other_claimFor0_544': {
        const v6681 = v3838[1];
        undefined /* setApiDetails */;
        const v6773 = v6681[stdlib.checkedBigNumberify('./index.rsh:294:10:spread', stdlib.UInt_max, '0')];
        const v6774 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6773), null);
        const v6775 = {
          bene: v6773,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v6777 = stdlib.fromSome(v6774, v6775);
        const v6778 = v6777.stakeN;
        const v6779 = v6777.stakeT;
        const v6780 = stdlib.add(v6778, v6779);
        ;
        ;
        const v7201 = v6777.bene;
        const v7204 = v6777.voted;
        const v7209 = stdlib.lt(v3425, v3840);
        stdlib.assert(v7209, {
          at: './index.rsh:297:16:application',
          fs: ['at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
          msg: 'a rewardStart',
          who: 'Deployer'
          });
        let v7213;
        if (v7204) {
          const v7214 = stdlib.muldiv(v3409, v6780, v3539);
          v7213 = v7214;
          }
        else {
          v7213 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
          }
        const v7215 = stdlib.le(v7213, v3474);
        stdlib.assert(v7215, {
          at: './index.rsh:268:43:application',
          fs: ['at ./index.rsh:298:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
          msg: 'reward is portion of reward',
          who: 'Deployer'
          });
        const v7217 = v7204 ? true : true;
        stdlib.assert(v7217, {
          at: './index.rsh:269:18:application',
          fs: ['at ./index.rsh:298:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
          msg: 'a rewardStart',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, v6773, undefined /* Nothing */);
        ;
        ;
        ;
        await txn2.getOutput('Other_claimFor', 'v7213', ctc2, v7213);
        null;
        const v7244 = stdlib.sub(v3475, v6778);
        const v7245 = stdlib.sub(v3476, v6779);
        const v7246 = stdlib.sub(v3474, v7213);
        const cv3472 = v3472;
        const cv3473 = false;
        const cv3474 = v7246;
        const cv3475 = v7244;
        const cv3476 = v7245;
        const cv3477 = v3477;
        const cv3478 = v3478;
        const cv3479 = v3839;
        
        v3472 = cv3472;
        v3473 = cv3473;
        v3474 = cv3474;
        v3475 = cv3475;
        v3476 = cv3476;
        v3477 = cv3477;
        v3478 = cv3478;
        v3479 = cv3479;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Governor_stake3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Governor_stake3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Governor_stake3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc12,
    Governor_stake0_544: ctc11,
    Governor_unstake0_544: ctc12,
    Governor_unvote0_544: ctc12,
    Governor_vote0_544: ctc13,
    Other_claimFor0_544: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3542 = ctc.selfAddress();
  const v3544 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_stake0_544" (defined at: ./index.rsh:194:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Governor_stake'
    });
  const v3545 = v3544[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3546 = v3544[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3542), null);
  let v3552;
  switch (v3551[0]) {
    case 'None': {
      const v3553 = v3551[1];
      v3552 = true;
      
      break;
      }
    case 'Some': {
      const v3554 = v3551[1];
      v3552 = false;
      
      break;
      }
    }
  stdlib.assert(v3552, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_stake0_544" (defined at: ./index.rsh:194:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'unstaked',
    who: 'Governor_stake'
    });
  const v3556 = stdlib.add(v3545, v3546);
  const v3557 = stdlib.gt(v3556, stdlib.checkedBigNumberify('./index.rsh:201:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_stake0_544" (defined at: ./index.rsh:194:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'positive stake',
    who: 'Governor_stake'
    });
  const v3568 = ['Governor_stake0_544', v3544];
  
  let v3726;
  switch (v3551[0]) {
    case 'None': {
      const v3727 = v3551[1];
      v3726 = true;
      
      break;
      }
    case 'Some': {
      const v3728 = v3551[1];
      v3726 = false;
      
      break;
      }
    }
  stdlib.assert(v3726, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
    msg: 'unstaked',
    who: 'Governor_stake'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3568],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [v3545, [[v3546, v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_stake"
            });
          const v4421 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '0')];
          const v4422 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3837), null);
          sim_r.txns.push({
            amt: v4421,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v4422,
            kind: 'to',
            tok: v3399
            });
          const v4571 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '2')];
          const v4585 = {
            bene: v4571,
            stakeN: v4421,
            stakeT: v4422,
            voted: false
            };
          await stdlib.simMapSet(sim_r, 0, v3837, v4585);
          const v4586 = true;
          const v4587 = await txn1.getOutput('Governor_stake', 'v4586', ctc3, v4586);
          
          null;
          const v4595 = stdlib.add(v3475, v4421);
          const v4596 = stdlib.add(v3476, v4422);
          const v18120 = v3472;
          const v18122 = v3474;
          const v18123 = v4595;
          const v18124 = v4596;
          const v18125 = v3477;
          const v18126 = v3478;
          const v18129 = stdlib.add(v4595, v4596);
          const v18130 = stdlib.add(v3477, v3478);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      return;
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      undefined /* setApiDetails */;
      const v4421 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '0')];
      const v4422 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '1')];
      const v4424 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
      let v4425;
      switch (v4424[0]) {
        case 'None': {
          const v4426 = v4424[1];
          v4425 = true;
          
          break;
          }
        case 'Some': {
          const v4427 = v4424[1];
          v4425 = false;
          
          break;
          }
        }
      stdlib.assert(v4425, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
        msg: 'unstaked',
        who: 'Governor_stake'
        });
      const v4429 = stdlib.add(v4421, v4422);
      const v4430 = stdlib.gt(v4429, stdlib.checkedBigNumberify('./index.rsh:201:21:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4430, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:52:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:194:52:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
        msg: 'positive stake',
        who: 'Governor_stake'
        });
      ;
      ;
      const v4571 = v4409[stdlib.checkedBigNumberify('./index.rsh:194:10:spread', stdlib.UInt_max, '2')];
      let v4573;
      switch (v4424[0]) {
        case 'None': {
          const v4574 = v4424[1];
          v4573 = true;
          
          break;
          }
        case 'Some': {
          const v4575 = v4424[1];
          v4573 = false;
          
          break;
          }
        }
      stdlib.assert(v4573, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:55:application call to [unknown function] (defined at: ./index.rsh:202:55:function exp)'],
        msg: 'unstaked',
        who: 'Governor_stake'
        });
      const v4584 = stdlib.lt(v3840, v3421);
      stdlib.assert(v4584, {
        at: './index.rsh:203:16:application',
        fs: ['at ./index.rsh:202:55:application call to [unknown function] (defined at: ./index.rsh:202:55:function exp)'],
        msg: 'b signupEnd',
        who: 'Governor_stake'
        });
      const v4585 = {
        bene: v4571,
        stakeN: v4421,
        stakeT: v4422,
        voted: false
        };
      await stdlib.mapSet(map0, v3837, v4585);
      const v4586 = true;
      const v4587 = await txn1.getOutput('Governor_stake', 'v4586', ctc3, v4586);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v4409, v4587), {
          at: './index.rsh:194:11:application',
          fs: ['at ./index.rsh:194:11:application call to [unknown function] (defined at: ./index.rsh:194:11:function exp)', 'at ./index.rsh:205:10:application call to "k" (defined at: ./index.rsh:202:55:function exp)', 'at ./index.rsh:202:55:application call to [unknown function] (defined at: ./index.rsh:202:55:function exp)'],
          msg: 'out',
          who: 'Governor_stake'
          });
        }
      else {
        }
      
      null;
      const v4595 = stdlib.add(v3475, v4421);
      const v4596 = stdlib.add(v3476, v4422);
      const v18120 = v3472;
      const v18122 = v3474;
      const v18123 = v4595;
      const v18124 = v4596;
      const v18125 = v3477;
      const v18126 = v3478;
      const v18129 = stdlib.add(v4595, v4596);
      const v18130 = stdlib.add(v3477, v3478);
      return;
      
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      return;
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      return;
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      return;
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Governor_unstake3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Governor_unstake3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Governor_unstake3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc11,
    Governor_stake0_544: ctc12,
    Governor_unstake0_544: ctc11,
    Governor_unvote0_544: ctc11,
    Governor_vote0_544: ctc13,
    Other_claimFor0_544: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3659 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:288:34:application call to [unknown function] (defined at: ./index.rsh:288:34:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_unstake0_544" (defined at: ./index.rsh:288:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Governor_unstake'
    });
  const v3676 = ['Governor_unstake0_544', v3659];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3676],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:264:19:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:264:23:decimal', stdlib.UInt_max, '0'), v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_unstake"
            });
          const v5007 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3837), null);
          const v5008 = {
            bene: v3837,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v5010 = stdlib.fromSome(v5007, v5008);
          const v5011 = v5010.stakeN;
          const v5012 = v5010.stakeT;
          const v5013 = stdlib.add(v5011, v5012);
          ;
          ;
          const v5174 = v5010.bene;
          const v5177 = v5010.voted;
          const v5181 = stdlib.lt(v3425, v3840);
          const v5182 = v5181 ? v5177 : false;
          let v5183;
          if (v5182) {
            const v5184 = stdlib.muldiv(v3409, v5013, v3539);
            v5183 = v5184;
            }
          else {
            v5183 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
            }
          await stdlib.simMapSet(sim_r, 0, v3837, undefined /* Nothing */);
          sim_r.txns.push({
            kind: 'from',
            to: v3837,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v3837,
            tok: v3399
            });
          sim_r.txns.push({
            kind: 'from',
            to: v5174,
            tok: undefined /* Nothing */
            });
          const v5208 = await txn1.getOutput('Governor_unstake', 'v5183', ctc2, v5183);
          
          null;
          const v5213 = stdlib.sub(v3475, v5011);
          const v5214 = stdlib.sub(v3476, v5012);
          const v5215 = stdlib.sub(v3474, v5183);
          const v18211 = v3472;
          const v18213 = v5215;
          const v18214 = v5213;
          const v18215 = v5214;
          const v18216 = v3477;
          const v18217 = v3478;
          const v18220 = stdlib.add(v5213, v5214);
          const v18221 = stdlib.add(v3477, v3478);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      return;
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      return;
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      undefined /* setApiDetails */;
      const v5007 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
      const v5008 = {
        bene: v3837,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v5010 = stdlib.fromSome(v5007, v5008);
      const v5011 = v5010.stakeN;
      const v5012 = v5010.stakeT;
      const v5013 = stdlib.add(v5011, v5012);
      ;
      ;
      const v5174 = v5010.bene;
      const v5177 = v5010.voted;
      const v5181 = stdlib.lt(v3425, v3840);
      const v5182 = v5181 ? v5177 : false;
      let v5183;
      if (v5182) {
        const v5184 = stdlib.muldiv(v3409, v5013, v3539);
        v5183 = v5184;
        }
      else {
        v5183 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
        }
      const v5185 = stdlib.le(v5183, v3474);
      stdlib.assert(v5185, {
        at: './index.rsh:268:43:application',
        fs: ['at ./index.rsh:291:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:290:25:application call to [unknown function] (defined at: ./index.rsh:290:25:function exp)'],
        msg: 'reward is portion of reward',
        who: 'Governor_unstake'
        });
      const v5187 = v5177 ? v5181 : true;
      stdlib.assert(v5187, {
        at: './index.rsh:269:18:application',
        fs: ['at ./index.rsh:291:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:290:25:application call to [unknown function] (defined at: ./index.rsh:290:25:function exp)'],
        msg: 'a rewardStart',
        who: 'Governor_unstake'
        });
      await stdlib.mapSet(map0, v3837, undefined /* Nothing */);
      ;
      ;
      ;
      const v5208 = await txn1.getOutput('Governor_unstake', 'v5183', ctc2, v5183);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v4977, v5208), {
          at: './index.rsh:288:11:application',
          fs: ['at ./index.rsh:288:11:application call to [unknown function] (defined at: ./index.rsh:288:11:function exp)', 'at ./index.rsh:276:12:application call to "k" (defined at: ./index.rsh:290:25:function exp)', 'at ./index.rsh:291:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:290:25:application call to [unknown function] (defined at: ./index.rsh:290:25:function exp)'],
          msg: 'out',
          who: 'Governor_unstake'
          });
        }
      else {
        }
      
      null;
      const v5213 = stdlib.sub(v3475, v5011);
      const v5214 = stdlib.sub(v3476, v5012);
      const v5215 = stdlib.sub(v3474, v5183);
      const v18211 = v3472;
      const v18213 = v5215;
      const v18214 = v5213;
      const v18215 = v5214;
      const v18216 = v3477;
      const v18217 = v3478;
      const v18220 = stdlib.add(v5213, v5214);
      const v18221 = stdlib.add(v3477, v3478);
      return;
      
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      return;
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      return;
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Governor_unvote3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Governor_unvote3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Governor_unvote3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc11,
    Governor_stake0_544: ctc12,
    Governor_unstake0_544: ctc11,
    Governor_unvote0_544: ctc11,
    Governor_vote0_544: ctc13,
    Other_claimFor0_544: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc10]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3636 = ctc.selfAddress();
  const v3638 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:238:33:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_unvote0_544" (defined at: ./index.rsh:238:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Governor_unvote'
    });
  const v3639 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3636), null);
  const v3640 = {
    bene: v3636,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v3642 = stdlib.fromSome(v3639, v3640);
  const v3649 = v3642.voted;
  stdlib.assert(v3649, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:238:33:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_unvote0_544" (defined at: ./index.rsh:238:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'has voted already',
    who: 'Governor_unvote'
    });
  const v3655 = ['Governor_unvote0_544', v3638];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3655],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:242:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:242:22:decimal', stdlib.UInt_max, '0'), v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_unvote"
            });
          const v5595 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3837), null);
          const v5596 = {
            bene: v3837,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v5598 = stdlib.fromSome(v5595, v5596);
          ;
          ;
          const v5791 = v5598.stakeN;
          const v5792 = v5598.stakeT;
          const v5794 = v5598.bene;
          const v5817 = {
            bene: v5794,
            stakeN: v5791,
            stakeT: v5792,
            voted: false
            };
          await stdlib.simMapSet(sim_r, 0, v3837, v5817);
          const v5821 = [stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
            kind: 'remote',
            obj: v3419,
            remote: ({
              accs: [v3837],
              apps: [],
              bills: stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('./index.rsh:246:56:application', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })), undefined)];
          const v5822 = await txn1.getOutput('internal', 'v5821', ctc16, v5821);
          const v5825 = v5822[stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '1')];
          const v5851 = await txn1.getOutput('Governor_unvote', 'v5825', ctc10, v5825);
          
          null;
          const v5896 = stdlib.sub(v3477, v5791);
          const v5897 = stdlib.sub(v3478, v5792);
          const v18302 = v5825;
          const v18304 = v3474;
          const v18305 = v3475;
          const v18306 = v3476;
          const v18307 = v5896;
          const v18308 = v5897;
          const v18311 = stdlib.add(v3475, v3476);
          const v18312 = stdlib.add(v5896, v5897);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      return;
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      return;
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      return;
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      undefined /* setApiDetails */;
      const v5595 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
      const v5596 = {
        bene: v3837,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v5598 = stdlib.fromSome(v5595, v5596);
      const v5605 = v5598.voted;
      stdlib.assert(v5605, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:238:33:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:238:33:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
        msg: 'has voted already',
        who: 'Governor_unvote'
        });
      ;
      ;
      const v5791 = v5598.stakeN;
      const v5792 = v5598.stakeT;
      const v5794 = v5598.bene;
      const v5801 = stdlib.lt(v3422, v3840);
      stdlib.assert(v5801, {
        at: './index.rsh:243:16:application',
        fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
        msg: 'a voteStart',
        who: 'Governor_unvote'
        });
      const v5803 = stdlib.lt(v3840, v3424);
      stdlib.assert(v5803, {
        at: './index.rsh:244:16:application',
        fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
        msg: 'b voteFinal',
        who: 'Governor_unvote'
        });
      const v5817 = {
        bene: v5794,
        stakeN: v5791,
        stakeT: v5792,
        voted: false
        };
      await stdlib.mapSet(map0, v3837, v5817);
      const v5821 = undefined /* Remote */;
      const v5822 = await txn1.getOutput('internal', 'v5821', ctc16, v5821);
      const v5824 = v5822[stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '0')];
      const v5825 = v5822[stdlib.checkedBigNumberify('./index.rsh:248:11:application', stdlib.UInt_max, '1')];
      const v5850 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5824);
      stdlib.assert(v5850, {
        at: './index.rsh:248:11:application',
        fs: ['at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
        msg: 'remote bill check',
        who: 'Governor_unvote'
        });
      const v5851 = await txn1.getOutput('Governor_unvote', 'v5825', ctc10, v5825);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v5545, v5851), {
          at: './index.rsh:238:11:application',
          fs: ['at ./index.rsh:238:11:application call to [unknown function] (defined at: ./index.rsh:238:11:function exp)', 'at ./index.rsh:249:10:application call to "k" (defined at: ./index.rsh:242:44:function exp)', 'at ./index.rsh:242:44:application call to [unknown function] (defined at: ./index.rsh:242:44:function exp)'],
          msg: 'out',
          who: 'Governor_unvote'
          });
        }
      else {
        }
      
      null;
      const v5896 = stdlib.sub(v3477, v5791);
      const v5897 = stdlib.sub(v3478, v5792);
      const v18302 = v5825;
      const v18304 = v3474;
      const v18305 = v3475;
      const v18306 = v3476;
      const v18307 = v5896;
      const v18308 = v5897;
      const v18311 = stdlib.add(v3475, v3476);
      const v18312 = stdlib.add(v5896, v5897);
      return;
      
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      return;
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Governor_vote3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Governor_vote3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Governor_vote3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc12,
    Governor_stake0_544: ctc13,
    Governor_unstake0_544: ctc12,
    Governor_unvote0_544: ctc12,
    Governor_vote0_544: ctc11,
    Other_claimFor0_544: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc10]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3570 = ctc.selfAddress();
  const v3572 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:216:35:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_vote0_544" (defined at: ./index.rsh:216:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Governor_vote'
    });
  const v3595 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3570), null);
  const v3596 = {
    bene: v3570,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v3598 = stdlib.fromSome(v3595, v3596);
  const v3605 = v3598.voted;
  const v3607 = v3605 ? false : true;
  stdlib.assert(v3607, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:216:35:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to "runGovernor_vote0_544" (defined at: ./index.rsh:216:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'hasn\'t voted yet',
    who: 'Governor_vote'
    });
  const v3634 = ['Governor_vote0_544', v3572];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3634],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:220:22:decimal', stdlib.UInt_max, '0'), v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_vote"
            });
          const v6184 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v3837), null);
          const v6185 = {
            bene: v3837,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v6187 = stdlib.fromSome(v6184, v6185);
          ;
          ;
          const v6468 = v6113[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v6473 = v6187.stakeN;
          const v6474 = v6187.stakeT;
          const v6475 = stdlib.add(v6473, v6474);
          const v6476 = v6187.bene;
          const v6501 = {
            bene: v6476,
            stakeN: v6473,
            stakeT: v6474,
            voted: true
            };
          await stdlib.simMapSet(sim_r, 0, v3837, v6501);
          const v6525 = [stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
            kind: 'remote',
            obj: v3419,
            remote: ({
              accs: [v3837],
              apps: [],
              bills: stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('./index.rsh:224:52:application', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })), undefined)];
          const v6526 = await txn1.getOutput('internal', 'v6525', ctc16, v6525);
          const v6529 = v6526[stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '1')];
          const v6555 = await txn1.getOutput('Governor_vote', 'v6529', ctc10, v6529);
          
          null;
          const v6621 = stdlib.add(v3477, v6473);
          const v6622 = stdlib.add(v3478, v6474);
          const v18393 = v6529;
          const v18395 = v3474;
          const v18396 = v3475;
          const v18397 = v3476;
          const v18398 = v6621;
          const v18399 = v6622;
          const v18402 = stdlib.add(v3475, v3476);
          const v18403 = stdlib.add(v6621, v6622);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      return;
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      return;
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      return;
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      return;
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      undefined /* setApiDetails */;
      const v6184 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3837), null);
      const v6185 = {
        bene: v3837,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v6187 = stdlib.fromSome(v6184, v6185);
      const v6194 = v6187.voted;
      const v6196 = v6194 ? false : true;
      stdlib.assert(v6196, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:216:35:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:216:35:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)', 'at ./index.rsh:193:14:application call to [unknown function] (defined at: ./index.rsh:193:14:function exp)'],
        msg: 'hasn\'t voted yet',
        who: 'Governor_vote'
        });
      ;
      ;
      const v6468 = v6113[stdlib.checkedBigNumberify('./index.rsh:216:10:spread', stdlib.UInt_max, '0')];
      const v6473 = v6187.stakeN;
      const v6474 = v6187.stakeT;
      const v6475 = stdlib.add(v6473, v6474);
      const v6476 = v6187.bene;
      const v6485 = stdlib.lt(v3422, v3840);
      stdlib.assert(v6485, {
        at: './index.rsh:221:16:application',
        fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
        msg: 'a voteStart',
        who: 'Governor_vote'
        });
      const v6487 = stdlib.lt(v3840, v3423);
      stdlib.assert(v6487, {
        at: './index.rsh:222:16:application',
        fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
        msg: 'b voteEnd',
        who: 'Governor_vote'
        });
      const v6501 = {
        bene: v6476,
        stakeN: v6473,
        stakeT: v6474,
        voted: true
        };
      await stdlib.mapSet(map0, v3837, v6501);
      const v6525 = undefined /* Remote */;
      const v6526 = await txn1.getOutput('internal', 'v6525', ctc16, v6525);
      const v6528 = v6526[stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '0')];
      const v6529 = v6526[stdlib.checkedBigNumberify('./index.rsh:226:11:application', stdlib.UInt_max, '1')];
      const v6554 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6528);
      stdlib.assert(v6554, {
        at: './index.rsh:226:11:application',
        fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
        msg: 'remote bill check',
        who: 'Governor_vote'
        });
      const v6555 = await txn1.getOutput('Governor_vote', 'v6529', ctc10, v6529);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v6113, v6555), {
          at: './index.rsh:216:11:application',
          fs: ['at ./index.rsh:216:11:application call to [unknown function] (defined at: ./index.rsh:216:11:function exp)', 'at ./index.rsh:227:10:application call to "k" (defined at: ./index.rsh:220:44:function exp)', 'at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)'],
          msg: 'out',
          who: 'Governor_vote'
          });
        }
      else {
        }
      
      null;
      const v6621 = stdlib.add(v3477, v6473);
      const v6622 = stdlib.add(v3478, v6474);
      const v18393 = v6529;
      const v18395 = v3474;
      const v18396 = v3475;
      const v18397 = v3476;
      const v18398 = v6621;
      const v18399 = v6622;
      const v18402 = stdlib.add(v3475, v3476);
      const v18403 = stdlib.add(v6621, v6622);
      return;
      
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Other_claimFor3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Other_claimFor3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Other_claimFor3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    bene: ctc1,
    stakeN: ctc2,
    stakeT: ctc2,
    voted: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Struct([['period', ctc2], ['consManager', ctc6], ['consManagerAddr', ctc1], ['voteManager', ctc6], ['voteManagerAddr', ctc1], ['measures', ctc2], ['choicesPerMeasure', ctc7], ['deadline1_signupEnd', ctc2], ['deadline2_voteStart', ctc2], ['deadline3_voteEnd', ctc2], ['deadline4_voteFinal', ctc2], ['deadline5_rewardStart', ctc2], ['deadline6_delete', ctc2], ['totalReward', ctc2]]);
  const ctc9 = stdlib.T_Token;
  const ctc10 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Data({
    Admin_delete0_544: ctc12,
    Governor_stake0_544: ctc13,
    Governor_unstake0_544: ctc12,
    Governor_unvote0_544: ctc12,
    Governor_vote0_544: ctc14,
    Other_claimFor0_544: ctc11
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2]);
  const v3680 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:294:35:application call to [unknown function] (defined at: ./index.rsh:294:35:function exp)', 'at ./index.rsh:146:19:application call to "runOther_claimFor0_544" (defined at: ./index.rsh:294:10:function exp)', 'at ./index.rsh:146:19:application call to [unknown function] (defined at: ./index.rsh:146:19:function exp)'],
    msg: 'in',
    who: 'Other_claimFor'
    });
  const v3701 = ['Other_claimFor0_544', v3680];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3397, v3398, v3399, v3409, v3419, v3421, v3422, v3423, v3424, v3425, v3426, v3472, v3474, v3475, v3476, v3477, v3478, v3538, v3539, v3701],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:264:19:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:264:23:decimal', stdlib.UInt_max, '0'), v3399]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
      
      switch (v3838[0]) {
        case 'Admin_delete0_544': {
          const v3841 = v3838[1];
          
          break;
          }
        case 'Governor_stake0_544': {
          const v4409 = v3838[1];
          
          break;
          }
        case 'Governor_unstake0_544': {
          const v4977 = v3838[1];
          
          break;
          }
        case 'Governor_unvote0_544': {
          const v5545 = v3838[1];
          
          break;
          }
        case 'Governor_vote0_544': {
          const v6113 = v3838[1];
          
          break;
          }
        case 'Other_claimFor0_544': {
          const v6681 = v3838[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Other_claimFor"
            });
          const v6773 = v6681[stdlib.checkedBigNumberify('./index.rsh:294:10:spread', stdlib.UInt_max, '0')];
          const v6774 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v6773), null);
          const v6775 = {
            bene: v6773,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v6777 = stdlib.fromSome(v6774, v6775);
          const v6778 = v6777.stakeN;
          const v6779 = v6777.stakeT;
          const v6780 = stdlib.add(v6778, v6779);
          ;
          ;
          const v7201 = v6777.bene;
          const v7204 = v6777.voted;
          let v7213;
          if (v7204) {
            const v7214 = stdlib.muldiv(v3409, v6780, v3539);
            v7213 = v7214;
            }
          else {
            v7213 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
            }
          await stdlib.simMapSet(sim_r, 0, v6773, undefined /* Nothing */);
          sim_r.txns.push({
            kind: 'from',
            to: v6773,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v6773,
            tok: v3399
            });
          sim_r.txns.push({
            kind: 'from',
            to: v7201,
            tok: undefined /* Nothing */
            });
          const v7238 = await txn1.getOutput('Other_claimFor', 'v7213', ctc2, v7213);
          
          null;
          const v7244 = stdlib.sub(v3475, v6778);
          const v7245 = stdlib.sub(v3476, v6779);
          const v7246 = stdlib.sub(v3474, v7213);
          const v18484 = v3472;
          const v18486 = v7246;
          const v18487 = v7244;
          const v18488 = v7245;
          const v18489 = v3477;
          const v18490 = v3478;
          const v18493 = stdlib.add(v7244, v7245);
          const v18494 = stdlib.add(v3477, v3478);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3838], secs: v3840, time: v3839, didSend: v2596, from: v3837 } = txn1;
  switch (v3838[0]) {
    case 'Admin_delete0_544': {
      const v3841 = v3838[1];
      return;
      break;
      }
    case 'Governor_stake0_544': {
      const v4409 = v3838[1];
      return;
      break;
      }
    case 'Governor_unstake0_544': {
      const v4977 = v3838[1];
      return;
      break;
      }
    case 'Governor_unvote0_544': {
      const v5545 = v3838[1];
      return;
      break;
      }
    case 'Governor_vote0_544': {
      const v6113 = v3838[1];
      return;
      break;
      }
    case 'Other_claimFor0_544': {
      const v6681 = v3838[1];
      undefined /* setApiDetails */;
      const v6773 = v6681[stdlib.checkedBigNumberify('./index.rsh:294:10:spread', stdlib.UInt_max, '0')];
      const v6774 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6773), null);
      const v6775 = {
        bene: v6773,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v6777 = stdlib.fromSome(v6774, v6775);
      const v6778 = v6777.stakeN;
      const v6779 = v6777.stakeT;
      const v6780 = stdlib.add(v6778, v6779);
      ;
      ;
      const v7201 = v6777.bene;
      const v7204 = v6777.voted;
      const v7209 = stdlib.lt(v3425, v3840);
      stdlib.assert(v7209, {
        at: './index.rsh:297:16:application',
        fs: ['at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
        msg: 'a rewardStart',
        who: 'Other_claimFor'
        });
      let v7213;
      if (v7204) {
        const v7214 = stdlib.muldiv(v3409, v6780, v3539);
        v7213 = v7214;
        }
      else {
        v7213 = stdlib.checkedBigNumberify('./index.rsh:267:121:decimal', stdlib.UInt_max, '0');
        }
      const v7215 = stdlib.le(v7213, v3474);
      stdlib.assert(v7215, {
        at: './index.rsh:268:43:application',
        fs: ['at ./index.rsh:298:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
        msg: 'reward is portion of reward',
        who: 'Other_claimFor'
        });
      const v7217 = v7204 ? true : true;
      stdlib.assert(v7217, {
        at: './index.rsh:269:18:application',
        fs: ['at ./index.rsh:298:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
        msg: 'a rewardStart',
        who: 'Other_claimFor'
        });
      await stdlib.mapSet(map0, v6773, undefined /* Nothing */);
      ;
      ;
      ;
      const v7238 = await txn1.getOutput('Other_claimFor', 'v7213', ctc2, v7213);
      if (v2596) {
        stdlib.protect(ctc0, await interact.out(v6681, v7238), {
          at: './index.rsh:294:11:application',
          fs: ['at ./index.rsh:294:11:application call to [unknown function] (defined at: ./index.rsh:294:11:function exp)', 'at ./index.rsh:276:12:application call to "k" (defined at: ./index.rsh:296:25:function exp)', 'at ./index.rsh:298:23:application call to "doAfter" (defined at: ./index.rsh:264:44:function exp)', 'at ./index.rsh:296:25:application call to [unknown function] (defined at: ./index.rsh:296:25:function exp)'],
          msg: 'out',
          who: 'Other_claimFor'
          });
        }
      else {
        }
      
      null;
      const v7244 = stdlib.sub(v3475, v6778);
      const v7245 = stdlib.sub(v3476, v6779);
      const v7246 = stdlib.sub(v3474, v7213);
      const v18484 = v3472;
      const v18486 = v7246;
      const v18487 = v7244;
      const v18488 = v7245;
      const v18489 = v3477;
      const v18490 = v3478;
      const v18493 = stdlib.add(v7244, v7245);
      const v18494 = stdlib.add(v3477, v3478);
      return;
      
      break;
      }
    }
  
  
  };
export async function Admin_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Admin_delete3(ctcTop, interact);}
  };
export async function Governor_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Governor_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Governor_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Governor_stake3(ctcTop, interact);}
  };
export async function Governor_unstake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Governor_unstake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Governor_unstake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Governor_unstake3(ctcTop, interact);}
  };
export async function Governor_unvote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Governor_unvote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Governor_unvote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Governor_unvote3(ctcTop, interact);}
  };
export async function Governor_vote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Governor_vote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Governor_vote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Governor_vote3(ctcTop, interact);}
  };
export async function Other_claimFor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Other_claimFor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Other_claimFor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Other_claimFor3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_delete()(uint64,uint64)`, `Governor_stake(uint64,uint64,address)byte`, `Governor_unstake()uint64`, `Governor_unvote()uint64[4][4]`, `Governor_vote(uint64[4][4])uint64[4][4]`, `Other_claimFor(address)uint64`],
    pure: [`Info()((uint64,uint64,address,uint64,address,uint64,uint64[4],uint64,uint64,uint64,uint64,uint64,uint64,uint64),uint64,uint64[4][4],uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `accountData(address)(address,uint64,uint64,uint64,byte)`],
    sigs: [`Admin_delete()(uint64,uint64)`, `Governor_stake(uint64,uint64,address)byte`, `Governor_unstake()uint64`, `Governor_unvote()uint64[4][4]`, `Governor_vote(uint64[4][4])uint64[4][4]`, `Info()((uint64,uint64,address,uint64,address,uint64,uint64[4],uint64,uint64,uint64,uint64,uint64,uint64,uint64),uint64,uint64[4][4],uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `Other_claimFor(address)uint64`, `accountData(address)(address,uint64,uint64,uint64,byte)`]
    },
  appApproval: `BiAbAAgBBIABAyAoMgUC05uT7gbIjdHRCcOxjfoPiO3GwAmxi9SRArKfq/oEire6vAGgAtADuAPAA6gDsAOgAwagjQYmCAEAAQEAAQIBAwVhcHBJRAQf58LJCAAAAAAAAAABIjUAMRhBCecqZEkiWzUBI1s1AjEZJBJBAAoxACghCK9mQgm0NhoAF0lBAWwiNQQkNQZJIQsMQACrSSEMDEAAK0khDQxAABIhDRJEKjX/KzT/UCEEr1BCAVchDBJEKjX/KDT/UCEEr1BCAUVJIQ4MQABWIQ4SRDQBIQUSRDYaAUk1/yOvUCOvUChQNP+ICX5JNf1XATE0/SJVTUk1/iEGWzX9NP4hB1s1/DT+VwAgNP00/AgWUDT9FlA0/BZQNP5XMAFQNQdCCR8hCxJENhoBNhoCUDYaA1A1/yk0/1CBUK9QQgDMSSEPDEAAMEkhEAxAABMhEBJEKjX/JwQ0/1AhBK9QQgCrIQ8SRDYaATX/gAEFNP9QgWCvUEIAlUkhEQxAAGEhERJENAEhBRJEKGQpZFArZFAnBGRQSTUDVyC4NANX2AhQNAMhEiEEWFA0AyETI1hQNAMhFCNYUDQDIRUjWFA0A4HIAyNYUDQDIRYjWFA0AyEXI1hQNAMhGCNYUDUHQghkgYW/ynwSRDYaATX/gAEENP9QQgAYNhoCFzUENhoDNhoBF0khCgxABishChJEIQU0ARJENARJIhJMNAISEUQoZClkUCtkUCcEZFBJNQNJSkpKSkpKSkpXACA1/1cguDX+gdgBWzX9geABWzX8gegBWzX7gfABWzX6gfgBWzX5gYACWzX4gYgCWzX3gZACWzX2gZgCWzX1IRIhBFg19CEYWzXzIRZbNfIhF1s18SEUWzXwIRVbNe8hE1s17kk1BTXtgATfTJuZNO1QsDTtIlVJIQUMQAMxSSUMQAIlSSEJDEABBCEJEkQ07VcBIDXsNOxJNesjr1Ajr1AoUDTriAeLSTXpVwExNOkiVU1JNeohBls16TTqIQdbNeg06lcAIDXnNOpXMAEXNeY09jIHDEQ05kEAEDT8NOk06AgdNO6XNeVCAAMiNeU05TTzDkQ05iQRRDTrKCEIr2axIrIBNOmyCCSyEDTrsgezsSKyATToshIlshA067IUNP2yEbOxIrIBNOWyCCSyEDTnsgezgAgAAAAAAAAcLTTlFlCwNOUWNQcnBjTrUDTnUDTpFlA06BZQNOUWULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQiNPM05Qk08jTpCTTxNOgJNPA07zIGQgVvSDTtVwGANewxACOvUCOvUChQMQCIBo1JNepXATE06iJVTUk161cwARcURDTrIQZbNeo06yEHWzXpNPkyBwxEMgc0+AxEMQAoKTTrVwAgNOoWUDTpFlApUFBmJwU0+xZQAzXnMgp4NeYyCmA05gkWNeWxIrIBIRmyEDT7shiABEh5S0ayGjEAshwnB7IaNOo06QgWsho07LIaszIKYDTmCTTlFwkWtwA+VwQAUDXogAgAAAAAAAAZfTToULA06Ek151cIgDXmIjTnIlsSRIAIAAAAAAAAGYE05lCwNOY1B4AELy79ljEAUDTmULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NOYiNPM08jTxNPA06gg07zTpCDIGQgRVSDEAI69QI69QKFAxAIgFekk161cBMTTrIlVNSTXsVzABF0Q07CEGWzXrNOwhB1s16jT5MgcMRDIHNPcMRDEAKCk07FcAIDTrFlA06hZQKFBQZicFNPsWUAM16DIKeDXnMgpgNOcJFjXmsSKyASEZshA0+7IYgAQ5juuqshoxALIcJweyGrMyCmA05wk05hcJFrcAPlcEAFA16YAIAAAAAAAAFr006VCwNOlJNehXCIA15yI06CJbEkSACAAAAAAAABbBNOdQsDTnNQeABNYCPUYxAFA051CwNP80/jT9NPw0+zT6NPk0+DT3NPY09TTnIjTzNPI08TTwNOsJNO806gkyBkIDT0kkDEABzkkhCgxAAPxIMQAjr1Ajr1AoUDEAiARnSTXrVwExNOsiVU1JNewhBls16zTsIQdbNeo07FcAIDXpNOxXMAEXNeg09jIHDEk15zToEEEAEDT8NOs06ggdNO6XNeZCAAMiNeY05jTzDkQ06BQ05xFEMQAoIQivZrEisgE067IIJLIQMQCyB7OxIrIBNOqyEiWyEDEAshQ0/bIRs7EisgE05rIIJLIQNOmyB7OACAAAAAAAABQ/NOYWULA05hY1BycGMQBQNOlQNOsWUDTqFlA05hZQsDT/NP40/TT8NPs0+jT5NPg09zT2NPU09CI08zTmCTTyNOsJNPE06gk08DTvMgZCAkZINO1XATA17DTsIls16zTsI1s16jEAiANiSTXpIlVAAAYkNehCAAYiNehCAAA06EQ06zTqCCINRDTriANNNOo0/YgDXjTsVxAgNec06SJVQAAGJDXmQgAGIjXmQgAANOZEMgc0+gxEMQAoKTTnNOsWUDTqFlAoUFBmgAkAAAAAAAAR6gGwKTUHgARZ0chBMQBQNOsWUDTqFlA051CwNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IjTzNPI06wg08TTqCDTwNO8yBkIBe0g09TIHDEQ08jTzCDXssSKyATTssggkshA0/7IHs7EisgE08bISJbIQNP+yFDT9shGzgAgAAAAAAAAPlzTsFjTxFlBQsDTsFjTxFlA1B4AEo7ziE7A0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQkIiIiNPA07zIGQgEBIhJEIRqIAj0iNAESRDQESSISTDQCEhFESTUFSVcAuDX/gbgBWzX+gATVYjRVNP9QNP4WULAhGogCC7EisgEishIlshAyCrIUNP6yEbM0/4GwAVs1/TT9iAHrNP+BMFs1/DT/IQRbNfs0/4GIAVs1+jT/gZABWzX5NP+BmAFbNfg0/4GgAVs19zT/gagBWzX2JwU0/1cICFADNP9XECASRCcFNPwWUAM0/1c4IBJENP0iDUQ0+zT6DEQ0+jT5DEQ0+TT4DEQ0+DT3DEQ09zT2DEQyAzX1MQA0/zT+NP00/DT7NPo0+TT4NPc09jT1SVA09VA09VAiNP0iIiIiMgZCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TT5QQAasSKyASKyEiWyEDIJshUyCrIUNO+yEbNCAII0+zT8CDXsNP00/gg16zTtNO5QNO8WUDTwFlA08RZQNPIWUDTzFlA09BZQNPUWUDT2FlA09xZQNPhQNPoWUDT7FlA0/BZQNP0WUDT+FlA07BZQNOsWUChLAVcAf2cpSwFXf39nK0sBV/5/ZycESwGB/QKBW1hnSCEFNQEyBjUCQgAcMRkhCRJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCEJMTUSRCIxNhJEJDE3EkQiNQEiNQJC/65JMRhhQAAFSCEIr4koYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 50,
  stateKeys: 4,
  stateSize: 472,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/algo-govt/index.rsh:226:11:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/algo-govt/index.rsh:248:11:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "period",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "consManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "consManagerAddr",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "voteManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "voteManagerAddr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "measures",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4]",
                    "name": "choicesPerMeasure",
                    "type": "uint256[4]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline1_signupEnd",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline2_voteStart",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline3_voteEnd",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline4_voteFinal",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline5_rewardStart",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline6_delete",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalReward",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v3398",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3399",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "period",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "consManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "consManagerAddr",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "voteManager",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "voteManagerAddr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "measures",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4]",
                    "name": "choicesPerMeasure",
                    "type": "uint256[4]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline1_signupEnd",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline2_voteStart",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline3_voteEnd",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline4_voteFinal",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline5_rewardStart",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "deadline6_delete",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalReward",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v3398",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v3399",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_delete0_544",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Governor_stake0_544",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unstake0_544",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unvote0_544",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256[4][4]",
                        "name": "elem0",
                        "type": "uint256[4][4]"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Governor_vote0_544",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Other_claimFor0_544",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v3838",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3991",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4586",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v5183",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256[4][4]",
            "name": "elem1",
            "type": "uint256[4][4]"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v5821",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[4][4]",
        "name": "v0",
        "type": "uint256[4][4]"
      }
    ],
    "name": "_reach_oe_v5825",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256[4][4]",
            "name": "elem1",
            "type": "uint256[4][4]"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v6525",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[4][4]",
        "name": "v0",
        "type": "uint256[4][4]"
      }
    ],
    "name": "_reach_oe_v6529",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v7213",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "deleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
      }
    ],
    "name": "stake",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v3",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v4",
        "type": "uint256"
      }
    ],
    "name": "unstake",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[4][4]",
        "name": "v1",
        "type": "uint256[4][4]"
      }
    ],
    "name": "unvote",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[4][4]",
        "name": "v1",
        "type": "uint256[4][4]"
      }
    ],
    "name": "vote",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Admin_delete",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T18",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_a2",
        "type": "address"
      }
    ],
    "name": "Governor_stake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Governor_unstake",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Governor_unvote",
    "outputs": [
      {
        "internalType": "uint256[4][4]",
        "name": "",
        "type": "uint256[4][4]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[4][4]",
        "name": "_a0",
        "type": "uint256[4][4]"
      }
    ],
    "name": "Governor_vote",
    "outputs": [
      {
        "internalType": "uint256[4][4]",
        "name": "",
        "type": "uint256[4][4]"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Info",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "period",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "consManager",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "consManagerAddr",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "voteManager",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "voteManagerAddr",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "measures",
                "type": "uint256"
              },
              {
                "internalType": "uint256[4]",
                "name": "choicesPerMeasure",
                "type": "uint256[4]"
              },
              {
                "internalType": "uint256",
                "name": "deadline1_signupEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline2_voteStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline3_voteEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline4_voteFinal",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline5_rewardStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline6_delete",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalReward",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "stakePeriod",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "stakeToken",
            "type": "address"
          },
          {
            "internalType": "uint256[4][4]",
            "name": "currentVote",
            "type": "uint256[4][4]"
          },
          {
            "internalType": "uint256",
            "name": "rewardedStake",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardedStakeN",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardedStakeT",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "remainingStake",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "remainingStakeN",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "remainingStakeT",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "remainingReward",
            "type": "uint256"
          }
        ],
        "internalType": "struct T5",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Other_claimFor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "_bene",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_stakeN",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_stakeT",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "_voted",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_delete0_544",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem2",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Governor_stake0_544",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unstake0_544",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unvote0_544",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256[4][4]",
                        "name": "elem0",
                        "type": "uint256[4][4]"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_Governor_vote0_544",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_Other_claimFor0_544",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v3838",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v18498",
        "type": "address"
      }
    ],
    "name": "accountData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "bene",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "stake",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stakeN",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stakeT",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "voted",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620047e5380380620047e5833981016040819052620000269162000950565b600080554360035562000038620004e8565b7f211793ba7e606607a2c5dc9ec45d4c702e99a97b7297477f7a98d9a94887bc2033836040516200006b92919062000bad565b60405180910390a16020820151516101a001516200008d90341460096200030f565b602080830151516040810151910151620000b7916001600160a01b03918216911614600a6200030f565b6020820151516080810151606090910151620000e3916001600160a01b03918216911614600b6200030f565b6020820151516101a00151620000fd901515600c6200030f565b60208201515161010081015160e0909101516200011d9111600d6200030f565b602082015151610120810151610100909101516200013e9111600e6200030f565b602082015151610140810151610120909101516200015f9111600f6200030f565b6020820151516101608101516101409091015162000180911160106200030f565b60208201515161018081015161016090910151620001a1911160116200030f565b8051600090819052815160209081018290528251604090810183905283516060908101939093528351828501805191909152845181519093019290925283518251909101528251905190910152620001f862000511565b805133905260208084018051518351830152805182015183516001600160a01b039182166040918201528251516101a09081015186516060908101919091528451518101518751941660809485015284515160e090810151885160a090810191909152865151610100908101518a5160c090810191909152885151610120908101518c51860152895151610140908101518d519094019390935289515161016001518c519091015288515161018001518b51909201919091528a890151898b01805191909152805160009a018a905297515190940151875190950194909452855190910186905284519093018590528351909101849052825101929092525143910152620003068162000339565b50505062000da3565b81620003355760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082019091526000808252602082015281602001516020015115620003745760008080556001819055620003359060029062000535565b6020820151608081015160609091015162000390919062000bf4565b8152602082015160c081015160a090910151620003ae919062000bf4565b6020820152620003bd62000577565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190941684860152865160a09081015181870152875160c09081015181880152885160e0908101519088015288516101009081015190880152885161012090810151908801528851610140908101519088015284890180515161016089015280518501516101808901528051909301516101a08801528251909501516101c0870152815101516101e086015251909201516102008401528351610220840152838101516102408401526003600055436001559051620004bc9183910162000c4d565b60405160208183030381529060405260029080519060200190620004e292919062000634565b50505050565b6040518060400160405280620004fd620006c3565b81526020016200050c620006e1565b905290565b60405180604001604052806200052662000711565b81526020016200050c6200078e565b508054620005439062000d67565b6000825580601f1062000554575050565b601f016020900490600052602060002090810190620005749190620007dd565b50565b60405180610260016040528060006001600160a01b031681526020016200059d620007f4565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001620005fd620006e1565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054620006429062000d67565b90600052602060002090601f016020900481019282620006665760008555620006b1565b82601f106200068157805160ff1916838001178555620006b1565b82800160010185558215620006b1579182015b82811115620006b157825182559160200191906001019062000694565b50620006bf929150620007dd565b5090565b60405180608001604052806004906020820280368337509192915050565b60405180608001604052806004905b620006fa620006c3565b815260200190600190039081620006f05790505090565b60405180610160016040528060006001600160a01b0316815260200162000737620007f4565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101000160405280620007a4620006e1565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115620006bf5760008155600101620007de565b604051806101c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001620005fd620006c3565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000893576200089362000858565b60405290565b6040516101c081016001600160401b038111828210171562000893576200089362000858565b80516001600160a01b0381168114620008d757600080fd5b919050565b600082601f830112620008ee57600080fd5b604051608081016001600160401b038111828210171562000913576200091362000858565b6040528060808401858111156200092957600080fd5b845b81811015620009455780518352602092830192016200092b565b509195945050505050565b60008183036102608112156200096557600080fd5b6200096f6200086e565b83518152601f1982019150610240808312156200098b57600080fd5b620009956200086e565b61022080851215620009a657600080fd5b620009b062000899565b945060208701518552620009c760408801620008bf565b6020860152620009da60608801620008bf565b6040860152620009ed60808801620008bf565b606086015262000a0060a08801620008bf565b608086015260c087015160a086015262000a1e8860e08901620008dc565b60c08601526101608781015160e0870152610180808901516101008801526101a0808a01516101208901526101c08a01516101408901526101e08a01519288019290925261020089015190870152908701519085015283815262000a84828701620008bf565b60208281019190915283015250949350505050565b8060005b6004811015620004e257815184526020938401939091019060010162000a9d565b80518252602081015162000add60208401826001600160a01b03169052565b50604081015162000af960408401826001600160a01b03169052565b50606081015162000b1560608401826001600160a01b03169052565b50608081015162000b3160808401826001600160a01b03169052565b5060a081015160a083015260c081015162000b5060c084018262000a99565b5060e0810151610140838101919091526101008201516101608085019190915261012083015161018080860191909152918301516101a080860191909152908301516101c0850152908201516101e0840152015161020090910152565b60006102808201905060018060a01b03808516835283516020840152602084015162000bde60408501825162000abe565b8160208201511661026085015250509392505050565b6000821982111562000c1657634e487b7160e01b600052601160045260246000fd5b500190565b8060005b6004811015620004e25762000c3684835162000a99565b608093909301926020919091019060010162000c1f565b81516001600160a01b031681526106408101602083015162000c73602084018262000abe565b50604083015161024062000c91818501836001600160a01b03169052565b606085015161026085015260808501516001600160a01b031661028085015260a08501516102a085015260c08501516102c085015260e08501516102e0850152610100850151610300850152610120850151610320850152610140850151610340850152610160850151915062000d0d61036085018362000c1b565b6101808501516105608501526101a08501516105808501526101c08501516105a08501526101e08501516105c08501526102008501516105e085015261022085015161060085015280850151610620850152505092915050565b600181811c9082168062000d7c57607f821691505b60208210810362000d9d57634e487b7160e01b600052602260045260246000fd5b50919050565b613a328062000db36000396000f3fe6080604052600436106100bd5760003560e01c806360f84fa311610079578063ab53f2c611610056578063ab53f2c6146101cf578063b2404ca2146101f2578063deb906e714610205578063e28dad7d1461026d57005b806360f84fa314610192578063795e3eaa146101a557806383230757146101ba57005b80631e93b0f1146100c6578063349cb4dd146100ea5780633bc5b7bf1461010d5780634012e02e1461013a57806340ae00291461015c57806358717a651461017f57005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd6100f8366004612d74565b610275565b60405190151581526020016100e1565b34801561011957600080fd5b5061012d610128366004612dad565b6102d6565b6040516100e19190612de0565b34801561014657600080fd5b5061014f6102ed565b6040516100e19190612f7a565b610164610443565b604080518251815260209283015192810192909252016100e1565b6100d761018d366004612dad565b610482565b6100c46101a036600461300a565b6104c6565b6101ad6104ea565b6040516100e19190613023565b3480156101c657600080fd5b506001546100d7565b3480156101db57600080fd5b506101e4610520565b6040516100e192919061305e565b6101ad610200366004613222565b6105bd565b34801561021157600080fd5b50610225610220366004612dad565b6105fe565b6040516100e1919081516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260809182015115159181019190915260a00190565b6100d761079f565b600061027f6126c6565b60208181018051516001905280515160409081015188905281515181015190920186905251518101516001600160a01b0385169101526102bd6126e5565b6102c782826107cf565b602001519150505b9392505050565b6102de612736565b6102e78261212b565b92915050565b6102f5612755565b6003600054036104345760006002805461030e9061323f565b80601f016020809104026020016040519081016040528092919081815260200182805461033a9061323f565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f91906133f8565b90506103a96127b4565b60208083015182515260408084015183516001600160a01b039091169201919091526101608301518251909101526102408201518151606001526101e0820151815160800152610200820151815160a00152610220820151815160c001526101a0820151815160e001526101c082015181516101000152610180909101518151610120015251919050565b61044060006007612223565b90565b604080518082019091526000808252602082015261045f6126c6565b602081015151600090526104716126e5565b61047b82826107cf565b5192915050565b600061048c6126c6565b6020810180515160059052515160c001516001600160a01b03841690526104b16126e5565b6104bb82826107cf565b60a001519392505050565b6104ce6126e5565b6104e66104e0368490038401846135ea565b826107cf565b5050565b6104f26127c7565b6104fa6126c6565b6020810151516003905261050c6126e5565b61051682826107cf565b6060015192915050565b6000606060005460028080546105359061323f565b80601f01602080910402602001604051908101604052809291908181526020018280546105619061323f565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b50505050509050915091509091565b6105c56127c7565b6105cd6126c6565b6020810180515160049052515160a001518390526105e96126e5565b6105f382826107cf565b608001519392505050565b6106066127f4565b60036000540361078e5760006002805461061f9061323f565b80601f016020809104026020016040519081016040528092919081815260200182805461064b9061323f565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b50505050508060200190518101906106b091906133f8565b90506106ba61282e565b80516001600160a01b0385169052805160006020909101819052815160400181905281516060015260016106ed8561212b565b5160018111156106ff576106ff612dca565b1461070b578051610719565b6107148461212b565b604001515b602080830182815291516040808501516001600160a01b0390921690915291519182015191015161074a91906136d5565b604080830180516020908101939093529282018051909201518351820152815101518251606090810191909152905101518151901515608090910152519392505050565b61079a60006008612223565b919050565b60006107a96126c6565b602081015151600290526107bb6126e5565b6107c582826107cf565b6040015192915050565b6107df6003600054146034612223565b81516107fa9015806107f357508251600154145b6035612223565b60008080556002805461080c9061323f565b80601f01602080910402602001604051908101604052809291908181526020018280546108389061323f565b80156108855780601f1061085a57610100808354040283529160200191610885565b820191906000526020600020905b81548152906001019060200180831161086857829003601f168201915b505050505080602001905181019061089d91906133f8565b90506108a761285b565b7f459c2b03e13bfd98e48053beaed4634fdb1c87fb24942d05e818c52f8a9906f333856040516108d89291906136f8565b60405180910390a160006020850151515160058111156108fa576108fa612dca565b03610b245761090b34156012612223565b61092561091e3384604001516000612249565b6013612223565b61093742836101400151106014612223565b816101800151826101a0015161094d91906136d5565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610987573d6000803e3d6000fd5b506109a082604001518360000151846101c0015161225f565b805160208083018051929092526101c084015182518201529051604080518251815291830151928201929092527f35191f7d4b00918c50e9053cf63683b1adda0e4f78dc6b9de3d3bfc6239d8f8c910160405180910390a1602081015183526040517f6b35f7c1e97402a83b10267c90f56631b6bf6074ce3d27df22f18844b38c7e6890600090a1610a306129b4565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a01518851820152610100808b0151895190910152610120808b0151895190910152610140808b01518951909101526101608a01518689018051919091528051600197019690965285516000950185905285519093018490528451909501929092526101e08701518351909201919091526102008601518251909301929092525143910152610b1e81612278565b50612125565b6001602085015151516005811115610b3e57610b3e612dca565b03610ee55760208401515160409081015190820152610b5c3361212b565b60608201819052516000906001811115610b7857610b78612dca565b03610b895760016080820152610baf565b60016060820151516001811115610ba257610ba2612dca565b03610baf57600060808201525b610bbe81608001516015612223565b604081015160208101519051610be391600091610bdb91906136d5565b116016612223565b604081015151610bf69034146017612223565b610c17610c10338460400151846040015160200151612249565b6018612223565b60006060820151516001811115610c3057610c30612dca565b03610c4157600160a0820152610c67565b60016060820151516001811115610c5a57610c5a612dca565b03610c6757600060a08201525b610c768160a001516019612223565b610c878260a001514210601a612223565b6040818101805182015160c0840180516001600160a01b0392831690528251518151602090810191909152925183015181518501528051600060609182018190523381526004808652908690208054600160ff19918216811783559451805186840180546001600160a01b031916919098161790965585870151600283015585880151600383015594909201519101805490931690151517909155825190815291517f7a672d0e8f31c589dc0d3755e098196d99458ac46f98b9e05ef1add0a02bbf579281900390910190a1600160208481019190915260408281015180518184015191830151835133815294850191909152918301526001600160a01b031660608201527f687a2f1c3b1fe4df86465e9fa402de973c9dfa905e7ff56ebd15470123434efc9060800160405180910390a1610dc16129b4565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551909101526080808701518551941693019290925260a08086015184519091015260c08086015184519091015260e080860151845190910152610100808601518451909101526101208086015184519091015261014080860151845190910152610160850151818401805191909152805160009201919091526101808501519051820152820151516101a0840151610e8b91906136d5565b60208083015160600191909152604083015101516101c0840151610eaf91906136d5565b602082018051608001919091526101e0840151815160a00152610200840151815160c00152514360e090910152610b1e81612278565b6002602085015151516005811115610eff57610eff612dca565b036112d75760e08101805133905280516000602090910181905281516040018190529051606001526001610f323361212b565b516001811115610f4457610f44612dca565b14610f53578060e00151610f61565b610f5c3361212b565b604001515b610100820152610f733415601b612223565b610f8d610f863384604001516000612249565b601c612223565b610120808301514211908201819052610fa7576000610fb2565b806101000151606001515b15610ffc576102408201516101008201516040810151602090910151610fd891906136d5565b8360600151610fe791906137ba565b610ff191906137d9565b610140820152611005565b60006101408201525b61101d8261018001518261014001511115601d612223565b6110438161010001516060015161103557600161103c565b8161012001515b601e612223565b336000818152600460208181526040808420805461ffff191681556001810180546001600160a01b03191690556002810185905560038101859055909201805460ff191690556101008501510151905181156108fc0292818181858888f193505050501580156110b7573d6000803e3d6000fd5b506110d08260400151338361010001516040015161225f565b610100810151516101408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611113573d6000803e3d6000fd5b507f05668c7359f1b110568a06bdf87c0c673ccad9ce9e0c3c71ac87d94c737bf88881610140015160405161114a91815260200190565b60405180910390a161014081018051604085810191909152610100830151805160208083015192840151945184513381526001600160a01b03909316918301919091528184019290925260608101939093526080830152517f1ea20975605dbacd21649897d7aaf8fc7e76549fa091246617143b7ef9f9c2099181900360a00190a16111d46129b4565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451909101526080808601518451931692019190915260a08085015183519091015260c08085015183519091015260e080850151835190910152610100808501518351909101526101208085015183519091015261014080850151835182015261016085015182840180519190915251600092019190915282015161018084015161128f91906137fb565b6020808301516040019190915261010083015101516101a08401516112b491906137fb565b602082015160600152610100820151604001516101c0840151610eaf91906137fb565b60036020850151515160058111156112f1576112f1612dca565b036117bf5761016081018051339052805160006020909101819052815160400181905290516060015260016113253361212b565b51600181111561133757611337612dca565b1461134757806101600151611355565b6113503361212b565b604001515b61018082018190526060015161136c90601f612223565b61137834156020612223565b61139261138b3384604001516000612249565b6021612223565b6113a3428360c00151106022612223565b6113b582610100015142106023612223565b61018081018051516101a0830180516001600160a01b039283169052825160209081015182518201529251604090810151825182015281516000606091820181905233815260048087528382208054600160ff19918216811783559651805197830180546001600160a01b0319169890991697909717909755968501516002880155848401516003880155939091015194909201805490931693151593909317909155908301516114669030612414565b61147091906137fb565b6103608201526114816000476137fb565b610340820152604080513360248083019190915282518083039091018152604490910182526020810180516001600160e01b031663087cd02560e11b17905260808401519151909160009182916001600160a01b03169082906114e5908690613812565b60006040518083038185875af1925050503d8060008114611522576040519150601f19603f3d011682016040523d82523d6000602084013e611527565b606091505b5091509150611538828260256124e0565b5083610360015161154d866040015130612414565b61155791906137fb565b610380850181905261156b90156024612223565b61034084015161157b90476137fb565b6101c0850151528051611597908201602090810190830161382e565b6101c08501805160200191909152516101e085018190526040517f31c4eccffded5e761031db2c8361cad6f774d2a2a4268ba3b2fc17788f10319c94506115e1935090915061384b565b60405180910390a16101e0810151516115fc90156026612223565b7f8c995cac89d6a6824b0a9540a2657caf6724f8968f87d84a9452f09e1c7e397d816101e00151602001516040516116349190613023565b60405180910390a16101e0810180516020908101516060860152905101516040517f3736d8dbcda5389bbda2e1d4f5f1330f82ce1e033c990a2c04a6b9326768e08b916116839133919061386e565b60405180910390a16116936129b4565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08088015186519091015260e0808801518651909101526101008088015186519091015261012080880151865190910152610140808801518651909101526101e0808701518401518487018051919091528051600090860152610180808a01518251909501949094526101a08901518151909301929092526101c088015191519094015284015101519084015161177e91906137fb565b602082015160a00152610180820151604001516102008401516117a191906137fb565b60208201805160c00191909152514360e090910152610b1e81612278565b60046020850151515160058111156117d9576117d9612dca565b03611cdc576020808501515160a001516102008301526102208201805133905280516000920182905280516040018290525160600152600161181a3361212b565b51600181111561182c5761182c612dca565b1461183c5780610220015161184a565b6118453361212b565b604001515b61024082018190526060015161186f90611865576001611868565b60005b6027612223565b61187b34156028612223565b61189561188e3384604001516000612249565b6029612223565b6118a6428360c0015110602a612223565b6118b78260e001514210602b612223565b6102408101805151610260830180516001600160a01b03928316905282516020908101518251820152925160409081015182518201528151600160609182018190523360009081526004808852848220805460ff19908116851782559651805194820180546001600160a01b03191695909916949094179097559682015160028701558184015160038701559101519390940180549092169215159290921790558301516119659030612414565b61196f91906137fb565b6103c08201526119806000476137fb565b6103a08201526102408101516040810151602090910151600091636ffa1f8b60e11b9133916119ae916136d5565b610200850151516040516119c79392919060240161388c565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050905060008084608001516001600160a01b0316600084604051611a1d9190613812565b60006040518083038185875af1925050503d8060008114611a5a576040519150601f19603f3d011682016040523d82523d6000602084013e611a5f565b606091505b5091509150611a708282602d6124e0565b50836103c00151611a85866040015130612414565b611a8f91906137fb565b6103e08501819052611aa39015602c612223565b6103a0840151611ab390476137fb565b610280850151528051611acf908201602090810190830161382e565b6102808501805160200191909152516102a085018190526040517f8a6eb9ed23d56472c40d53ca3e07cc7bc68c9cf20d258862b6ebe1e4483f20bf9450611b19935090915061384b565b60405180910390a16102a081015151611b349015602e612223565b7f3b893c6d45e15de21756645d86ecb9fc8c6a7edc6514619e837ded8e8e5cb1b4816102a0015160200151604051611b6c9190613023565b60405180910390a16102a0810180516020908101516080860152905101516040517f213710570734e6367811c4846c8e18e6004df40fd0ed85e7b9923d6c7c44c8fb91611bbb9133919061386e565b60405180910390a1611bcb6129b4565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08088015186519091015260e0808801518651909101526101008088015186519091015261012080880151865190910152610140808801518651909101526102a086015183015183860180519190915280516000908501526101808801518151909301929092526101a08701518251909101526101c086015190519092019190915261024083015101516101e0840151611cb991906136d5565b602082015160a00152610240820151604001516102008401516117a191906136d5565b6005602085015151516005811115611cf657611cf6612dca565b03612125576020808501515160c001516102c08301819052516102e0830180516001600160a01b039092169091528051600092018290528051604001829052516060015260016102c082015151611d4c9061212b565b516001811115611d5e57611d5e612dca565b14611d6e57806102e00151611d83565b6102c081015151611d7e9061212b565b604001515b610300820152611d953415602f612223565b611daf611da83384604001516000612249565b6030612223565b611dc142836101200151106031612223565b8061030001516060015115611e15576102408201516103008201516040810151602090910151611df191906136d5565b8360600151611e0091906137ba565b611e0a91906137d9565b610320820152611e1e565b60006103208201525b611e3682610180015182610320015111156032612223565b611e5881610300015160600151611e4e576001611e51565b60015b6033612223565b6102c081018051516001600160a01b039081166000908152600460208181526040808420805461ffff191681556001810180546001600160a01b03191690556002810185905560038101859055909201805460ff19169055935151610300860151909401519051939092169282156108fc029291818181858888f19350505050158015611ee9573d6000803e3d6000fd5b50611f0b8260400151826102c00151600001518361030001516040015161225f565b610300810151516103208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611f4e573d6000803e3d6000fd5b507f6e919c0a20183f1282b3f62cde613f0cf6e5a1d5491cc87f726c6c844878bf36816103200151604051611f8591815260200190565b60405180910390a16103208101805160a08501526102c08201515161030083015180516020820151604092830151945192517f1ea20975605dbacd21649897d7aaf8fc7e76549fa091246617143b7ef9f9c20995612011959490916001600160a01b03958616815293909416602084015260408301919091526060820152608081019190915260a00190565b60405180910390a16120216129b4565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451909101526080808601518451931692019190915260a08085015183519091015260c08085015183519091015260e0808501518351909101526101008085015183519091015261012080850151835190910152610140808501518351909101526101608401518183018051919091525160009101526103208201516101808401516120dd91906137fb565b6020808301516040019190915261030083015101516101a084015161210291906137fb565b602082015160600152610300820151604001516101c0840151610eaf91906137fb565b50505050565b612133612736565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561216257612162612dca565b03612214576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156121a2576121a2612dca565b60018111156121b3576121b3612dca565b81528154610100900460ff90811615156020808401919091526040805160808101825260018601546001600160a01b031681526002860154928101929092526003850154828201526004909401549091161515606082015291015292915050565b60008082526020820152919050565b816104e65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006122578385308561251b565b949350505050565b61226a8383836125f5565b61227357600080fd5b505050565b6040805180820190915260008082526020820152816020015160200151156122b057600080805560018190556104e6906002906129d4565b602082015160808101516060909101516122ca91906136d5565b8152602082015160c081015160a0909101516122e691906136d5565b60208201526122f3612a11565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190941684860152865160a09081015181870152875160c09081015181880152885160e0908101519088015288516101009081015190880152885161012090810151908801528851610140908101519088015284890180515161016089015280518501516101808901528051909301516101a08801528251909501516101c0870152815101516101e0860152519092015161020084015283516102208401528381015161024084015260036000554360015590516123f0918391016138b1565b60405160208183030381529060405260029080519060200190612125929190612a93565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161246f91613812565b60006040518083038185875af1925050503d80600081146124ac576040519150601f19603f3d011682016040523d82523d6000602084013e6124b1565b606091505b50915091506124c2828260066124e0565b50808060200190518101906124d791906139c6565b95945050505050565b606083156124ef5750816102cf565b8251156124ff5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612240565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161258291613812565b60006040518083038185875af1925050503d80600081146125bf576040519150601f19603f3d011682016040523d82523d6000602084013e6125c4565b606091505b50915091506125d5828260016124e0565b50808060200190518101906125ea91906139df565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161265491613812565b60006040518083038185875af1925050503d8060008114612691576040519150601f19603f3d011682016040523d82523d6000602084013e612696565b606091505b50915091506126a7828260026124e0565b50808060200190518101906126bc91906139df565b9695505050505050565b6040518060400160405280600081526020016126e0612b17565b905290565b6040805161010081018252600060c0820181815260e08301829052825260208201819052918101919091526060810161271c6127c7565b81526020016127296127c7565b8152602001600081525090565b60408051606081018252600080825260208201529081016126e0612b2a565b604051806101400160405280612769612b5d565b81526000602082015260400161277d6127c7565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180602001604052806126e0612755565b60405180608001604052806004905b6127de612bbb565b8152602001906001900390816127d65790505090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6040518060600160405280612841612b2a565b815260200161284e612b2a565b81526020016126e06127f4565b6040518061040001604052806000815260200161288b604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016128b8612736565b815260006020820181905260408201526060016128d3612b2a565b81526020016128e0612b2a565b81526020016128ed612b2a565b81526000602082018190526040820152606001612908612b2a565b8152602001612915612b2a565b8152602001612922612b2a565b815260200161292f612bd9565b815260200161293c612bd9565b8152602001612949612bf3565b8152602001612956612b2a565b8152602001612963612b2a565b8152602001612970612b2a565b815260200161297d612bd9565b815260200161298a612bd9565b8152604080516020808201835260008252830152016129a7612b2a565b815260200161277d612b2a565b60405180604001604052806129c7612c06565b81526020016126e0612c81565b5080546129e09061323f565b6000825580601f106129f0575050565b601f016020900490600052602060002090810190612a0e9190612cce565b50565b60405180610260016040528060006001600160a01b03168152602001612a35612b5d565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161277d6127c7565b828054612a9f9061323f565b90600052602060002090601f016020900481019282612ac15760008555612b07565b82601f10612ada57805160ff1916838001178555612b07565b82800160010185558215612b07579182015b82811115612b07578251825591602001919060010190612aec565b50612b13929150612cce565b5090565b60405180602001604052806126e0612ce3565b604051806080016040528060006001600160a01b0316815260200160008152602001600081526020016000151581525090565b604051806101c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161277d5b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280600081526020016126e06127c7565b60405180602001604052806126e06127c7565b60405180610160016040528060006001600160a01b03168152602001612c2a612b5d565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101000160405280612c956127c7565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115612b135760008155600101612ccf565b6040805160e081019091528060008152602001600015158152602001612d2c6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b81526000602082018190526040820152606001612d47612bf3565b81526040805160208181019092526000815291015290565b6001600160a01b0381168114612a0e57600080fd5b600080600060608486031215612d8957600080fd5b83359250602084013591506040840135612da281612d5f565b809150509250925092565b600060208284031215612dbf57600080fd5b81356102cf81612d5f565b634e487b7160e01b600052602160045260246000fd5b815160c082019060028110612df757612df7612dca565b825260208381015115158184015260409384015180516001600160a01b031685850152908101516060808501919091529381015160808401529290920151151560a09091015290565b8060005b6004811015612125578151845260209384019390910190600101612e44565b805182526020810151612e8160208401826001600160a01b03169052565b506040810151612e9c60408401826001600160a01b03169052565b506060810151612eb760608401826001600160a01b03169052565b506080810151612ed260808401826001600160a01b03169052565b5060a081015160a083015260c0810151612eef60c0840182612e40565b5060e0810151610140838101919091526101008201516101608085019190915261012083015161018080860191909152918301516101a080860191909152908301516101c0850152908201516101e0840152015161020090910152565b8060005b600481101561212557612f64848351612e40565b6080939093019260209190910190600101612f50565b600061052082019050612f8e828451612e63565b60208301516001600160a01b03166102208301526040830151612fb5610240840182612f4c565b506060830151610440830152608083015161046083015260a083015161048083015260c08301516104a083015260e08301516104c08301526101008301516104e0830152610120909201516105009091015290565b6000610320828403121561301d57600080fd5b50919050565b61020081016102e78284612f4c565b60005b8381101561304d578181015183820152602001613035565b838111156121255750506000910152565b8281526040602082015260008251806040840152613083816060850160208701613032565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff811182821017156130d2576130d2613098565b60405290565b604051610260810167ffffffffffffffff811182821017156130d2576130d2613098565b6040516020810167ffffffffffffffff811182821017156130d2576130d2613098565b6040805190810167ffffffffffffffff811182821017156130d2576130d2613098565b60405160e0810167ffffffffffffffff811182821017156130d2576130d2613098565b6040516080810167ffffffffffffffff811182821017156130d2576130d2613098565b6000601f838184011261319a57600080fd5b6131a2613165565b806102008501868111156131b557600080fd5b855b818110156132165787858201126131ce5760008081fd5b6131d6613165565b80608083018a8111156131e95760008081fd5b835b818110156132035780358452602093840193016131eb565b50508552506020909301926080016131b7565b50909695505050505050565b6000610200828403121561323557600080fd5b6102cf8383613188565b600181811c9082168061325357607f821691505b60208210810361301d57634e487b7160e01b600052602260045260246000fd5b805161079a81612d5f565b600082601f83011261328f57600080fd5b613297613165565b8060808401858111156132a957600080fd5b845b818110156132c35780518452602093840193016132ab565b509095945050505050565b600061022082840312156132e157600080fd5b6132e96130ae565b9050815181526132fb60208301613273565b602082015261330c60408301613273565b604082015261331d60608301613273565b606082015261332e60808301613273565b608082015260a082015160a082015261334a8360c0840161327e565b60c08201526101408083015160e083015261016080840151610100840152610180808501516101208501526101a080860151848601526101c0860151838601526101e086015182860152610200860151818601525050505092915050565b600082601f8301126133b957600080fd5b6133c1613165565b806102008401858111156133d457600080fd5b845b818110156132c3576133e8878261327e565b84526020909301926080016133d6565b6000610640828403121561340b57600080fd5b6134136130d8565b61341c83613273565b815261342b84602085016132ce565b602082015261024061343e818501613273565b6040830152610260840151606083015261345b6102808501613273565b60808301526102a084015160a08301526102c084015160c08301526102e084015160e08301526103008401516101008301526103208401516101208301526103408401516101408301526134b38561036086016133a8565b6101608301526105608401516101808301526105808401516101a08301526105a08401516101c08301526105c08401516101e08301526105e0840151610200830152610600840151610220830152610620909301519281019290925250919050565b8015158114612a0e57600080fd5b803561079a81613515565b60006060828403121561354057600080fd5b6040516060810181811067ffffffffffffffff8211171561356357613563613098565b80604052508091508235815260208301356020820152604083013561358781612d5f565b6040919091015292915050565b600061020082840312156135a757600080fd5b6135af6130fc565b90506135bb8383613188565b815292915050565b6000602082840312156135d557600080fd5b6135dd6130fc565b905081356135bb81612d5f565b60008183036103208112156135fe57600080fd5b61360661311f565b8335815261030080601f198401121561361e57600080fd5b6136266130fc565b9250613630613142565b60208601356006811061364257600080fd5b815261365060408701613523565b6020820152613662876060880161352e565b604082015261367360c08701613523565b606082015261368460e08701613523565b6080820152613697876101008801613594565b60a08201526136a8878388016135c3565b60c082015283525060208101919091529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156136e8576136e86136bf565b500190565b6104e6828251612f4c565b6001600160a01b038381168252825160208084019190915283015151805161034084019291906006811061372e5761372e612dca565b80604086015250602081015115156060850152604081015180516080860152602081015160a08601528260408201511660c0860152506060810151915061377960e085018315159052565b6080810151151561010085015260a0810151915061379b6101208501836136ed565b60c0015180516001600160a01b03166103208501529050509392505050565b60008160001904831182151516156137d4576137d46136bf565b500290565b6000826137f657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561380d5761380d6136bf565b500390565b60008251613824818460208701613032565b9190910192915050565b6000610200828403121561384157600080fd5b6102cf83836133a8565b8151815260208083015161022083019161386790840182612f4c565b5092915050565b6001600160a01b038316815261022081016102cf6020830184612f4c565b6001600160a01b03841681526020810183905261024081016122576040830184612f4c565b81516001600160a01b03168152610640810160208301516138d56020840182612e63565b5060408301516102406138f2818501836001600160a01b03169052565b606085015161026085015260808501516001600160a01b031661028085015260a08501516102a085015260c08501516102c085015260e08501516102e0850152610100850151610300850152610120850151610320850152610140850151610340850152610160850151915061396c610360850183612f4c565b6101808501516105608501526101a08501516105808501526101c08501516105a08501526101e08501516105c08501526102008501516105e085015261022085015161060085015280850151610620850152505092915050565b6000602082840312156139d857600080fd5b5051919050565b6000602082840312156139f157600080fd5b81516102cf8161351556fea264697066735822122048051635c7de9c7975266bf606476ae6d454f4b4ea2726831a4542363dc976f364736f6c634300080e0033`,
  BytecodeLen: 18405,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`,
    accountData: `accountData`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:321:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:146:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin_delete": Admin_delete,
  "Deployer": Deployer,
  "Governor_stake": Governor_stake,
  "Governor_unstake": Governor_unstake,
  "Governor_unvote": Governor_unvote,
  "Governor_vote": Governor_vote,
  "Other_claimFor": Other_claimFor
  };
export const _APIs = {
  Admin_delete: Admin_delete,
  Governor_stake: Governor_stake,
  Governor_unstake: Governor_unstake,
  Governor_unvote: Governor_unvote,
  Governor_vote: Governor_vote,
  Other_claimFor: Other_claimFor
  };
