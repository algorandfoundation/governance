// Automatically generated with Reach 0.1.10 (22abdf0a*)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (22abdf0a*)';
export const _backendVersion = 16;

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
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['stakePeriod', ctc4], ['stakeToken', ctc5], ['currentVote', ctc6], ['rewardedStake', ctc1], ['rewardedStakeN', ctc1], ['rewardedStakeT', ctc1], ['remainingStake', ctc1], ['remainingStakeN', ctc1], ['remainingStakeT', ctc1], ['remainingReward', ctc1]]);
  const ctc9 = stdlib.T_Struct([['bene', ctc0], ['stake', ctc1], ['stakeN', ctc1], ['stakeT', ctc1], ['voted', ctc7]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Object({
    bene: ctc0,
    stakeN: ctc1,
    stakeT: ctc1,
    voted: ctc7
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
            const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = svs;
            return (await ((async () => {
              
              const v2415 = {
                currentVote: v2331,
                remainingReward: v2335,
                remainingStake: v2413,
                remainingStakeN: v2336,
                remainingStakeT: v2337,
                rewardedStake: v2414,
                rewardedStakeN: v2338,
                rewardedStakeT: v2339,
                stakePeriod: v2264,
                stakeToken: v2265
                };
              
              return v2415;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      accountData: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = svs;
            return (await ((async (_v2310 ) => {
                const v2310 = stdlib.protect(ctc0, _v2310, null);
              
              const v2311 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2310), null);
              const v2312 = {
                bene: v2310,
                stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                voted: false
                };
              const v2314 = stdlib.fromSome(v2311, v2312);
              const v2315 = v2314.stakeN;
              const v2316 = v2314.stakeT;
              const v2317 = stdlib.add(v2315, v2316);
              const v2318 = v2314.bene;
              const v2321 = v2314.voted;
              const v2323 = {
                bene: v2318,
                stake: v2317,
                stakeN: v2315,
                stakeT: v2316,
                voted: v2321
                };
              
              return v2323;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc9
        }
      },
    views: {
      3: [ctc0, ctc4, ctc5, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc7]
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
    Admin_delete0_340: ctc11,
    Admin_nop0_340: ctc11,
    Governor_stake0_340: ctc12,
    Governor_unstake0_340: ctc11,
    Governor_unvote0_340: ctc11,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc2]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2587 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:355:10:application call to [unknown function] (defined at: ./index.rsh:355:10:function exp)', 'at ./index.rsh:148:19:application call to "runAdmin_delete0_340" (defined at: ./index.rsh:354:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Admin_delete'
    });
  const v2589 = stdlib.lt(v2292, v2334);
  stdlib.assert(v2589, {
    at: './index.rsh:287:14:application',
    fs: ['at ./index.rsh:355:39:application call to "doAdmin_delete" (defined at: ./index.rsh:285:39:function exp)', 'at ./index.rsh:355:10:application call to [unknown function] (defined at: ./index.rsh:355:10:function exp)', 'at ./index.rsh:355:10:application call to [unknown function] (defined at: ./index.rsh:355:10:function exp)', 'at ./index.rsh:148:19:application call to "runAdmin_delete0_340" (defined at: ./index.rsh:354:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'a delete',
    who: 'Admin_delete'
    });
  const v2592 = ['Admin_delete0_340', v2587];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2592],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:356:19:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_delete"
            });
          ;
          ;
          const v2762 = stdlib.add(v2336, v2335);
          sim_r.txns.push({
            kind: 'from',
            to: v2263,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v2263,
            tok: v2265
            });
          const v2779 = [v2762, v2337];
          const v2780 = await txn1.getOutput('Admin_delete', 'v2779', ctc16, v2779);
          
          null;
          sim_r.txns.push({
            kind: 'halt',
            tok: v2265
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2761 = stdlib.lt(v2292, v2682);
      stdlib.assert(v2761, {
        at: './index.rsh:287:14:application',
        fs: ['at ./index.rsh:357:30:application call to "doAdmin_delete" (defined at: ./index.rsh:285:39:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
        msg: 'a delete',
        who: 'Admin_delete'
        });
      const v2762 = stdlib.add(v2336, v2335);
      ;
      ;
      const v2779 = [v2762, v2337];
      const v2780 = await txn1.getOutput('Admin_delete', 'v2779', ctc16, v2779);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v2683, v2780), {
          at: './index.rsh:354:10:application',
          fs: ['at ./index.rsh:354:10:application call to [unknown function] (defined at: ./index.rsh:354:10:function exp)', 'at ./index.rsh:292:12:application call to "k" (defined at: ./index.rsh:357:13:function exp)', 'at ./index.rsh:357:43:application call to [unknown function] (defined at: ./index.rsh:288:20:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
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
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_nop3 expects to receive an interact object as its second argument.`));}
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
    Admin_delete0_340: ctc11,
    Admin_nop0_340: ctc11,
    Governor_stake0_340: ctc12,
    Governor_unstake0_340: ctc11,
    Governor_unvote0_340: ctc11,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2596 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:148:19:application call to "runAdmin_nop0_340" (defined at: ./index.rsh:358:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Admin_nop'
    });
  const v2598 = stdlib.le(v2333, v2334);
  stdlib.assert(v2598, {
    at: './index.rsh:305:14:application',
    fs: ['at ./index.rsh:359:36:application call to "doAdmin_nop" (defined at: ./index.rsh:303:36:function exp)', 'at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:359:10:application call to [unknown function] (defined at: ./index.rsh:359:10:function exp)', 'at ./index.rsh:148:19:application call to "runAdmin_nop0_340" (defined at: ./index.rsh:358:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: null,
    who: 'Admin_nop'
    });
  const v2602 = ['Admin_nop0_340', v2596];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2602],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:360:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:360:19:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_nop"
            });
          ;
          ;
          const v3309 = v2682;
          const v3310 = await txn1.getOutput('Admin_nop', 'v3309', ctc2, v3309);
          
          const v21926 = v2331;
          const v21927 = v2332;
          const v21928 = v2334;
          const v21929 = v2682;
          const v21930 = v2335;
          const v21931 = v2336;
          const v21932 = v2337;
          const v21933 = v2338;
          const v21934 = v2339;
          if (v2332) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v2265
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v21938 = stdlib.add(v2336, v2337);
            const v21939 = stdlib.add(v2338, v2339);
            const v21940 = stdlib.lt(v2291, v2682);
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3308 = stdlib.le(v2333, v2334);
      stdlib.assert(v3308, {
        at: './index.rsh:305:14:application',
        fs: ['at ./index.rsh:361:27:application call to "doAdmin_nop" (defined at: ./index.rsh:303:36:function exp)', 'at ./index.rsh:361:13:application call to [unknown function] (defined at: ./index.rsh:361:13:function exp)'],
        msg: null,
        who: 'Admin_nop'
        });
      const v3309 = v2682;
      const v3310 = await txn1.getOutput('Admin_nop', 'v3309', ctc2, v3309);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v3200, v3310), {
          at: './index.rsh:358:10:application',
          fs: ['at ./index.rsh:358:10:application call to [unknown function] (defined at: ./index.rsh:358:10:function exp)', 'at ./index.rsh:308:12:application call to "k" (defined at: ./index.rsh:361:13:function exp)', 'at ./index.rsh:361:40:application call to [unknown function] (defined at: ./index.rsh:307:20:function exp)', 'at ./index.rsh:361:13:application call to [unknown function] (defined at: ./index.rsh:361:13:function exp)'],
          msg: 'out',
          who: 'Admin_nop'
          });
        }
      else {
        }
      
      const v21926 = v2331;
      const v21927 = v2332;
      const v21928 = v2334;
      const v21929 = v2682;
      const v21930 = v2335;
      const v21931 = v2336;
      const v21932 = v2337;
      const v21933 = v2338;
      const v21934 = v2339;
      if (v2332) {
        return;
        }
      else {
        const v21938 = stdlib.add(v2336, v2337);
        const v21939 = stdlib.add(v2338, v2339);
        const v21940 = stdlib.lt(v2291, v2682);
        return;
        }
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
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
    Admin_delete0_340: ctc10,
    Admin_nop0_340: ctc10,
    Governor_stake0_340: ctc11,
    Governor_unstake0_340: ctc10,
    Governor_unvote0_340: ctc10,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
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
  
  
  const v2220 = stdlib.protect(ctc8, interact.stakePeriod, 'for Deployer\'s interact field stakePeriod');
  const v2222 = v2220.consManager;
  const v2223 = v2220.consManagerAddr;
  const v2224 = v2220.voteManager;
  const v2225 = v2220.voteManagerAddr;
  const v2228 = v2220.deadline1_signupEnd;
  const v2229 = v2220.deadline2_voteStart;
  const v2230 = v2220.deadline3_voteEnd;
  const v2231 = v2220.deadline4_voteFinal;
  const v2232 = v2220.deadline5_rewardStart;
  const v2233 = v2220.deadline6_delete;
  const v2234 = v2220.totalReward;
  const v2239 = stdlib.protect(ctc9, interact.stakeToken, 'for Deployer\'s interact field stakeToken');
  
  const v2254 = stdlib.ctcAddrEq(v2222, v2223);
  stdlib.assert(v2254, {
    at: './index.rsh:35:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'consManager',
    who: 'Deployer'
    });
  const v2255 = stdlib.ctcAddrEq(v2224, v2225);
  stdlib.assert(v2255, {
    at: './index.rsh:36:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'voteManager',
    who: 'Deployer'
    });
  const v2256 = stdlib.gt(v2234, stdlib.checkedBigNumberify('./index.rsh:37:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2256, {
    at: './index.rsh:37:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'totalReward',
    who: 'Deployer'
    });
  const v2257 = stdlib.lt(v2228, v2229);
  stdlib.assert(v2257, {
    at: './index.rsh:38:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'voteStart',
    who: 'Deployer'
    });
  const v2258 = stdlib.lt(v2229, v2230);
  stdlib.assert(v2258, {
    at: './index.rsh:39:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'voteEnd',
    who: 'Deployer'
    });
  const v2259 = stdlib.lt(v2230, v2231);
  stdlib.assert(v2259, {
    at: './index.rsh:40:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'voteFinal',
    who: 'Deployer'
    });
  const v2260 = stdlib.lt(v2231, v2232);
  stdlib.assert(v2260, {
    at: './index.rsh:41:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'rewardStart',
    who: 'Deployer'
    });
  const v2261 = stdlib.lt(v2232, v2233);
  stdlib.assert(v2261, {
    at: './index.rsh:42:10:application',
    fs: ['at ./index.rsh:112:21:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)', 'at ./index.rsh:110:16:application call to [unknown function] (defined at: ./index.rsh:110:20:function exp)'],
    msg: 'delete',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2220, v2239],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:115:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc9],
    pay: [v2234, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2264, v2265], secs: v2267, time: v2266, didSend: v102, from: v2263 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2265
        });
      const v2275 = v2264.totalReward;
      sim_r.txns.push({
        amt: v2275,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2278 = await ctc.getContractInfo();
      const v2279 = await ctc.getContractAddress();
      
      const v2285 = v2264.voteManager;
      const v2287 = v2264.deadline1_signupEnd;
      const v2288 = v2264.deadline2_voteStart;
      const v2289 = v2264.deadline3_voteEnd;
      const v2290 = v2264.deadline4_voteFinal;
      const v2291 = v2264.deadline5_rewardStart;
      const v2292 = v2264.deadline6_delete;
      const v2326 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2330 = [v2326, v2326, v2326, v2326];
      const v2331 = v2330;
      const v2332 = false;
      const v2333 = stdlib.checkedBigNumberify('./index.rsh:149:43:decimal', stdlib.UInt_max, '0');
      const v2334 = v2267;
      const v2335 = v2275;
      const v2336 = stdlib.checkedBigNumberify('./index.rsh:153:24:decimal', stdlib.UInt_max, '0');
      const v2337 = stdlib.checkedBigNumberify('./index.rsh:154:24:decimal', stdlib.UInt_max, '0');
      const v2338 = stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0');
      const v2339 = stdlib.checkedBigNumberify('./index.rsh:152:23:decimal', stdlib.UInt_max, '0');
      const v2340 = v2266;
      const v2341 = v2267;
      
      if (await (async () => {
        const v2412 = v2332 ? false : true;
        
        return v2412;})()) {
        const v2413 = stdlib.add(v2336, v2337);
        const v2414 = stdlib.add(v2338, v2339);
        const v2418 = stdlib.lt(v2291, v2341);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2265
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
  const {data: [v2264, v2265], secs: v2267, time: v2266, didSend: v102, from: v2263 } = txn1;
  ;
  const v2275 = v2264.totalReward;
  ;
  const v2278 = await ctc.getContractInfo();
  const v2279 = await ctc.getContractAddress();
  const v2281 = [v2278, v2279];
  stdlib.protect(ctc0, await interact.ready(v2281), {
    at: './index.rsh:117:26:application',
    fs: ['at ./index.rsh:117:26:application call to [unknown function] (defined at: ./index.rsh:117:26:function exp)', 'at ./index.rsh:117:26:application call to "liftedInteract" (defined at: ./index.rsh:117:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2283 = v2264.consManager;
  const v2284 = v2264.consManagerAddr;
  const v2285 = v2264.voteManager;
  const v2286 = v2264.voteManagerAddr;
  const v2287 = v2264.deadline1_signupEnd;
  const v2288 = v2264.deadline2_voteStart;
  const v2289 = v2264.deadline3_voteEnd;
  const v2290 = v2264.deadline4_voteFinal;
  const v2291 = v2264.deadline5_rewardStart;
  const v2292 = v2264.deadline6_delete;
  const v2294 = stdlib.ctcAddrEq(v2283, v2284);
  stdlib.assert(v2294, {
    at: './index.rsh:35:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'consManager',
    who: 'Deployer'
    });
  const v2295 = stdlib.ctcAddrEq(v2285, v2286);
  stdlib.assert(v2295, {
    at: './index.rsh:36:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteManager',
    who: 'Deployer'
    });
  const v2296 = stdlib.gt(v2275, stdlib.checkedBigNumberify('./index.rsh:37:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2296, {
    at: './index.rsh:37:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'totalReward',
    who: 'Deployer'
    });
  const v2297 = stdlib.lt(v2287, v2288);
  stdlib.assert(v2297, {
    at: './index.rsh:38:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteStart',
    who: 'Deployer'
    });
  const v2298 = stdlib.lt(v2288, v2289);
  stdlib.assert(v2298, {
    at: './index.rsh:39:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteEnd',
    who: 'Deployer'
    });
  const v2299 = stdlib.lt(v2289, v2290);
  stdlib.assert(v2299, {
    at: './index.rsh:40:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'voteFinal',
    who: 'Deployer'
    });
  const v2300 = stdlib.lt(v2290, v2291);
  stdlib.assert(v2300, {
    at: './index.rsh:41:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'rewardStart',
    who: 'Deployer'
    });
  const v2301 = stdlib.lt(v2291, v2292);
  stdlib.assert(v2301, {
    at: './index.rsh:42:10:application',
    fs: ['at ./index.rsh:118:19:application call to "stakePeriodValid" (defined at: ./index.rsh:34:228:function exp)'],
    msg: 'delete',
    who: 'Deployer'
    });
  const v2326 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2330 = [v2326, v2326, v2326, v2326];
  let v2331 = v2330;
  let v2332 = false;
  let v2333 = stdlib.checkedBigNumberify('./index.rsh:149:43:decimal', stdlib.UInt_max, '0');
  let v2334 = v2267;
  let v2335 = v2275;
  let v2336 = stdlib.checkedBigNumberify('./index.rsh:153:24:decimal', stdlib.UInt_max, '0');
  let v2337 = stdlib.checkedBigNumberify('./index.rsh:154:24:decimal', stdlib.UInt_max, '0');
  let v2338 = stdlib.checkedBigNumberify('./index.rsh:151:23:decimal', stdlib.UInt_max, '0');
  let v2339 = stdlib.checkedBigNumberify('./index.rsh:152:23:decimal', stdlib.UInt_max, '0');
  let v2340 = v2266;
  let v2341 = v2267;
  
  while (await (async () => {
    const v2412 = v2332 ? false : true;
    
    return v2412;})()) {
    const v2413 = stdlib.add(v2336, v2337);
    const v2414 = stdlib.add(v2338, v2339);
    const v2418 = stdlib.lt(v2291, v2341);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn2;
    switch (v2680[0]) {
      case 'Admin_delete0_340': {
        const v2683 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2761 = stdlib.lt(v2292, v2682);
        stdlib.assert(v2761, {
          at: './index.rsh:287:14:application',
          fs: ['at ./index.rsh:357:30:application call to "doAdmin_delete" (defined at: ./index.rsh:285:39:function exp)', 'at ./index.rsh:357:13:application call to [unknown function] (defined at: ./index.rsh:357:13:function exp)'],
          msg: 'a delete',
          who: 'Deployer'
          });
        const v2762 = stdlib.add(v2336, v2335);
        ;
        ;
        const v2779 = [v2762, v2337];
        await txn2.getOutput('Admin_delete', 'v2779', ctc16, v2779);
        null;
        const cv2331 = v2331;
        const cv2332 = true;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = stdlib.checkedBigNumberify('./index.rsh:299:30:decimal', stdlib.UInt_max, '0');
        const cv2336 = stdlib.checkedBigNumberify('./index.rsh:297:30:decimal', stdlib.UInt_max, '0');
        const cv2337 = stdlib.checkedBigNumberify('./index.rsh:298:30:decimal', stdlib.UInt_max, '0');
        const cv2338 = v2338;
        const cv2339 = v2339;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Admin_nop0_340': {
        const v3200 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3308 = stdlib.le(v2333, v2334);
        stdlib.assert(v3308, {
          at: './index.rsh:305:14:application',
          fs: ['at ./index.rsh:361:27:application call to "doAdmin_nop" (defined at: ./index.rsh:303:36:function exp)', 'at ./index.rsh:361:13:application call to [unknown function] (defined at: ./index.rsh:361:13:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v3309 = v2682;
        await txn2.getOutput('Admin_nop', 'v3309', ctc2, v3309);
        const cv2331 = v2331;
        const cv2332 = v2332;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v2335;
        const cv2336 = v2336;
        const cv2337 = v2337;
        const cv2338 = v2338;
        const cv2339 = v2339;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Governor_stake0_340': {
        const v3717 = v2680[1];
        undefined /* setApiDetails */;
        const v3736 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '0')];
        const v3737 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '1')];
        ;
        ;
        const v3837 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '2')];
        const v3839 = stdlib.lt(v2682, v2287);
        stdlib.assert(v3839, {
          at: './index.rsh:183:14:application',
          fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
          msg: 'b signupEnd',
          who: 'Deployer'
          });
        const v3840 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
        let v3841;
        switch (v3840[0]) {
          case 'None': {
            const v3842 = v3840[1];
            v3841 = true;
            
            break;
            }
          case 'Some': {
            const v3843 = v3840[1];
            v3841 = false;
            
            break;
            }
          }
        stdlib.assert(v3841, {
          at: './index.rsh:184:14:application',
          fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
          msg: 'unstaked',
          who: 'Deployer'
          });
        const v3844 = stdlib.add(v3736, v3737);
        const v3845 = stdlib.gt(v3844, stdlib.checkedBigNumberify('./index.rsh:189:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3845, {
          at: './index.rsh:189:14:application',
          fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
          msg: 'positive stake',
          who: 'Deployer'
          });
        const v3846 = {
          bene: v3837,
          stakeN: v3736,
          stakeT: v3737,
          voted: false
          };
        await stdlib.mapSet(map0, v2679, v3846);
        const v3847 = true;
        await txn2.getOutput('Governor_stake', 'v3847', ctc3, v3847);
        null;
        const v3857 = stdlib.add(v2336, v3736);
        const v3858 = stdlib.add(v2337, v3737);
        const cv2331 = v2331;
        const cv2332 = false;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v2335;
        const cv2336 = v3857;
        const cv2337 = v3858;
        const cv2338 = v2338;
        const cv2339 = v2339;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Governor_unstake0_340': {
        const v4234 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4379 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
        const v4380 = {
          bene: v2679,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v4382 = stdlib.fromSome(v4379, v4380);
        const v4383 = v4382.stakeN;
        const v4384 = v4382.stakeT;
        const v4385 = stdlib.add(v4383, v4384);
        const v4386 = v4382.bene;
        const v4389 = v4382.voted;
        if (v4389) {
          stdlib.assert(v2418, {
            at: './index.rsh:252:16:application',
            fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:349:34:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
            msg: 'a rewardStart',
            who: 'Deployer'
            });
          }
        else {
          }
        const v4392 = v2418 ? v4389 : false;
        let v4393;
        if (v4392) {
          const v4394 = stdlib.muldiv(v2275, v4385, v2414);
          v4393 = v4394;
          }
        else {
          v4393 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
          }
        const v4395 = stdlib.le(v4393, v2335);
        stdlib.assert(v4395, {
          at: './index.rsh:257:39:application',
          fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:349:34:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'reward is portion of reward',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, v2679, undefined /* Nothing */);
        ;
        ;
        ;
        await txn2.getOutput('Governor_unstake', 'v4393', ctc2, v4393);
        null;
        const v4422 = stdlib.sub(v2336, v4383);
        const v4423 = stdlib.sub(v2337, v4384);
        const v4424 = stdlib.sub(v2335, v4393);
        const cv2331 = v2331;
        const cv2332 = false;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v4424;
        const cv2336 = v4422;
        const cv2337 = v4423;
        const cv2338 = v2338;
        const cv2339 = v2339;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Governor_unvote0_340': {
        const v4751 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4946 = stdlib.lt(v2288, v2682);
        stdlib.assert(v4946, {
          at: './index.rsh:227:14:application',
          fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'a voteStart',
          who: 'Deployer'
          });
        const v4948 = stdlib.lt(v2682, v2290);
        stdlib.assert(v4948, {
          at: './index.rsh:228:14:application',
          fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'b voteFinal',
          who: 'Deployer'
          });
        const v4949 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
        const v4950 = {
          bene: v2679,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v4952 = stdlib.fromSome(v4949, v4950);
        const v4953 = v4952.stakeN;
        const v4954 = v4952.stakeT;
        const v4956 = v4952.bene;
        const v4959 = v4952.voted;
        stdlib.assert(v4959, {
          at: './index.rsh:230:14:application',
          fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'has voted already',
          who: 'Deployer'
          });
        const v4974 = {
          bene: v4956,
          stakeN: v4953,
          stakeT: v4954,
          voted: false
          };
        await stdlib.mapSet(map0, v2679, v4974);
        const v4978 = undefined /* Remote */;
        const v4979 = await txn2.getOutput('internal', 'v4978', ctc17, v4978);
        const v4981 = v4979[stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0')];
        const v4982 = v4979[stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '1')];
        const v5007 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0'), v4981);
        stdlib.assert(v5007, {
          at: './index.rsh:235:13:application',
          fs: ['at ./index.rsh:345:46:application call to [unknown function] (defined at: ./index.rsh:231:20:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        await txn2.getOutput('Governor_unvote', 'v4982', ctc12, v4982);
        null;
        const v5054 = stdlib.sub(v2338, v4953);
        const v5055 = stdlib.sub(v2339, v4954);
        const cv2331 = v4982;
        const cv2332 = false;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v2335;
        const cv2336 = v2336;
        const cv2337 = v2337;
        const cv2338 = v5054;
        const cv2339 = v5055;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Governor_vote0_340': {
        const v5268 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v5576 = v5268[stdlib.checkedBigNumberify('./index.rsh:338:9:spread', stdlib.UInt_max, '0')];
        const v5578 = stdlib.lt(v2288, v2682);
        stdlib.assert(v5578, {
          at: './index.rsh:205:14:application',
          fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
          msg: 'a voteStart',
          who: 'Deployer'
          });
        const v5580 = stdlib.lt(v2682, v2289);
        stdlib.assert(v5580, {
          at: './index.rsh:206:14:application',
          fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
          msg: 'b voteEnd',
          who: 'Deployer'
          });
        const v5581 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
        const v5582 = {
          bene: v2679,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v5584 = stdlib.fromSome(v5581, v5582);
        const v5585 = v5584.stakeN;
        const v5586 = v5584.stakeT;
        const v5587 = stdlib.add(v5585, v5586);
        const v5588 = v5584.bene;
        const v5591 = v5584.voted;
        const v5593 = v5591 ? false : true;
        stdlib.assert(v5593, {
          at: './index.rsh:208:14:application',
          fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
          msg: 'hasn\'t voted yet',
          who: 'Deployer'
          });
        const v5607 = {
          bene: v5588,
          stakeN: v5585,
          stakeT: v5586,
          voted: true
          };
        await stdlib.mapSet(map0, v2679, v5607);
        const v5631 = undefined /* Remote */;
        const v5632 = await txn2.getOutput('internal', 'v5631', ctc17, v5631);
        const v5634 = v5632[stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0')];
        const v5635 = v5632[stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '1')];
        const v5660 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0'), v5634);
        stdlib.assert(v5660, {
          at: './index.rsh:213:13:application',
          fs: ['at ./index.rsh:341:56:application call to [unknown function] (defined at: ./index.rsh:209:20:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        await txn2.getOutput('Governor_vote', 'v5635', ctc12, v5635);
        null;
        const v5728 = stdlib.add(v2338, v5585);
        const v5729 = stdlib.add(v2339, v5586);
        const cv2331 = v5635;
        const cv2332 = false;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v2335;
        const cv2336 = v2336;
        const cv2337 = v2337;
        const cv2338 = v5728;
        const cv2339 = v5729;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
        continue;
        break;
        }
      case 'Other_claimFor0_340': {
        const v5785 = v2680[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v6250 = v5785[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
        const v6252 = stdlib.lt(v2291, v2682);
        stdlib.assert(v6252, {
          at: './index.rsh:282:14:application',
          fs: ['at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
          msg: 'a rewardStart',
          who: 'Deployer'
          });
        const v6253 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6250), null);
        const v6254 = {
          bene: v6250,
          stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          voted: false
          };
        const v6256 = stdlib.fromSome(v6253, v6254);
        const v6257 = v6256.stakeN;
        const v6258 = v6256.stakeT;
        const v6259 = stdlib.add(v6257, v6258);
        const v6260 = v6256.bene;
        const v6263 = v6256.voted;
        if (v6263) {
          stdlib.assert(v2418, {
            at: './index.rsh:252:16:application',
            fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
            msg: 'a rewardStart',
            who: 'Deployer'
            });
          }
        else {
          }
        const v6266 = v2418 ? v6263 : false;
        let v6267;
        if (v6266) {
          const v6268 = stdlib.muldiv(v2275, v6259, v2414);
          v6267 = v6268;
          }
        else {
          v6267 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
          }
        const v6269 = stdlib.le(v6267, v2335);
        stdlib.assert(v6269, {
          at: './index.rsh:257:39:application',
          fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
          msg: 'reward is portion of reward',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, v6250, undefined /* Nothing */);
        ;
        ;
        ;
        await txn2.getOutput('Other_claimFor', 'v6267', ctc2, v6267);
        null;
        const v6297 = stdlib.sub(v2336, v6257);
        const v6298 = stdlib.sub(v2337, v6258);
        const v6299 = stdlib.sub(v2335, v6267);
        const cv2331 = v2331;
        const cv2332 = false;
        const cv2333 = v2334;
        const cv2334 = v2682;
        const cv2335 = v6299;
        const cv2336 = v6297;
        const cv2337 = v6298;
        const cv2338 = v2338;
        const cv2339 = v2339;
        const cv2340 = v2681;
        const cv2341 = v2682;
        
        v2331 = cv2331;
        v2332 = cv2332;
        v2333 = cv2333;
        v2334 = cv2334;
        v2335 = cv2335;
        v2336 = cv2336;
        v2337 = cv2337;
        v2338 = cv2338;
        v2339 = cv2339;
        v2340 = cv2340;
        v2341 = cv2341;
        
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
    Admin_delete0_340: ctc12,
    Admin_nop0_340: ctc12,
    Governor_stake0_340: ctc11,
    Governor_unstake0_340: ctc12,
    Governor_unvote0_340: ctc12,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2419 = ctc.selfAddress();
  const v2421 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_stake0_340" (defined at: ./index.rsh:334:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Governor_stake'
    });
  const v2422 = v2421[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2423 = v2421[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2429 = stdlib.lt(v2334, v2287);
  stdlib.assert(v2429, {
    at: './index.rsh:183:14:application',
    fs: ['at ./index.rsh:335:61:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_stake0_340" (defined at: ./index.rsh:334:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'b signupEnd',
    who: 'Governor_stake'
    });
  const v2430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2419), null);
  let v2431;
  switch (v2430[0]) {
    case 'None': {
      const v2432 = v2430[1];
      v2431 = true;
      
      break;
      }
    case 'Some': {
      const v2433 = v2430[1];
      v2431 = false;
      
      break;
      }
    }
  stdlib.assert(v2431, {
    at: './index.rsh:184:14:application',
    fs: ['at ./index.rsh:335:61:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_stake0_340" (defined at: ./index.rsh:334:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'unstaked',
    who: 'Governor_stake'
    });
  const v2434 = stdlib.add(v2422, v2423);
  const v2435 = stdlib.gt(v2434, stdlib.checkedBigNumberify('./index.rsh:189:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2435, {
    at: './index.rsh:189:14:application',
    fs: ['at ./index.rsh:335:61:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:335:30:application call to [unknown function] (defined at: ./index.rsh:335:30:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_stake0_340" (defined at: ./index.rsh:334:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'positive stake',
    who: 'Governor_stake'
    });
  const v2441 = ['Governor_stake0_340', v2421];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2441],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [v2422, [[v2423, v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_stake"
            });
          const v3736 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '0')];
          const v3737 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '1')];
          sim_r.txns.push({
            amt: v3736,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v3737,
            kind: 'to',
            tok: v2265
            });
          const v3837 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '2')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2679), null);
          const v3846 = {
            bene: v3837,
            stakeN: v3736,
            stakeT: v3737,
            voted: false
            };
          await stdlib.simMapSet(sim_r, 0, v2679, v3846);
          const v3847 = true;
          const v3848 = await txn1.getOutput('Governor_stake', 'v3847', ctc3, v3847);
          
          null;
          const v3857 = stdlib.add(v2336, v3736);
          const v3858 = stdlib.add(v2337, v3737);
          const v22062 = v2331;
          const v22063 = false;
          const v22064 = v2334;
          const v22065 = v2682;
          const v22066 = v2335;
          const v22067 = v3857;
          const v22068 = v3858;
          const v22069 = v2338;
          const v22070 = v2339;
          const v22074 = stdlib.add(v3857, v3858);
          const v22075 = stdlib.add(v2338, v2339);
          const v22076 = stdlib.lt(v2291, v2682);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      undefined /* setApiDetails */;
      const v3736 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '0')];
      const v3737 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '1')];
      ;
      ;
      const v3837 = v3717[stdlib.checkedBigNumberify('./index.rsh:334:9:spread', stdlib.UInt_max, '2')];
      const v3839 = stdlib.lt(v2682, v2287);
      stdlib.assert(v3839, {
        at: './index.rsh:183:14:application',
        fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
        msg: 'b signupEnd',
        who: 'Governor_stake'
        });
      const v3840 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
      let v3841;
      switch (v3840[0]) {
        case 'None': {
          const v3842 = v3840[1];
          v3841 = true;
          
          break;
          }
        case 'Some': {
          const v3843 = v3840[1];
          v3841 = false;
          
          break;
          }
        }
      stdlib.assert(v3841, {
        at: './index.rsh:184:14:application',
        fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
        msg: 'unstaked',
        who: 'Governor_stake'
        });
      const v3844 = stdlib.add(v3736, v3737);
      const v3845 = stdlib.gt(v3844, stdlib.checkedBigNumberify('./index.rsh:189:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3845, {
        at: './index.rsh:189:14:application',
        fs: ['at ./index.rsh:337:54:application call to "doGovernor_stake" (defined at: ./index.rsh:182:63:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
        msg: 'positive stake',
        who: 'Governor_stake'
        });
      const v3846 = {
        bene: v3837,
        stakeN: v3736,
        stakeT: v3737,
        voted: false
        };
      await stdlib.mapSet(map0, v2679, v3846);
      const v3847 = true;
      const v3848 = await txn1.getOutput('Governor_stake', 'v3847', ctc3, v3847);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v3717, v3848), {
          at: './index.rsh:334:10:application',
          fs: ['at ./index.rsh:334:10:application call to [unknown function] (defined at: ./index.rsh:334:10:function exp)', 'at ./index.rsh:192:12:application call to "k" (defined at: ./index.rsh:337:35:function exp)', 'at ./index.rsh:337:89:application call to [unknown function] (defined at: ./index.rsh:190:20:function exp)', 'at ./index.rsh:337:35:application call to [unknown function] (defined at: ./index.rsh:337:35:function exp)'],
          msg: 'out',
          who: 'Governor_stake'
          });
        }
      else {
        }
      
      null;
      const v3857 = stdlib.add(v2336, v3736);
      const v3858 = stdlib.add(v2337, v3737);
      const v22062 = v2331;
      const v22063 = false;
      const v22064 = v2334;
      const v22065 = v2682;
      const v22066 = v2335;
      const v22067 = v3857;
      const v22068 = v3858;
      const v22069 = v2338;
      const v22070 = v2339;
      const v22074 = stdlib.add(v3857, v3858);
      const v22075 = stdlib.add(v2338, v2339);
      const v22076 = stdlib.lt(v2291, v2682);
      return;
      
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
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
    Admin_delete0_340: ctc11,
    Admin_nop0_340: ctc11,
    Governor_stake0_340: ctc12,
    Governor_unstake0_340: ctc11,
    Governor_unvote0_340: ctc11,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2531 = ctc.selfAddress();
  const v2533 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:347:10:application call to [unknown function] (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unstake0_340" (defined at: ./index.rsh:346:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Governor_unstake'
    });
  const v2535 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2531), null);
  const v2536 = {
    bene: v2531,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v2538 = stdlib.fromSome(v2535, v2536);
  const v2539 = v2538.stakeN;
  const v2540 = v2538.stakeT;
  const v2541 = stdlib.add(v2539, v2540);
  const v2545 = v2538.voted;
  if (v2545) {
    stdlib.assert(v2418, {
      at: './index.rsh:252:16:application',
      fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:347:43:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:347:10:application call to [unknown function] (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:347:10:application call to [unknown function] (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unstake0_340" (defined at: ./index.rsh:346:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
      msg: 'a rewardStart',
      who: 'Governor_unstake'
      });
    }
  else {
    }
  const v2548 = v2418 ? v2545 : false;
  let v2549;
  if (v2548) {
    const v2550 = stdlib.muldiv(v2275, v2541, v2414);
    v2549 = v2550;
    }
  else {
    v2549 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
    }
  const v2551 = stdlib.le(v2549, v2335);
  stdlib.assert(v2551, {
    at: './index.rsh:257:39:application',
    fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:347:43:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:347:10:application call to [unknown function] (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:347:10:application call to [unknown function] (defined at: ./index.rsh:347:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unstake0_340" (defined at: ./index.rsh:346:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'reward is portion of reward',
    who: 'Governor_unstake'
    });
  const v2554 = ['Governor_unstake0_340', v2533];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2554],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:348:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:348:19:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_unstake"
            });
          ;
          ;
          const v4379 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2679), null);
          const v4380 = {
            bene: v2679,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v4382 = stdlib.fromSome(v4379, v4380);
          const v4383 = v4382.stakeN;
          const v4384 = v4382.stakeT;
          const v4385 = stdlib.add(v4383, v4384);
          const v4386 = v4382.bene;
          const v4389 = v4382.voted;
          const v4392 = v2418 ? v4389 : false;
          let v4393;
          if (v4392) {
            const v4394 = stdlib.muldiv(v2275, v4385, v2414);
            v4393 = v4394;
            }
          else {
            v4393 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
            }
          await stdlib.simMapSet(sim_r, 0, v2679, undefined /* Nothing */);
          sim_r.txns.push({
            kind: 'from',
            to: v2679,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v2679,
            tok: v2265
            });
          sim_r.txns.push({
            kind: 'from',
            to: v4386,
            tok: undefined /* Nothing */
            });
          const v4416 = await txn1.getOutput('Governor_unstake', 'v4393', ctc2, v4393);
          
          null;
          const v4422 = stdlib.sub(v2336, v4383);
          const v4423 = stdlib.sub(v2337, v4384);
          const v4424 = stdlib.sub(v2335, v4393);
          const v22198 = v2331;
          const v22199 = false;
          const v22200 = v2334;
          const v22201 = v2682;
          const v22202 = v4424;
          const v22203 = v4422;
          const v22204 = v4423;
          const v22205 = v2338;
          const v22206 = v2339;
          const v22210 = stdlib.add(v4422, v4423);
          const v22211 = stdlib.add(v2338, v2339);
          const v22212 = stdlib.lt(v2291, v2682);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4379 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
      const v4380 = {
        bene: v2679,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v4382 = stdlib.fromSome(v4379, v4380);
      const v4383 = v4382.stakeN;
      const v4384 = v4382.stakeT;
      const v4385 = stdlib.add(v4383, v4384);
      const v4386 = v4382.bene;
      const v4389 = v4382.voted;
      if (v4389) {
        stdlib.assert(v2418, {
          at: './index.rsh:252:16:application',
          fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:349:34:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'a rewardStart',
          who: 'Governor_unstake'
          });
        }
      else {
        }
      const v4392 = v2418 ? v4389 : false;
      let v4393;
      if (v4392) {
        const v4394 = stdlib.muldiv(v2275, v4385, v2414);
        v4393 = v4394;
        }
      else {
        v4393 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
        }
      const v4395 = stdlib.le(v4393, v2335);
      stdlib.assert(v4395, {
        at: './index.rsh:257:39:application',
        fs: ['at ./index.rsh:278:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:349:34:application call to "doGovernor_unstake" (defined at: ./index.rsh:277:43:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
        msg: 'reward is portion of reward',
        who: 'Governor_unstake'
        });
      await stdlib.mapSet(map0, v2679, undefined /* Nothing */);
      ;
      ;
      ;
      const v4416 = await txn1.getOutput('Governor_unstake', 'v4393', ctc2, v4393);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v4234, v4416), {
          at: './index.rsh:346:10:application',
          fs: ['at ./index.rsh:346:10:application call to [unknown function] (defined at: ./index.rsh:346:10:function exp)', 'at ./index.rsh:265:12:application call to "k" (defined at: ./index.rsh:349:13:function exp)', 'at ./index.rsh:349:47:application call to [unknown function] (defined at: ./index.rsh:258:20:function exp)', 'at ./index.rsh:349:13:application call to [unknown function] (defined at: ./index.rsh:349:13:function exp)'],
          msg: 'out',
          who: 'Governor_unstake'
          });
        }
      else {
        }
      
      null;
      const v4422 = stdlib.sub(v2336, v4383);
      const v4423 = stdlib.sub(v2337, v4384);
      const v4424 = stdlib.sub(v2335, v4393);
      const v22198 = v2331;
      const v22199 = false;
      const v22200 = v2334;
      const v22201 = v2682;
      const v22202 = v4424;
      const v22203 = v4422;
      const v22204 = v4423;
      const v22205 = v2338;
      const v22206 = v2339;
      const v22210 = stdlib.add(v4422, v4423);
      const v22211 = stdlib.add(v2338, v2339);
      const v22212 = stdlib.lt(v2291, v2682);
      return;
      
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
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
    Admin_delete0_340: ctc11,
    Admin_nop0_340: ctc11,
    Governor_stake0_340: ctc12,
    Governor_unstake0_340: ctc11,
    Governor_unvote0_340: ctc11,
    Governor_vote0_340: ctc13,
    Other_claimFor0_340: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc10]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2509 = ctc.selfAddress();
  const v2511 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unvote0_340" (defined at: ./index.rsh:342:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Governor_unvote'
    });
  const v2513 = stdlib.lt(v2288, v2334);
  stdlib.assert(v2513, {
    at: './index.rsh:227:14:application',
    fs: ['at ./index.rsh:343:42:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unvote0_340" (defined at: ./index.rsh:342:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'a voteStart',
    who: 'Governor_unvote'
    });
  const v2514 = stdlib.lt(v2334, v2290);
  stdlib.assert(v2514, {
    at: './index.rsh:228:14:application',
    fs: ['at ./index.rsh:343:42:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unvote0_340" (defined at: ./index.rsh:342:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'b voteFinal',
    who: 'Governor_unvote'
    });
  const v2515 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2509), null);
  const v2516 = {
    bene: v2509,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v2518 = stdlib.fromSome(v2515, v2516);
  const v2525 = v2518.voted;
  stdlib.assert(v2525, {
    at: './index.rsh:230:14:application',
    fs: ['at ./index.rsh:343:42:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:343:10:application call to [unknown function] (defined at: ./index.rsh:343:10:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_unvote0_340" (defined at: ./index.rsh:342:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'has voted already',
    who: 'Governor_unvote'
    });
  const v2529 = ['Governor_unvote0_340', v2511];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2529],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:344:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:344:19:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_unvote"
            });
          ;
          ;
          const v4949 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2679), null);
          const v4950 = {
            bene: v2679,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v4952 = stdlib.fromSome(v4949, v4950);
          const v4953 = v4952.stakeN;
          const v4954 = v4952.stakeT;
          const v4956 = v4952.bene;
          const v4974 = {
            bene: v4956,
            stakeN: v4953,
            stakeT: v4954,
            voted: false
            };
          await stdlib.simMapSet(sim_r, 0, v2679, v4974);
          const v4978 = [stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
            accs: [v2679],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:233:58:application', stdlib.UInt_max, '0'),
            kind: 'remote',
            obj: v2285,
            pays: stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0'),
            toks: []
            })), undefined)];
          const v4979 = await txn1.getOutput('internal', 'v4978', ctc16, v4978);
          const v4982 = v4979[stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '1')];
          const v5008 = await txn1.getOutput('Governor_unvote', 'v4982', ctc10, v4982);
          
          null;
          const v5054 = stdlib.sub(v2338, v4953);
          const v5055 = stdlib.sub(v2339, v4954);
          const v22334 = v4982;
          const v22335 = false;
          const v22336 = v2334;
          const v22337 = v2682;
          const v22338 = v2335;
          const v22339 = v2336;
          const v22340 = v2337;
          const v22341 = v5054;
          const v22342 = v5055;
          const v22346 = stdlib.add(v2336, v2337);
          const v22347 = stdlib.add(v5054, v5055);
          const v22348 = stdlib.lt(v2291, v2682);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4946 = stdlib.lt(v2288, v2682);
      stdlib.assert(v4946, {
        at: './index.rsh:227:14:application',
        fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
        msg: 'a voteStart',
        who: 'Governor_unvote'
        });
      const v4948 = stdlib.lt(v2682, v2290);
      stdlib.assert(v4948, {
        at: './index.rsh:228:14:application',
        fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
        msg: 'b voteFinal',
        who: 'Governor_unvote'
        });
      const v4949 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
      const v4950 = {
        bene: v2679,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v4952 = stdlib.fromSome(v4949, v4950);
      const v4953 = v4952.stakeN;
      const v4954 = v4952.stakeT;
      const v4956 = v4952.bene;
      const v4959 = v4952.voted;
      stdlib.assert(v4959, {
        at: './index.rsh:230:14:application',
        fs: ['at ./index.rsh:345:33:application call to "doGovernor_unvote" (defined at: ./index.rsh:226:42:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
        msg: 'has voted already',
        who: 'Governor_unvote'
        });
      const v4974 = {
        bene: v4956,
        stakeN: v4953,
        stakeT: v4954,
        voted: false
        };
      await stdlib.mapSet(map0, v2679, v4974);
      const v4978 = undefined /* Remote */;
      const v4979 = await txn1.getOutput('internal', 'v4978', ctc16, v4978);
      const v4981 = v4979[stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0')];
      const v4982 = v4979[stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '1')];
      const v5007 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:235:13:application', stdlib.UInt_max, '0'), v4981);
      stdlib.assert(v5007, {
        at: './index.rsh:235:13:application',
        fs: ['at ./index.rsh:345:46:application call to [unknown function] (defined at: ./index.rsh:231:20:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
        msg: 'remote bill check',
        who: 'Governor_unvote'
        });
      const v5008 = await txn1.getOutput('Governor_unvote', 'v4982', ctc10, v4982);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v4751, v5008), {
          at: './index.rsh:342:10:application',
          fs: ['at ./index.rsh:342:10:application call to [unknown function] (defined at: ./index.rsh:342:10:function exp)', 'at ./index.rsh:236:12:application call to "k" (defined at: ./index.rsh:345:13:function exp)', 'at ./index.rsh:345:46:application call to [unknown function] (defined at: ./index.rsh:231:20:function exp)', 'at ./index.rsh:345:13:application call to [unknown function] (defined at: ./index.rsh:345:13:function exp)'],
          msg: 'out',
          who: 'Governor_unvote'
          });
        }
      else {
        }
      
      null;
      const v5054 = stdlib.sub(v2338, v4953);
      const v5055 = stdlib.sub(v2339, v4954);
      const v22334 = v4982;
      const v22335 = false;
      const v22336 = v2334;
      const v22337 = v2682;
      const v22338 = v2335;
      const v22339 = v2336;
      const v22340 = v2337;
      const v22341 = v5054;
      const v22342 = v5055;
      const v22346 = stdlib.add(v2336, v2337);
      const v22347 = stdlib.add(v5054, v5055);
      const v22348 = stdlib.lt(v2291, v2682);
      return;
      
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
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
    Admin_delete0_340: ctc12,
    Admin_nop0_340: ctc12,
    Governor_stake0_340: ctc13,
    Governor_unstake0_340: ctc12,
    Governor_unvote0_340: ctc12,
    Governor_vote0_340: ctc11,
    Other_claimFor0_340: ctc14
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc10]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2443 = ctc.selfAddress();
  const v2445 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_vote0_340" (defined at: ./index.rsh:338:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Governor_vote'
    });
  const v2469 = stdlib.lt(v2288, v2334);
  stdlib.assert(v2469, {
    at: './index.rsh:205:14:application',
    fs: ['at ./index.rsh:339:44:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_vote0_340" (defined at: ./index.rsh:338:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'a voteStart',
    who: 'Governor_vote'
    });
  const v2470 = stdlib.lt(v2334, v2289);
  stdlib.assert(v2470, {
    at: './index.rsh:206:14:application',
    fs: ['at ./index.rsh:339:44:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_vote0_340" (defined at: ./index.rsh:338:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'b voteEnd',
    who: 'Governor_vote'
    });
  const v2471 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2443), null);
  const v2472 = {
    bene: v2443,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v2474 = stdlib.fromSome(v2471, v2472);
  const v2481 = v2474.voted;
  const v2483 = v2481 ? false : true;
  stdlib.assert(v2483, {
    at: './index.rsh:208:14:application',
    fs: ['at ./index.rsh:339:44:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:339:14:application call to [unknown function] (defined at: ./index.rsh:339:14:function exp)', 'at ./index.rsh:148:19:application call to "runGovernor_vote0_340" (defined at: ./index.rsh:338:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'hasn\'t voted yet',
    who: 'Governor_vote'
    });
  const v2507 = ['Governor_vote0_340', v2445];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2507],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:340:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:340:20:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Governor_vote"
            });
          ;
          ;
          const v5576 = v5268[stdlib.checkedBigNumberify('./index.rsh:338:9:spread', stdlib.UInt_max, '0')];
          const v5581 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2679), null);
          const v5582 = {
            bene: v2679,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v5584 = stdlib.fromSome(v5581, v5582);
          const v5585 = v5584.stakeN;
          const v5586 = v5584.stakeT;
          const v5587 = stdlib.add(v5585, v5586);
          const v5588 = v5584.bene;
          const v5607 = {
            bene: v5588,
            stakeN: v5585,
            stakeT: v5586,
            voted: true
            };
          await stdlib.simMapSet(sim_r, 0, v2679, v5607);
          const v5631 = [stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
            accs: [v2679],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('./index.rsh:211:54:application', stdlib.UInt_max, '0'),
            kind: 'remote',
            obj: v2285,
            pays: stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0'),
            toks: []
            })), undefined)];
          const v5632 = await txn1.getOutput('internal', 'v5631', ctc16, v5631);
          const v5635 = v5632[stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '1')];
          const v5661 = await txn1.getOutput('Governor_vote', 'v5635', ctc10, v5635);
          
          null;
          const v5728 = stdlib.add(v2338, v5585);
          const v5729 = stdlib.add(v2339, v5586);
          const v22470 = v5635;
          const v22471 = false;
          const v22472 = v2334;
          const v22473 = v2682;
          const v22474 = v2335;
          const v22475 = v2336;
          const v22476 = v2337;
          const v22477 = v5728;
          const v22478 = v5729;
          const v22482 = stdlib.add(v2336, v2337);
          const v22483 = stdlib.add(v5728, v5729);
          const v22484 = stdlib.lt(v2291, v2682);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5576 = v5268[stdlib.checkedBigNumberify('./index.rsh:338:9:spread', stdlib.UInt_max, '0')];
      const v5578 = stdlib.lt(v2288, v2682);
      stdlib.assert(v5578, {
        at: './index.rsh:205:14:application',
        fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
        msg: 'a voteStart',
        who: 'Governor_vote'
        });
      const v5580 = stdlib.lt(v2682, v2289);
      stdlib.assert(v5580, {
        at: './index.rsh:206:14:application',
        fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
        msg: 'b voteEnd',
        who: 'Governor_vote'
        });
      const v5581 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2679), null);
      const v5582 = {
        bene: v2679,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v5584 = stdlib.fromSome(v5581, v5582);
      const v5585 = v5584.stakeN;
      const v5586 = v5584.stakeT;
      const v5587 = stdlib.add(v5585, v5586);
      const v5588 = v5584.bene;
      const v5591 = v5584.voted;
      const v5593 = v5591 ? false : true;
      stdlib.assert(v5593, {
        at: './index.rsh:208:14:application',
        fs: ['at ./index.rsh:341:37:application call to "doGovernor_vote" (defined at: ./index.rsh:204:46:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
        msg: 'hasn\'t voted yet',
        who: 'Governor_vote'
        });
      const v5607 = {
        bene: v5588,
        stakeN: v5585,
        stakeT: v5586,
        voted: true
        };
      await stdlib.mapSet(map0, v2679, v5607);
      const v5631 = undefined /* Remote */;
      const v5632 = await txn1.getOutput('internal', 'v5631', ctc16, v5631);
      const v5634 = v5632[stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0')];
      const v5635 = v5632[stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '1')];
      const v5660 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:213:13:application', stdlib.UInt_max, '0'), v5634);
      stdlib.assert(v5660, {
        at: './index.rsh:213:13:application',
        fs: ['at ./index.rsh:341:56:application call to [unknown function] (defined at: ./index.rsh:209:20:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
        msg: 'remote bill check',
        who: 'Governor_vote'
        });
      const v5661 = await txn1.getOutput('Governor_vote', 'v5635', ctc10, v5635);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v5268, v5661), {
          at: './index.rsh:338:10:application',
          fs: ['at ./index.rsh:338:10:application call to [unknown function] (defined at: ./index.rsh:338:10:function exp)', 'at ./index.rsh:214:12:application call to "k" (defined at: ./index.rsh:341:19:function exp)', 'at ./index.rsh:341:56:application call to [unknown function] (defined at: ./index.rsh:209:20:function exp)', 'at ./index.rsh:341:19:application call to [unknown function] (defined at: ./index.rsh:341:19:function exp)'],
          msg: 'out',
          who: 'Governor_vote'
          });
        }
      else {
        }
      
      null;
      const v5728 = stdlib.add(v2338, v5585);
      const v5729 = stdlib.add(v2339, v5586);
      const v22470 = v5635;
      const v22471 = false;
      const v22472 = v2334;
      const v22473 = v2682;
      const v22474 = v2335;
      const v22475 = v2336;
      const v22476 = v2337;
      const v22477 = v5728;
      const v22478 = v5729;
      const v22482 = stdlib.add(v2336, v2337);
      const v22483 = stdlib.add(v5728, v5729);
      const v22484 = stdlib.lt(v2291, v2682);
      return;
      
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
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
    Admin_delete0_340: ctc12,
    Admin_nop0_340: ctc12,
    Governor_stake0_340: ctc13,
    Governor_unstake0_340: ctc12,
    Governor_unvote0_340: ctc12,
    Governor_vote0_340: ctc14,
    Other_claimFor0_340: ctc11
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]);
  const v2558 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:148:19:application call to "runOther_claimFor0_340" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'in',
    who: 'Other_claimFor'
    });
  const v2559 = v2558[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2562 = stdlib.lt(v2291, v2334);
  stdlib.assert(v2562, {
    at: './index.rsh:282:14:application',
    fs: ['at ./index.rsh:351:44:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:148:19:application call to "runOther_claimFor0_340" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'a rewardStart',
    who: 'Other_claimFor'
    });
  const v2563 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2559), null);
  const v2564 = {
    bene: v2559,
    stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    voted: false
    };
  const v2566 = stdlib.fromSome(v2563, v2564);
  const v2567 = v2566.stakeN;
  const v2568 = v2566.stakeT;
  const v2569 = stdlib.add(v2567, v2568);
  const v2573 = v2566.voted;
  if (v2573) {
    stdlib.assert(v2418, {
      at: './index.rsh:252:16:application',
      fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:351:44:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:148:19:application call to "runOther_claimFor0_340" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
      msg: 'a rewardStart',
      who: 'Other_claimFor'
      });
    }
  else {
    }
  const v2576 = v2418 ? v2573 : false;
  let v2577;
  if (v2576) {
    const v2578 = stdlib.muldiv(v2275, v2569, v2414);
    v2577 = v2578;
    }
  else {
    v2577 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
    }
  const v2579 = stdlib.le(v2577, v2335);
  stdlib.assert(v2579, {
    at: './index.rsh:257:39:application',
    fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:351:44:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:351:13:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:148:19:application call to "runOther_claimFor0_340" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)'],
    msg: 'reward is portion of reward',
    who: 'Other_claimFor'
    });
  const v2583 = ['Other_claimFor0_340', v2558];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2263, v2264, v2265, v2275, v2285, v2287, v2288, v2289, v2290, v2291, v2292, v2331, v2332, v2333, v2334, v2335, v2336, v2337, v2338, v2339, v2413, v2414, v2418, v2583],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:352:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:352:20:decimal', stdlib.UInt_max, '0'), v2265]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
      
      switch (v2680[0]) {
        case 'Admin_delete0_340': {
          const v2683 = v2680[1];
          
          break;
          }
        case 'Admin_nop0_340': {
          const v3200 = v2680[1];
          
          break;
          }
        case 'Governor_stake0_340': {
          const v3717 = v2680[1];
          
          break;
          }
        case 'Governor_unstake0_340': {
          const v4234 = v2680[1];
          
          break;
          }
        case 'Governor_unvote0_340': {
          const v4751 = v2680[1];
          
          break;
          }
        case 'Governor_vote0_340': {
          const v5268 = v2680[1];
          
          break;
          }
        case 'Other_claimFor0_340': {
          const v5785 = v2680[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Other_claimFor"
            });
          ;
          ;
          const v6250 = v5785[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
          const v6253 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v6250), null);
          const v6254 = {
            bene: v6250,
            stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            voted: false
            };
          const v6256 = stdlib.fromSome(v6253, v6254);
          const v6257 = v6256.stakeN;
          const v6258 = v6256.stakeT;
          const v6259 = stdlib.add(v6257, v6258);
          const v6260 = v6256.bene;
          const v6263 = v6256.voted;
          const v6266 = v2418 ? v6263 : false;
          let v6267;
          if (v6266) {
            const v6268 = stdlib.muldiv(v2275, v6259, v2414);
            v6267 = v6268;
            }
          else {
            v6267 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
            }
          await stdlib.simMapSet(sim_r, 0, v6250, undefined /* Nothing */);
          sim_r.txns.push({
            kind: 'from',
            to: v6250,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v6250,
            tok: v2265
            });
          sim_r.txns.push({
            kind: 'from',
            to: v6260,
            tok: undefined /* Nothing */
            });
          const v6290 = await txn1.getOutput('Other_claimFor', 'v6267', ctc2, v6267);
          
          null;
          const v6297 = stdlib.sub(v2336, v6257);
          const v6298 = stdlib.sub(v2337, v6258);
          const v6299 = stdlib.sub(v2335, v6267);
          const v22606 = v2331;
          const v22607 = false;
          const v22608 = v2334;
          const v22609 = v2682;
          const v22610 = v6299;
          const v22611 = v6297;
          const v22612 = v6298;
          const v22613 = v2338;
          const v22614 = v2339;
          const v22618 = stdlib.add(v6297, v6298);
          const v22619 = stdlib.add(v2338, v2339);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc8, ctc9, ctc2, ctc6, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc10, ctc3, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2680], secs: v2682, time: v2681, didSend: v1470, from: v2679 } = txn1;
  switch (v2680[0]) {
    case 'Admin_delete0_340': {
      const v2683 = v2680[1];
      return;
      break;
      }
    case 'Admin_nop0_340': {
      const v3200 = v2680[1];
      return;
      break;
      }
    case 'Governor_stake0_340': {
      const v3717 = v2680[1];
      return;
      break;
      }
    case 'Governor_unstake0_340': {
      const v4234 = v2680[1];
      return;
      break;
      }
    case 'Governor_unvote0_340': {
      const v4751 = v2680[1];
      return;
      break;
      }
    case 'Governor_vote0_340': {
      const v5268 = v2680[1];
      return;
      break;
      }
    case 'Other_claimFor0_340': {
      const v5785 = v2680[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v6250 = v5785[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
      const v6252 = stdlib.lt(v2291, v2682);
      stdlib.assert(v6252, {
        at: './index.rsh:282:14:application',
        fs: ['at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
        msg: 'a rewardStart',
        who: 'Other_claimFor'
        });
      const v6253 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6250), null);
      const v6254 = {
        bene: v6250,
        stakeN: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        stakeT: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        voted: false
        };
      const v6256 = stdlib.fromSome(v6253, v6254);
      const v6257 = v6256.stakeN;
      const v6258 = v6256.stakeT;
      const v6259 = stdlib.add(v6257, v6258);
      const v6260 = v6256.bene;
      const v6263 = v6256.voted;
      if (v6263) {
        stdlib.assert(v2418, {
          at: './index.rsh:252:16:application',
          fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
          msg: 'a rewardStart',
          who: 'Other_claimFor'
          });
        }
      else {
        }
      const v6266 = v2418 ? v6263 : false;
      let v6267;
      if (v6266) {
        const v6268 = stdlib.muldiv(v2275, v6259, v2414);
        v6267 = v6268;
        }
      else {
        v6267 = stdlib.checkedBigNumberify('./index.rsh:256:119:decimal', stdlib.UInt_max, '0');
        }
      const v6269 = stdlib.le(v6267, v2335);
      stdlib.assert(v6269, {
        at: './index.rsh:257:39:application',
        fs: ['at ./index.rsh:283:25:application call to "doUnstake" (defined at: ./index.rsh:248:34:function exp)', 'at ./index.rsh:353:37:application call to "doOther_claimFor" (defined at: ./index.rsh:280:46:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
        msg: 'reward is portion of reward',
        who: 'Other_claimFor'
        });
      await stdlib.mapSet(map0, v6250, undefined /* Nothing */);
      ;
      ;
      ;
      const v6290 = await txn1.getOutput('Other_claimFor', 'v6267', ctc2, v6267);
      if (v1470) {
        stdlib.protect(ctc0, await interact.out(v5785, v6290), {
          at: './index.rsh:350:10:application',
          fs: ['at ./index.rsh:350:10:application call to [unknown function] (defined at: ./index.rsh:350:10:function exp)', 'at ./index.rsh:265:12:application call to "k" (defined at: ./index.rsh:353:18:function exp)', 'at ./index.rsh:353:55:application call to [unknown function] (defined at: ./index.rsh:258:20:function exp)', 'at ./index.rsh:353:18:application call to [unknown function] (defined at: ./index.rsh:353:18:function exp)'],
          msg: 'out',
          who: 'Other_claimFor'
          });
        }
      else {
        }
      
      null;
      const v6297 = stdlib.sub(v2336, v6257);
      const v6298 = stdlib.sub(v2337, v6258);
      const v6299 = stdlib.sub(v2335, v6267);
      const v22606 = v2331;
      const v22607 = false;
      const v22608 = v2334;
      const v22609 = v2682;
      const v22610 = v6299;
      const v22611 = v6297;
      const v22612 = v6298;
      const v22613 = v2338;
      const v22614 = v2339;
      const v22618 = stdlib.add(v6297, v6298);
      const v22619 = stdlib.add(v2338, v2339);
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
export async function Admin_nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _Admin_nop3(ctcTop, interact);}
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
    impure: [`Admin_delete()(uint64,uint64)`, `Admin_nop()uint64`, `Governor_stake(uint64,uint64,address)byte`, `Governor_unstake()uint64`, `Governor_unvote()uint64[4][4]`, `Governor_vote(uint64[4][4])uint64[4][4]`, `Other_claimFor(address)uint64`],
    pure: [`Info()((uint64,uint64,address,uint64,address,uint64,uint64[4],uint64,uint64,uint64,uint64,uint64,uint64,uint64),uint64,uint64[4][4],uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `accountData(address)(address,uint64,uint64,uint64,byte)`],
    sigs: [`Admin_delete()(uint64,uint64)`, `Admin_nop()uint64`, `Governor_stake(uint64,uint64,address)byte`, `Governor_unstake()uint64`, `Governor_unvote()uint64[4][4]`, `Governor_vote(uint64[4][4])uint64[4][4]`, `Info()((uint64,uint64,address,uint64,address,uint64,uint64[4],uint64,uint64,uint64,uint64,uint64,uint64,uint64),uint64,uint64[4][4],uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `Other_claimFor(address)uint64`, `accountData(address)(address,uint64,uint64,uint64,byte)`]
    },
  appApproval: `BiAcAAgBgAEEAyAoMgYC05uT7gbIjdHRCZrLodELw7GN+g+I7cbACbGL1JECsp+r+gSKt7q8AaAC4QPJA9EDuQPBA7EDBaCNBiYIAQABAQABAwECBWFwcElEBB/nwskIAAAAAAAAAAEiNQAxGEEKnCpkSSJbNQEjWzUCMRkkEkEACjEAKCEIr2ZCCmk2GgAXSUEBgiI1BCQ1BkkhCwxAAMJJIQwMQABBSSENDEAAKUkhDgxAABEhDhJEKjX/KzT/UCWvUEIBZyENEkQqNf8pNP9QJa9QQgFWIQwSRCo1/yg0/1Alr1BCAUVJIQ8MQABWIQ8SRDQBIQUSRDYaAUk1/yOvUCOvUChQNP+ICghJNf1XATE0/SJVTUk1/iEGWzX9NP4hB1s1/DT+VwAgNP00/AgWUDT9FlA0/BZQNP5XMAFQNQdCCb4hCxJENhoBNhoCUDYaA1A1/ycENP9QgVCvUEIAy0khEAxAADBJIREMQAATIRESRCo1/4ABBDT/UCWvUEIAqiEQEkQ2GgE1/4ABBjT/UIFgr1BCAJRJIRIMQABgIRISRDQBIQUSRChkKWRQJwRkUCtkUEk1A1cguDQDV9gIUDQDIRMlWFA0AyEUI1hQNAMhFSNYUDQDIRYjWFA0A4HZAyNYUDQDIRcjWFA0AyEYI1hQNAMhGSNYUDUHQgkDgYW/ynwSRDYaATX/gAEFNP9QQgAYNhoCFzUENhoDNhoBF0khCgxABqYhChJEIQU0ARJENARJIhJMNAISEUQoZClkUCcEZFArZFBJNQNJSkpKSkpKSkpKVwAgNf9XILg1/oHYAVs1/YHgAVs1/IHoAVs1+4HwAVs1+oH4AVs1+YGAAls1+IGIAls194GQAls19oGYAls19SETJVg19IGpA1s18yEZWzXyIRdbNfEhGFs18CEVWzXvIRZbNe4hFFs17YHpAyRYFzXsSTUFNeuABN9Mm5k061CwNOsiVUkhBQxABE9JIRoMQAI4SSEJDEABFCEJEkQ061cBIDXqNOo16TT2MgcMRDTpI69QI69QKFA06YgH/0k151cBMTTnIlVNSTXoIQZbNec06CEHWzXmNOhXACA15TToVzABF0k15EEABjTsREIAADTsNOQQQQAQNPw05zTmCB007Zc140IAAyI14zTjNPIORDTpKCEIr2axIrIBNOeyCCSyEDTpsgezsSKyATTmshIhBLIQNOmyFDT9shGzsSKyATTjsggkshA05bIHs4AIAAAAAAAAGHs04xZQsDTjFjUHJwY06VA05VA05xZQNOYWUDTjFlCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IjTzMgc08jTjCTTxNOcJNPA05gk07zTuMgYyB0IF0Eg061cBgDXqNPkyBwxEMgc0+AxEMQAjr1Ajr1AoUDEAiAbsSTXoVwExNOgiVU1JNekhBls16DTpIQdbNec06VcwARcURDEAKCk06VcAIDToFlA05xZQKVBQZicFNPsWUAM15TIKYDIKeAkWNeSxIrIBIQmyEDT7shiABEh5S0ayGjEAshwnB7IaNOg05wgWsho06rIaszIKYDIKeAk05BcJFrcAPlcEAFA15oAIAAAAAAAAFf805lCwNOZJNeVXCIA15CI05SJbEkSACAAAAAAAABYDNORQsDTkNQeABC8u/ZYxAFA05FCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TTkIjTzMgc08jTxNPA07zToCDTuNOcIMgYyB0IEs0khBAxAAQlINPkyBwxEMgc09wxEMQAjr1Ajr1AoUDEAiAXPSTXpVwExNOkiVU1JNeohBls16TTqIQdbNeg06lcwARdEMQAoKTTqVwAgNOkWUDToFlAoUFBmJwU0+xZQAzXmMgpgMgp4CRY15bEisgEhCbIQNPuyGIAEOY7rqrIaMQCyHCcHshqzMgpgMgp4CTTlFwkWtwA+VwQAUDXngAgAAAAAAAATcjTnULA050k15lcIgDXlIjTmIlsSRIAIAAAAAAAAE3Y05VCwNOU1B4AE1gI9RjEAUDTlULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NOUiNPMyBzTyNPE08DTvNOkJNO406AkyBjIHQgOjSDEAI69QI69QKFAxAIgE0kk16VcBMTTpIlVNSTXqIQZbNek06iEHWzXoNOpXACA15zTqVzABF0k15kEABjTsREIAADTsNOYQQQAQNPw06TToCB007Zc15UIAAyI15TTlNPIORDEAKCEIr2axIrIBNOmyCCSyEDEAsgezsSKyATToshIhBLIQMQCyFDT9shGzsSKyATTlsggkshA057IHs4AIAAAAAAAAESk05RZQsDTlFjUHJwYxAFA051A06RZQNOgWUDTlFlCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0IjTzMgc08jTlCTTxNOkJNPA06Ak07zTuMgYyB0ICo0kkDEABFkkhCgxAALtINOtXATA16jTqIls16TTqI1s16DTpiAPLNOg0/YgD3DTqVxAgNecyBzT6DEQxAIgDo0k15SJVQAAGJDXmQgAGIjXmQgAANOZENOk06AgiDUQxACgpNOc06RZQNOgWUChQUGaACQAAAAAAAA8HAbApNQeABFnRyEExAFA06RZQNOgWUDTnULA0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQiNPMyBzTyNPE06Qg08DToCDTvNO4yBjIHQgHbSDQDgaEDWzTzDkSACAAAAAAAAAztMgcWULAyBxY1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DQDgaADJFgXNPMyBzTyNPE08DTvNO4yBjIHQgGHSDT1MgcMRDTxNPIINeqxIrIBNOqyCCSyEDT/sgezsSKyATTwshIhBLIQNP+yFDT9shGzgAgAAAAAAAAK2zTqFjTwFlBQsDTqFjTwFlA1B4AEo7ziE7A0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQkNPMyByIiIjTvNO4yBjIHQgEGIhJEIRuIAkwiNAESRDQESSISTDQCEhFESTUFSVcAuDX/gbgBWzX+gATVYjRVNP9QNP4WULAhG4gCGrEisgEishIhBLIQMgqyFDT+shGzNP+BsAFbNf00/YgB+TT/gTBbNfw0/yVbNfs0/4GIAVs1+jT/gZABWzX5NP+BmAFbNfg0/4GgAVs19zT/gagBWzX2JwU0/1cICFADNP9XECASRCcFNPwWUAM0/1c4IBJENP0iDUQ0+zT6DEQ0+jT5DEQ0+TT4DEQ0+DT3DEQ09zT2DEQyAzX1MQA0/zT+NP00/DT7NPo0+TT4NPc09jT1SVA09VA09VAiIjIHNP0iIiIiMgYyB0IAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jXtNew16zXqNPZBABuxIrIBIrISIQSyEDIJshUyCrIUNOyyEbNCAJo0+jT7CDXpNPw0/Qg16DTzNP8MNec06jTrUDTsFlA07RZQNO4WUDTvFlA08BZQNPEWUDTyFlA08xZQNPQWUDT1UChQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDTpFlA06BZQNOcWUQcIUChLAVcAf2cpSwFXf39nJwRLAVf+f2crSwGB/QKBbVhnSCEFNQEyBjUCQgAcMRkhGhJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iNQEiNQJC/8NJMRhhQAAFSCEIr4koYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 50,
  stateKeys: 4,
  stateSize: 490,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/algo-govt/index.rsh:213:13:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /home/jay/Dev/scm/bitbucket.jeapostrophe/reach/reach-lang/users/algo-govt/index.rsh:235:13:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v2264",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2265",
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
                "name": "v2264",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v2265",
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
                    "name": "_Admin_delete0_340",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_nop0_340",
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
                    "name": "_Governor_stake0_340",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unstake0_340",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unvote0_340",
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
                    "name": "_Governor_vote0_340",
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
                    "name": "_Other_claimFor0_340",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2680",
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
    "name": "_reach_oe_v2779",
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
    "name": "_reach_oe_v3309",
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
    "name": "_reach_oe_v3847",
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
    "name": "_reach_oe_v4393",
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
    "name": "_reach_oe_v4978",
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
    "name": "_reach_oe_v4982",
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
    "name": "_reach_oe_v5631",
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
    "name": "_reach_oe_v5635",
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
    "name": "_reach_oe_v6267",
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
    "inputs": [],
    "name": "Admin_nop",
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
                    "name": "_Admin_delete0_340",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin_nop0_340",
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
                    "name": "_Governor_stake0_340",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unstake0_340",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Governor_unvote0_340",
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
                    "name": "_Governor_vote0_340",
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
                    "name": "_Other_claimFor0_340",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2680",
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
        "name": "v22624",
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
  Bytecode: `0x608060405260405162004d6c38038062004d6c833981016040819052620000269162000a27565b60008055436003556200003862000553565b7f211793ba7e606607a2c5dc9ec45d4c702e99a97b7297477f7a98d9a94887bc2033836040516200006b92919062000c84565b60405180910390a16020820151516101a001516200008d90341460096200031e565b602080830151516040810151910151620000b7916001600160a01b03918216911614600a6200031e565b6020820151516080810151606090910151620000e3916001600160a01b03918216911614600b6200031e565b6020820151516101a00151620000fd901515600c6200031e565b60208201515161010081015160e0909101516200011d9111600d6200031e565b602082015151610120810151610100909101516200013e9111600e6200031e565b602082015151610140810151610120909101516200015f9111600f6200031e565b6020820151516101608101516101409091015162000180911160106200031e565b60208201515161018081015161016090910151620001a1911160116200031e565b8051600090819052815160209081018290528251604090810183905283516060908101939093528351828501805191909152845181519093019290925283518251909101528251905190910152620001f86200057c565b805133905260208084018051518351830152805182015183516001600160a01b039182166040918201528251516101a09081015186516060908101919091528451518101518751941660809485015284515160e090810151885160a090810191909152865151610100908101518a5160c090810191909152885151610120908101518c51860152895151610140908101518d518501528a515161016001518d518301528a515161018001518d518201528d8c01518c8e01805191909152805160009d018d905280519099018c90528851429701879052995151909601518751909801979097528551909101889052845190950187905283510186905282519093019490945280514394019390935291510152620003158162000348565b50505062000ebc565b81620003445760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200036f604051806060016040528060008152602001600081526020016000151581525090565b816020015160200151156200039657600080805560018190556200034490600290620005a0565b602082015160c081015160a090910151620003b2919062000ccb565b8152602082015161010081015160e090910151620003d1919062000ccb565b602080830191909152820151610140015182516101200151106040820152620003f9620005e2565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190941684860152865160a09081015181870152875160c09081015181880152885160e09081015181890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015260006101808b0181905281518801516101a08c01528151909601516101c08b01528051909801516101e08a0152875190930151610200890152865190910151610220880152855101516102408701529351909301516102608501528451610280850152848201516102a08501528481015115156102c08501526003909255436001559051620005279183910162000d24565b604051602081830303815290604052600290805190602001906200054d929190620006bf565b50505050565b6040518060400160405280620005686200074e565b8152602001620005776200076c565b905290565b6040518060400160405280620005916200079c565b81526020016200057762000819565b508054620005ae9062000e80565b6000825580601f10620005bf575050565b601f016020900490600052602060002090810190620005df91906200087d565b50565b604051806102e0016040528060006001600160a01b031681526020016200060862000894565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001620006686200076c565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b828054620006cd9062000e80565b90600052602060002090601f016020900481019282620006f157600085556200073c565b82601f106200070c57805160ff19168380011785556200073c565b828001600101855582156200073c579182015b828111156200073c5782518255916020019190600101906200071f565b506200074a9291506200087d565b5090565b60405180608001604052806004906020820280368337509192915050565b60405180608001604052806004905b620007856200074e565b8152602001906001900390816200077b5790505090565b60405180610160016040528060006001600160a01b03168152602001620007c262000894565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061016001604052806200082f6200076c565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b808211156200074a57600081556001016200087e565b604051806101c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001620008f86200074e565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200096a576200096a6200092f565b60405290565b6040516101c081016001600160401b03811182821017156200096a576200096a6200092f565b80516001600160a01b0381168114620009ae57600080fd5b919050565b600082601f830112620009c557600080fd5b604051608081016001600160401b0381118282101715620009ea57620009ea6200092f565b60405280608084018581111562000a0057600080fd5b845b8181101562000a1c57805183526020928301920162000a02565b509195945050505050565b600081830361026081121562000a3c57600080fd5b62000a4662000945565b83518152601f19820191506102408083121562000a6257600080fd5b62000a6c62000945565b6102208085121562000a7d57600080fd5b62000a8762000970565b94506020870151855262000a9e6040880162000996565b602086015262000ab16060880162000996565b604086015262000ac46080880162000996565b606086015262000ad760a0880162000996565b608086015260c087015160a086015262000af58860e08901620009b3565b60c08601526101608781015160e0870152610180808901516101008801526101a0808a01516101208901526101c08a01516101408901526101e08a01519288019290925261020089015190870152908701519085015283815262000b5b82870162000996565b60208281019190915283015250949350505050565b8060005b60048110156200054d57815184526020938401939091019060010162000b74565b80518252602081015162000bb460208401826001600160a01b03169052565b50604081015162000bd060408401826001600160a01b03169052565b50606081015162000bec60608401826001600160a01b03169052565b50608081015162000c0860808401826001600160a01b03169052565b5060a081015160a083015260c081015162000c2760c084018262000b70565b5060e0810151610140838101919091526101008201516101608085019190915261012083015161018080860191909152918301516101a080860191909152908301516101c0850152908201516101e0840152015161020090910152565b60006102808201905060018060a01b03808516835283516020840152602084015162000cb560408501825162000b95565b8160208201511661026085015250509392505050565b6000821982111562000ced57634e487b7160e01b600052601160045260246000fd5b500190565b8060005b60048110156200054d5762000d0d84835162000b70565b608093909301926020919091019060010162000cf6565b81516001600160a01b031681526106c08101602083015162000d4a602084018262000b95565b50604083015161024062000d68818501836001600160a01b03169052565b6060850151915061026082818601526080860151925061028062000d96818701856001600160a01b03169052565b60a087015193506102a0848188015260c088015194506102c0858189015260e08901516102e0890152610100890151610300890152610120890151610320890152610140890151610340890152610160890151955062000dfb61036089018762000cf2565b61018089015115156105608901526101a08901516105808901526101c08901516105a08901526101e08901516105c08901526102008901516105e089015261022089015161060089015293880151610620880152918701516106408701528601516106608601528501516106808501529093015115156106a090920191909152919050565b600181811c9082168062000e9557607f821691505b60208210810362000eb657634e487b7160e01b600052602260045260246000fd5b50919050565b613ea08062000ecc6000396000f3fe6080604052600436106100d55760003560e01c80638323075711610079578063b2404ca211610056578063b2404ca2146101ff578063deb906e714610212578063e28dad7d1461027a578063ed985f5a1461028257005b806383230757146101bf578063aa0a6f0d146101d4578063ab53f2c6146101dc57005b80634012e02e116100b25780634012e02e1461015257806340ae00291461017457806358717a6514610197578063795e3eaa146101aa57005b80631e93b0f1146100de578063349cb4dd146101025780633bc5b7bf1461012557005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b610115610110366004613134565b610295565b60405190151581526020016100f9565b34801561013157600080fd5b5061014561014036600461316d565b610306565b6040516100f991906131a0565b34801561015e57600080fd5b5061016761031d565b6040516100f9919061333a565b61017c610473565b604080518251815260209283015192810192909252016100f9565b6100ef6101a536600461316d565b6104cf565b6101b2610530565b6040516100f991906133ca565b3480156101cb57600080fd5b506001546100ef565b6100ef610583565b3480156101e857600080fd5b506101f16105d3565b6040516100f9929190613405565b6101b261020d3660046135ca565b610670565b34801561021e57600080fd5b5061023261022d36600461316d565b6106ce565b6040516100f9919081516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260809182015115159181019190915260a00190565b6100ef61086f565b6100dc6102903660046135e7565b6108bc565b600061029f612a23565b6102a7612a7c565b6102af612a9b565b604080516060808201835289825260208083018a90526001600160a01b03891683850152908401919091526002835281518082019092528282528301526102f682846108e0565b50506040015190505b9392505050565b61030e612b21565b6103178261242d565b92915050565b610325612b40565b6003600054036104645760006002805461033e90613600565b80601f016020809104026020016040519081016040528092919081815260200182805461036a90613600565b80156103b75780601f1061038c576101008083540402835291602001916103b7565b820191906000526020600020905b81548152906001019060200180831161039a57829003601f168201915b50505050508060200190518101906103cf91906137d2565b90506103d9612b9f565b60208083015182515260408084015183516001600160a01b039091169201919091526101608301518251909101526102a0820151815160600152610240820151815160800152610260820151815160a00152610280820151815160c00152610200820151815160e00152610220820151815161010001526101e0909101518151610120015251919050565b61047060006007612525565b90565b604080518082019091526000808252602082015261048f612a23565b610497612a7c565b61049f612a9b565b6000602082810182905290825260408051808301909152828152908301526104c782846108e0565b505051919050565b60006104d9612a23565b6104e1612a7c565b6104e9612a9b565b60408051602080820183526001600160a01b038816825260e084019190915260068352815180820190925282825283015261052482846108e0565b505060c0015192915050565b610538612bb2565b610540612a23565b610548612a7c565b610550612a9b565b600060a0820152600481526040805160208082019092528281529083015261057882846108e0565b505060800151919050565b600061058d612a23565b610595612a7c565b61059d612a9b565b6000604082015260018181905250604080516020808201909252828152908301526105c882846108e0565b505060200151919050565b6000606060005460028080546105e890613600565b80601f016020809104026020016040519081016040528092919081815260200182805461061490613600565b80156106615780601f1061063657610100808354040283529160200191610661565b820191906000526020600020905b81548152906001019060200180831161064457829003601f168201915b50505050509050915091509091565b610678612bb2565b610680612a23565b610688612a7c565b610690612a9b565b604080516020808201835287825260c08401919091526005835281518082019092528282528301526106c282846108e0565b505060a0015192915050565b6106d6612bdf565b60036000540361085e576000600280546106ef90613600565b80601f016020809104026020016040519081016040528092919081815260200182805461071b90613600565b80156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b505050505080602001905181019061078091906137d2565b905061078a612c19565b80516001600160a01b0385169052805160006020909101819052815160400181905281516060015260016107bd8561242d565b5160018111156107cf576107cf61318a565b146107db5780516107e9565b6107e48461242d565b604001515b602080830182815291516040808501516001600160a01b0390921690915291519182015191015161081a9190613941565b604080830180516020908101939093529282018051909201518351820152815101518251606090810191909152905101518151901515608090910152519392505050565b61086a60006008612525565b919050565b6000610879612a23565b610881612a7c565b610889612a9b565b6000608082015260038152604080516020808201909252828152908301526108b182846108e0565b505060600151919050565b6108c4612a23565b6108dc6108d636849003840184613a2f565b826108e0565b5050565b6108f06003600054146036612525565b815161090b90158061090457508251600154145b6037612525565b60008080556002805461091d90613600565b80601f016020809104026020016040519081016040528092919081815260200182805461094990613600565b80156109965780601f1061096b57610100808354040283529160200191610996565b820191906000526020600020905b81548152906001019060200180831161097957829003601f168201915b50505050508060200190518101906109ae91906137d2565b90506109b8612c46565b7f346b047206f2e4b3cac48975b044dcf9663b8ae8f5c00d003d9ef473967c213133856040516109e9929190613b1b565b60405180910390a16000602085015151516006811115610a0b57610a0b61318a565b03610c5157610a1c34156012612525565b610a36610a2f338460400151600061254b565b6013612525565b610a4842836101400151106014612525565b816101e00151826102000151610a5e9190613941565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a98573d6000803e3d6000fd5b50610ab182604001518360000151846102200151612561565b8051602080830180519290925261022084015182518201529051604080518251815291830151928201929092527faab5b24f6b4b1f311e9065d642dd841d38bf4e9f4c82a88010477e16af8ef4f6910160405180910390a1602081015183526040517f6b35f7c1e97402a83b10267c90f56631b6bf6074ce3d27df22f18844b38c7e6890600090a1610b41612d84565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a01518851820152610100808b01518951820152610120808c01518a51820152610140808d01518b518201526101608d0151898c01805191909152805160019a01999099526101c08d01518951909801979097528751429601869052875160009901899052875190940188905286519092019690965261024089015185519096019590955261026088015184519095019490945282514394019390935290510152610c4b8161257a565b50612427565b6001602085015151516006811115610c6b57610c6b61318a565b03610e0d57610c7c34156015612525565b610c96610c8f338460400151600061254b565b6016612525565b610cae826101c00151836101a0015111156017612525565b6040514281527fe7a97fc16a52751c16bf77fc40d6fd93c62887b87e9ca087155daa4e4c174f4f9060200160405180910390a1426020840152610cef612d84565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865182015260c080890151875182015260e0808a01518851820152610100808b01518951820152610120808c01518a51820152610140808d01518b518201526101608d0151898c018051919091526101808e015181519015159a01999099526101c08d015189519098019790975287514296018690526101e08c01518851909901989098526102008b01518751909401939093526102208a015186519092019190915261024089015185519091015261026088015184519091015282514394019390935290510152610c4b8161257a565b6002602085015151516006811115610e2757610e2761318a565b0361118857602084015151606001516040820181905251610e4b9034146018612525565b610e6c610e6533846040015184604001516020015161254b565b6019612525565b610e7d8260a001514210601a612525565b6000610e883361242d565b516001811115610e9a57610e9a61318a565b03610eab5760016060820152610ed5565b6001610eb63361242d565b516001811115610ec857610ec861318a565b03610ed557600060608201525b610ee48160600151601b612525565b604081015160208101519051610f0991600091610f019190613941565b11601c612525565b604081810180518201516080840180516001600160a01b0392831690528251518151602090810191909152925183015181518501528051600060609182018190523381526004808652908690208054600160ff19918216811783559451805186840180546001600160a01b031916919098161790965585870151600283015585880151600383015594909201519101805490931690151517909155825190815291517f4cf744d50660b6ad14b0784a6f1b4ac5db2dcf8c3b6bb319586239d395bed3099281900390910190a1600160408481019190915281810151805160208083015192840151845133815291820192909252928301919091526001600160a01b031660608201527f687a2f1c3b1fe4df86465e9fa402de973c9dfa905e7ff56ebd15470123434efc9060800160405180910390a1611046612d84565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08088015186519091015260e080880151865190910152610100808801518651909101526101208088015186519091015261014080880151865190910152610160870151838601805191909152805160009401939093526101c087015183518301528251429101526101e0860151915190920152820151516102008401516111229190613941565b60208083015160a00191909152604083015101516102208401516111469190613941565b60208201805160c00191909152610240840151815160e001526102608401518151610100015280514361012090910152514261014090910152610c4b8161257a565b60036020850151515160068111156111a2576111a261318a565b0361157c576111b33415601d612525565b6111cd6111c6338460400151600061254b565b601e612525565b60a081018051339052805160006020909101819052815160400181905290516060015260016111fb3361242d565b51600181111561120d5761120d61318a565b1461121c578060a0015161122a565b6112253361242d565b604001515b60c08201819052606001511561124a5761124a826102c00151601f612525565b816102c0015161125b576000611265565b8060c00151606001515b156112ad576102a082015160c0820151604081015160209091015161128a9190613941565b83606001516112999190613be9565b6112a39190613c08565b60e08201526112b5565b600060e08201525b6112cc826101e001518260e0015111156020612525565b336000818152600460208181526040808420805461ffff191681556001810180546001600160a01b03191690556002810185905560038101859055909201805460ff1916905560c08501510151905181156108fc0292818181858888f1935050505015801561133f573d6000803e3d6000fd5b506113578260400151338360c0015160400151612561565b60c08101515160e08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611398573d6000803e3d6000fd5b507f4bae90c67964826cd303dec467a014025c41573ed2acac1a4ebd62b0c607f6808160e001516040516113ce91815260200190565b60405180910390a160e081018051606085015260c082015180516020820151604092830151935192517f1ea20975605dbacd21649897d7aaf8fc7e76549fa091246617143b7ef9f9c2099461145294339493926001600160a01b03958616815293909416602084015260408301919091526060820152608081019190915260a00190565b60405180910390a1611462612d84565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185518201526080808801518651951694019390935260a08087015185519091015260c08087015185519091015260e0808701518551820152610100808801518651909101526101208088015186519091015261014080880151865190910152610160870151838601805191909152805160009401939093526101c08701518351909201919091529051429201919091528201516101e08401516115369190613c2a565b6020808301516080019190915260c0830151015161020084015161155a9190613c2a565b602082015160a0015260c0820151604001516102208401516111469190613c2a565b60046020850151515160068111156115965761159661318a565b03611a87576115a734156021612525565b6115c16115ba338460400151600061254b565b6022612525565b6115d2428360c00151106023612525565b6115e482610100015142106024612525565b61010081018051339052805160006020909101819052815160400181905290516060015260016116133361242d565b5160018111156116255761162561318a565b1461163557806101000151611643565b61163e3361242d565b604001515b61012082018190526060015161165a906025612525565b6101208101805151610140830180516001600160a01b039283169052825160209081015182518201529251604090810151825182015281516000606091820181905233815260048087528382208054600160ff19918216811783559651805197830180546001600160a01b03191698909916979097179097559685015160028801558484015160038801559390910151949092018054909316931515939093179091559083015161170b9030612771565b6117159190613c2a565b610300820152611726600047613c2a565b6102e0820152604080513360248083019190915282518083039091018152604490910182526020810180516001600160e01b031663087cd02560e11b17905260808401519151909160009182916001600160a01b031690829061178a908690613c41565b60006040518083038185875af1925050503d80600081146117c7576040519150601f19603f3d011682016040523d82523d6000602084013e6117cc565b606091505b50915091506117dd8282602761283d565b508361030001516117f2866040015130612771565b6117fc9190613c2a565b610320850181905261181090156026612525565b6102e08401516118209047613c2a565b61016085015152805161183c9082016020908101908301613c5d565b61016085018051602001919091525161018085018190526040517f5d2df207d9578adeeb837e777e5a0e6034704e52395d1d099c4683eaf2e8906a9161188191613c7a565b60405180910390a16101808401515161189c90156028612525565b7fb0ef8f1dc8407535340e5a56f8c19ebce8d32a2c21f64977d88c7acbf6264c6e846101800151602001516040516118d491906133ca565b60405180910390a1610180840180516020908101516080890152905101516040517f3736d8dbcda5389bbda2e1d4f5f1330f82ce1e033c990a2c04a6b9326768e08b9161192391339190613c9d565b60405180910390a1611933612d84565b855181516001600160a01b03918216905260208088015183518201526040808901518451908416908201526060808a015185518201526080808b0151865195169481019490945260a0808b0151865182015260c0808c0151875182015260e0808d0151885190910152610100808d0151885190910152610120808d01518851820152610140808e01518951909101526101808c015186015186890180519190915280516000908801526101c08e01518151909601959095528451429401939093526101e08c01518451909601959095526102008b01518351909101526102208a0151915190930152908601510151610240870151611a319190613c2a565b602082015160e0015261012085015160400151610260870151611a549190613c2a565b602082018051610100019190915280514361012090910152514261014090910152611a7e8161257a565b50505050612427565b6005602085015151516006811115611aa157611aa161318a565b03611fb75760208401515160c001516101a0820152611ac234156029612525565b611adc611ad5338460400151600061254b565b602a612525565b611aed428360c0015110602b612525565b611afe8260e001514210602c612525565b6101c08101805133905280516000602090910181905281516040018190529051606001526001611b2d3361242d565b516001811115611b3f57611b3f61318a565b14611b4f57806101c00151611b5d565b611b583361242d565b604001515b6101e0820181905260600151611b8290611b78576001611b7b565b60005b602d612525565b6101e08101805151610200830180516001600160a01b03928316905282516020908101518251820152925160409081015182518201528151600160609182018190523360009081526004808852848220805460ff19908116851782559651805194820180546001600160a01b0319169590991694909417909755968201516002870155818401516003870155910151939094018054909216921515929092179055830151611c309030612771565b611c3a9190613c2a565b610360820152611c4b600047613c2a565b6103408201526101e08101516040810151602090910151600091636ffa1f8b60e11b913391611c7991613941565b6101a085015151604051611c9293929190602401613cbb565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050905060008084608001516001600160a01b0316600084604051611ce89190613c41565b60006040518083038185875af1925050503d8060008114611d25576040519150601f19603f3d011682016040523d82523d6000602084013e611d2a565b606091505b5091509150611d3b8282602f61283d565b50836103600151611d50866040015130612771565b611d5a9190613c2a565b6103808501819052611d6e9015602e612525565b610340840151611d7e9047613c2a565b610220850151528051611d9a9082016020908101908301613c5d565b61022085018051602001919091525161024085018190526040517fce36ec7adc9346e94d6a8eca7648e78f80f486420cbb1e44182a263a01455b9491611ddf91613c7a565b60405180910390a161024084015151611dfa90156030612525565b7feea004d369ec87a0fae8efbe88380bc8f094e9d77bd20835bffbfa7264020c9284610240015160200151604051611e3291906133ca565b60405180910390a16102408401805160209081015160a0890152905101516040517f213710570734e6367811c4846c8e18e6004df40fd0ed85e7b9923d6c7c44c8fb91611e8191339190613c9d565b60405180910390a1611e91612d84565b855181516001600160a01b03918216905260208088015183518201526040808901518451908416908201526060808a015185518201526080808b0151865195169481019490945260a0808b0151865182015260c0808c0151875182015260e0808d0151885190910152610100808d0151885190910152610120808d0151885190910152610140808d0151885190910152610240808c015186015186890180519190915280516000908801526101c08e01518151909601959095528451429401939093526101e0808d01518551909701969096526102008c01518451909201919091526102208b01519251019190915291870151015190870151611f949190613941565b602082015160e001526101e085015160400151610260870151611a549190613941565b6006602085015151516006811115611fd157611fd161318a565b036124275760208401515160e00151610260820152611ff234156031612525565b61200c612005338460400151600061254b565b6032612525565b61201e42836101200151106033612525565b6102608101805151610280830180516001600160a01b03909216909152805160006020909101819052815160400181905290516060015251516001906120639061242d565b5160018111156120755761207561318a565b146120855780610280015161209a565b610260810151516120959061242d565b604001515b6102a0820181905260600151156120bb576120bb826102c001516034612525565b816102c001516120cc5760006120d7565b806102a00151606001515b1561212457816102a00151816102a0015160400151826102a00151602001516121009190613941565b836060015161210f9190613be9565b6121199190613c08565b6102c082015261212d565b60006102c08201525b612145826101e00151826102c0015111156035612525565b61026081018051516001600160a01b039081166000908152600460208181526040808420805461ffff191681556001810180546001600160a01b03191690556002810185905560038101859055909201805460ff191690559351516102a0860151909401519051939092169282156108fc029291818181858888f193505050501580156121d6573d6000803e3d6000fd5b506121f8826040015182610260015160000151836102a0015160400151612561565b6102a0810151516102c08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561223b573d6000803e3d6000fd5b507f49903ecde413fa6a9ad23ef125185ac1d125e5529434d3fe81a3131e3336f8ad816102c0015160405161227291815260200190565b60405180910390a16102c08101805160c0850152610260820151516102a083015180516020820151604092830151945192517f1ea20975605dbacd21649897d7aaf8fc7e76549fa091246617143b7ef9f9c209956122fe959490916001600160a01b03958616815293909416602084015260408301919091526060820152608081019190915260a00190565b60405180910390a161230e612d84565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185518201526080808801518651951694019390935260a08087015185519091015260c08087015185519091015260e080870151855190910152610100808701518551909101526101208087015185519091015261014080870151855190910152610160860151828501805191909152805160009301929092526101c086015182519091015251429101526102c08201516101e08401516123df9190613c2a565b602080830151608001919091526102a083015101516102008401516124049190613c2a565b602082015160a001526102a0820151604001516102208401516111469190613c2a565b50505050565b612435612b21565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156124645761246461318a565b03612516576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156124a4576124a461318a565b60018111156124b5576124b561318a565b81528154610100900460ff90811615156020808401919091526040805160808101825260018601546001600160a01b031681526002860154928101929092526003850154828201526004909401549091161515606082015291015292915050565b60008082526020820152919050565b816108dc5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061255983853085612878565b949350505050565b61256c838383612952565b61257557600080fd5b505050565b6125a0604051806060016040528060008152602001600081526020016000151581525090565b816020015160200151156125c457600080805560018190556108dc90600290612da4565b602082015160c081015160a0909101516125de9190613941565b8152602082015161010081015160e0909101516125fb9190613941565b602080830191909152820151610140015182516101200151106040820152612621612de1565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015181860152865160809081015190941684860152865160a09081015181870152875160c09081015181880152885160e09081015181890152895161010090810151818a01528a5161012090810151908a01528a5161014090810151908a0152868b018051516101608b015260006101808b0181905281518801516101a08c01528151909601516101c08b01528051909801516101e08a0152875190930151610200890152865190910151610220880152855101516102408701529351909301516102608501528451610280850152848201516102a08501528481015115156102c0850152600390925543600155905161274d91839101613ce0565b60405160208183030381529060405260029080519060200190612427929190612eba565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b1790529151600092839283929187169183916127cc91613c41565b60006040518083038185875af1925050503d8060008114612809576040519150601f19603f3d011682016040523d82523d6000602084013e61280e565b606091505b509150915061281f8282600661283d565b50808060200190518101906128349190613e34565b95945050505050565b6060831561284c5750816102ff565b82511561285c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401612542565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916128df91613c41565b60006040518083038185875af1925050503d806000811461291c576040519150601f19603f3d011682016040523d82523d6000602084013e612921565b606091505b50915091506129328282600161283d565b50808060200190518101906129479190613e4d565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916129b191613c41565b60006040518083038185875af1925050503d80600081146129ee576040519150601f19603f3d011682016040523d82523d6000602084013e6129f3565b606091505b5091509150612a048282600261283d565b5080806020019051810190612a199190613e4d565b9695505050505050565b6040805161012081018252600060e082018181526101008301829052825260208201819052918101829052606081019190915260808101612a62612bb2565b8152602001612a6f612bb2565b8152602001600081525090565b604051806040016040528060008152602001612a96612f3e565b905290565b6040805161010081019091528060008152602001600015158152602001600015158152602001612aee6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b81526000602082018190526040820152606001612b09612f51565b81526040805160208181019092526000815291015290565b6040805160608101825260008082526020820152908101612a96612f64565b604051806101400160405280612b54612f97565b815260006020820152604001612b68612bb2565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280612a96612b40565b60405180608001604052806004905b612bc9612ff5565b815260200190600190039081612bc15790505090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b6040518060600160405280612c2c612f64565b8152602001612c39612f64565b8152602001612a96612bdf565b604051806103a0016040528060008152602001612c76604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260006020820152604001612caa612f64565b8152602001612cb7612f64565b8152602001612cc4612f64565b815260200160008152602001612cd8612f64565b8152602001612ce5612f64565b8152602001612cf2612f64565b8152602001612cff613013565b8152602001612d0c613013565b8152602001612d19612f51565b8152602001612d26612f64565b8152602001612d33612f64565b8152602001612d40612f64565b8152602001612d4d613013565b8152602001612d5a613013565b815260408051602080820183526000825283015201612d77612f64565b8152602001612b68612f64565b6040518060400160405280612d9761302d565b8152602001612a966130a8565b508054612db090613600565b6000825580601f10612dc0575050565b601f016020900490600052602060002090810190612dde919061310a565b50565b604051806102e0016040528060006001600160a01b03168152602001612e05612f97565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001612e63612bb2565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b828054612ec690613600565b90600052602060002090601f016020900481019282612ee85760008555612f2e565b82601f10612f0157805160ff1916838001178555612f2e565b82800160010185558215612f2e579182015b82811115612f2e578251825591602001919060010190612f13565b50612f3a92915061310a565b5090565b6040518060200160405280612a96612a9b565b6040518060200160405280612a96612bb2565b604051806080016040528060006001600160a01b0316815260200160008152602001600081526020016000151581525090565b604051806101c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001612b685b60405180608001604052806004906020820280368337509192915050565b604051806040016040528060008152602001612a96612bb2565b60405180610160016040528060006001600160a01b03168152602001613051612f97565b815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061016001604052806130bc612bb2565b81526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b5b80821115612f3a576000815560010161310b565b6001600160a01b0381168114612dde57600080fd5b60008060006060848603121561314957600080fd5b833592506020840135915060408401356131628161311f565b809150509250925092565b60006020828403121561317f57600080fd5b81356102ff8161311f565b634e487b7160e01b600052602160045260246000fd5b815160c0820190600281106131b7576131b761318a565b825260208381015115158184015260409384015180516001600160a01b031685850152908101516060808501919091529381015160808401529290920151151560a09091015290565b8060005b6004811015612427578151845260209384019390910190600101613204565b80518252602081015161324160208401826001600160a01b03169052565b50604081015161325c60408401826001600160a01b03169052565b50606081015161327760608401826001600160a01b03169052565b50608081015161329260808401826001600160a01b03169052565b5060a081015160a083015260c08101516132af60c0840182613200565b5060e0810151610140838101919091526101008201516101608085019190915261012083015161018080860191909152918301516101a080860191909152908301516101c0850152908201516101e0840152015161020090910152565b8060005b600481101561242757613324848351613200565b6080939093019260209190910190600101613310565b60006105208201905061334e828451613223565b60208301516001600160a01b0316610220830152604083015161337561024084018261330c565b506060830151610440830152608083015161046083015260a083015161048083015260c08301516104a083015260e08301516104c08301526101008301516104e0830152610120909201516105009091015290565b6102008101610317828461330c565b60005b838110156133f45781810151838201526020016133dc565b838111156124275750506000910152565b828152604060208201526000825180604084015261342a8160608501602087016133d9565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff811182821017156134795761347961343f565b60405290565b6040516102e0810167ffffffffffffffff811182821017156134795761347961343f565b6040516020810167ffffffffffffffff811182821017156134795761347961343f565b6040805190810167ffffffffffffffff811182821017156134795761347961343f565b604051610100810167ffffffffffffffff811182821017156134795761347961343f565b6040516080810167ffffffffffffffff811182821017156134795761347961343f565b6000601f838184011261354257600080fd5b61354a61350d565b8061020085018681111561355d57600080fd5b855b818110156135be5787858201126135765760008081fd5b61357e61350d565b80608083018a8111156135915760008081fd5b835b818110156135ab578035845260209384019301613593565b505085525060209093019260800161355f565b50909695505050505050565b600061020082840312156135dd57600080fd5b6102ff8383613530565b600061034082840312156135fa57600080fd5b50919050565b600181811c9082168061361457607f821691505b6020821081036135fa57634e487b7160e01b600052602260045260246000fd5b805161086a8161311f565b600082601f83011261365057600080fd5b61365861350d565b80608084018581111561366a57600080fd5b845b8181101561368457805184526020938401930161366c565b509095945050505050565b600061022082840312156136a257600080fd5b6136aa613455565b9050815181526136bc60208301613634565b60208201526136cd60408301613634565b60408201526136de60608301613634565b60608201526136ef60808301613634565b608082015260a082015160a082015261370b8360c0840161363f565b60c08201526101408083015160e083015261016080840151610100840152610180808501516101208501526101a080860151848601526101c0860151838601526101e086015182860152610200860151818601525050505092915050565b600082601f83011261377a57600080fd5b61378261350d565b8061020084018581111561379557600080fd5b845b81811015613684576137a9878261363f565b8452602090930192608001613797565b8015158114612dde57600080fd5b805161086a816137b9565b60006106c082840312156137e557600080fd5b6137ed61347f565b6137f683613634565b8152613805846020850161368f565b6020820152610240613818818501613634565b6040830152610260808501516060840152610280613837818701613634565b60808501526102a08087015160a08601526102c08088015160c08701526102e088015160e0870152610300880151610100870152610320880151610120870152610340880151610140870152613891896103608a01613769565b6101608701526138a461056089016137c7565b6101808701526105808801516101a08701526105a08801516101c08701526105c08801516101e08701526105e08801516102008701526106008801516102208701526106208801518587015261064088015184870152610660880151838701526106808801518287015261391b6106a089016137c7565b9086015250929695505050505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156139545761395461392b565b500190565b80356007811061086a57600080fd5b803561086a816137b9565b60006060828403121561398557600080fd5b6040516060810181811067ffffffffffffffff821117156139a8576139a861343f565b8060405250809150823581526020830135602082015260408301356139cc8161311f565b6040919091015292915050565b600061020082840312156139ec57600080fd5b6139f46134a3565b9050613a008383613530565b815292915050565b600060208284031215613a1a57600080fd5b613a226134a3565b90508135613a008161311f565b6000818303610340811215613a4357600080fd5b613a4b6134c6565b8335815261032080601f1984011215613a6357600080fd5b613a6b6134a3565b9250613a756134e9565b613a8160208701613959565b8152613a8f60408701613968565b6020820152613aa060608701613968565b6040820152613ab28760808801613973565b6060820152613ac360e08701613968565b6080820152613ad56101008701613968565b60a0820152613ae88761012088016139d9565b60c0820152613af987838801613a08565b60e082015283525060208101919091529392505050565b6108dc82825161330c565b6001600160a01b038316815281516020808301919091528201515180516103608301919060078110613b4f57613b4f61318a565b6040840152602081015180151560608501525060408101518015156080850152506060810151805160a0850152602081015160c085015260408101516001600160a01b031660e08501525060808101518015156101008501525060a08101518015156101208501525060c0810151613bcb610140850182613b10565b5060e0015180516001600160a01b0316610340840152509392505050565b6000816000190483118215151615613c0357613c0361392b565b500290565b600082613c2557634e487b7160e01b600052601260045260246000fd5b500490565b600082821015613c3c57613c3c61392b565b500390565b60008251613c538184602087016133d9565b9190910192915050565b60006102008284031215613c7057600080fd5b6102ff8383613769565b81518152602080830151610220830191613c969084018261330c565b5092915050565b6001600160a01b038316815261022081016102ff602083018461330c565b6001600160a01b0384168152602081018390526102408101612559604083018461330c565b81516001600160a01b031681526106c081016020830151613d046020840182613223565b506040830151610240613d21818501836001600160a01b03169052565b60608501519150610260828186015260808601519250610280613d4e818701856001600160a01b03169052565b60a087015193506102a0848188015260c088015194506102c0858189015260e08901516102e08901526101008901516103008901526101208901516103208901526101408901516103408901526101608901519550613db161036089018761330c565b61018089015115156105608901526101a08901516105808901526101c08901516105a08901526101e08901516105c08901526102008901516105e089015261022089015161060089015293880151610620880152918701516106408701528601516106608601528501516106808501528401518015156106a08501529050613c96565b600060208284031215613e4657600080fd5b5051919050565b600060208284031215613e5f57600080fd5b81516102ff816137b956fea2646970667358221220cd0465edb0f7eefa39a7d04b7c08a96fba10e4aef9db1abc258ec923a6bcc53364736f6c634300080d0033`,
  BytecodeLen: 19820,
  Which: `oD`,
  version: 7,
  views: {
    Info: `Info`,
    accountData: `accountData`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:363:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:148:19:after expr stmt semicolon',
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
  "Admin_nop": Admin_nop,
  "Deployer": Deployer,
  "Governor_stake": Governor_stake,
  "Governor_unstake": Governor_unstake,
  "Governor_unvote": Governor_unvote,
  "Governor_vote": Governor_vote,
  "Other_claimFor": Other_claimFor
  };
export const _APIs = {
  Admin_delete: Admin_delete,
  Admin_nop: Admin_nop,
  Governor_stake: Governor_stake,
  Governor_unstake: Governor_unstake,
  Governor_unvote: Governor_unvote,
  Governor_vote: Governor_vote,
  Other_claimFor: Other_claimFor
  };
