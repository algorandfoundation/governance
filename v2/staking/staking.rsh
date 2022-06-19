'reach 0.1';
'use strict';

const hardTheorem = false;

const sumf = (m, f) => m.reduce(0, (acc, e) => acc + f(e));
const MaxMeasures = 4;
const MaxChoices = 4;
const Vote = Array(Array(UInt, MaxChoices), MaxMeasures);
const choices0 = Array.replicate(MaxChoices, 0);
const vote0 = Array.replicate(MaxMeasures, choices0);
const Deadline = UInt;
const now = thisConsensusSecs;
const MAddress = Maybe(Address);

export const main = Reach.App(() => {
  // Periods
  const StakePeriod = Struct([
    ['period', UInt],
    ['consManager', Contract],
    ['consManagerAddr', Address],
    ['voteManager', Contract],
    ['voteManagerAddr', Address],
    ['measures', UInt],
    ['choicesPerMeasure', Array(UInt, MaxMeasures)],
    ['deadline1_signupEnd', Deadline],
    ['deadline2_voteStart', Deadline],
    ['deadline3_voteEnd', Deadline],
    ['deadline4_voteFinal', Deadline],
    ['deadline5_rewardStart', Deadline],
    ['deadline6_delete', Deadline],
    ['totalReward', UInt],
  ]);
  const stakePeriodValid = ({ totalReward, consManager, consManagerAddr, voteManager, voteManagerAddr,deadline1_signupEnd, deadline2_voteStart, deadline3_voteEnd, deadline4_voteFinal, deadline5_rewardStart, deadline6_delete }) => {
    check(Contract.addressEq(consManager, consManagerAddr), "consManager");
    check(Contract.addressEq(voteManager, voteManagerAddr), "voteManager");
    check(totalReward > 0, "totalReward")
    check(deadline1_signupEnd < deadline2_voteStart, "voteStart");
    check(deadline2_voteStart < deadline3_voteEnd, "voteEnd");
    check(deadline3_voteEnd < deadline4_voteFinal, "voteFinal");
    check(deadline4_voteFinal < deadline5_rewardStart, "rewardStart");
    check(deadline5_rewardStart < deadline6_delete, "delete");
  };
  // Accounts
  const AccountData = Object({
    stakeN: UInt,
    stakeT: UInt,
    bene: Address,
    voted: Bool,
  });
  const AccountDatap = Struct([
    ["bene", Address],
    ["stake", UInt],
    ["stakeN", UInt],
    ["stakeT", UInt],
    ["voted", Bool],
  ]);
  const accountData0 = (who) => ({
    stakeN: 0,
    stakeT: 0,
    bene: who,
    voted: false,
  });
  // Roles
  const Deployer = Participant('Deployer', {
    stakePeriod: StakePeriod,
    stakeToken: Token,
    ready: Fun([Tuple(Contract, Address)], Null),
  });
  const P = API({
    // When a Governor stakes, they can optionally set a beneficiary
    Governor_stake: Fun([UInt, UInt, Address], Bool),
    // When a Governor is unstaking, they can assign a new beneficiary
    Governor_unstake: Fun([], UInt),
    Governor_vote: Fun([Vote], Vote),
    Governor_unvote: Fun([], Vote),
    Other_claimFor: Fun([Address], UInt),
    // Although these functions are prefixed "Admin", we do NOT restrict who
    // can do them. Anyone could volunteer to do it if they'd like.
    Admin_delete: Fun([], Tuple(UInt, UInt)),
  });
  const InfoStruct = Struct([
    ['stakePeriod', StakePeriod],
    ['stakeToken', Token],
    ['currentVote', Vote],
    ['rewardedStake', UInt],
    ['rewardedStakeN', UInt],
    ['rewardedStakeT', UInt],
    ['remainingStake', UInt],
    ['remainingStakeN', UInt],
    ['remainingStakeT', UInt],
    ['remainingReward', UInt],
  ]);
  const V = View({
    Info: Fun([], InfoStruct),
    accountData: Fun([Address], AccountDatap),
  });
  const Notify = Events({
    stake: [Address, UInt, UInt, Address],
    unstake: [Address, Address, UInt, UInt, UInt],
    vote: [Address, Vote],
    unvote: [Address, Vote],
    deleted: [],
  });
  // By using local state, the governor can clear their state and forfeit their
  // stake and reward; that stake can never be taken out by anyone.
  setOptions({ untrustworthyMaps: false });
  init();
  Deployer.only(() => {
    const stakePeriod = declassify(interact.stakePeriod);
    stakePeriodValid(stakePeriod);
    const stakeToken = declassify(interact.stakeToken);
  });
  Deployer.publish(stakePeriod, stakeToken)
    .pay(stakePeriod.totalReward);
  Deployer.interact.ready([getContract(), getAddress()]);
  stakePeriodValid(stakePeriod);
  const { totalReward, deadline1_signupEnd, deadline2_voteStart, deadline3_voteEnd, deadline4_voteFinal, deadline5_rewardStart, deadline6_delete } = stakePeriod;
  const voteManager = remote(stakePeriod.voteManager, {
    Staking_vote: Fun([Address, UInt, Vote], Vote),
    Staking_withdraw: Fun([Address], Vote),
  });
  const AccM = new Map(AccountData);
  const accGet = (who) => {
    const adp = fromSome(AccM[who], accountData0(who));
    const { stakeN, stakeT } = adp;
    const stake = stakeN + stakeT;
    return { ...adp, stake };
  };
  V.accountData.set((who) => AccountDatap.fromObject(accGet(who)));
  const accUpd = (who, f) => {
    const old = accGet(who);
    const { bene, stakeN, stakeT, voted } = old;
    AccM[who] = {
      bene, stakeN, stakeT, voted,
      ...f(old)
    };
  };
  const totalStakeN = () => sumf(AccM, (ad) => ad.stakeN);
  const totalStakeT = () => sumf(AccM, (ad) => ad.stakeT);
  const {
    done, currentVote,
    rewardedStakeN, rewardedStakeT,
    remainingStakeN, remainingStakeT, remainingReward
  } =
    parallelReduce({
      done: false,
      currentVote: vote0,
      rewardedStakeN: 0,
      rewardedStakeT: 0,
      remainingStakeN: 0,
      remainingStakeT: 0,
      remainingReward: totalReward,
    })
    .define(() => {
      const before = (x) => now() < x;
      const after = (x) => x < now();

      const remainingStake = remainingStakeN + remainingStakeT;
      const rewardedStake = rewardedStakeN + rewardedStakeT;
      V.Info.set(() => InfoStruct.fromObject({
        stakePeriod, stakeToken,
        currentVote,
        rewardedStake, rewardedStakeN, rewardedStakeT,
        remainingStake, remainingStakeN, remainingStakeT,
        remainingReward,
      }));

      const getRewardsStarted = () => after(deadline5_rewardStart);
      const remainingToRewarded = (cmp) => (
        true
        // There is no relationship between remaining and rewarded, because
        // anyone can vote or not
        //&& cmp(remainingStakeN, rewardedStakeN)
        //&& cmp(remainingStakeT, rewardedStakeT)
        && cmp(remainingReward, totalReward)
      );
    })
    .invariant(implies(done, remainingReward == 0), "no reward when done")
    .invariant(balance() == remainingStakeN + remainingReward, "balance is stakeN + reward")
    .invariant(remainingStakeN == (done ? 0 : totalStakeN()), "stakeN is 0 when done")
    .invariant(balance(stakeToken) == remainingStakeT, "balance of token is stakeT")
    .invariant(remainingStakeT == (done ? 0 : totalStakeT()), "stakeT is 0 when done")
    .invariant(implies(! done, (getRewardsStarted() ? remainingToRewarded(le) : remainingToRewarded(eq))), "remaining to reward")
    // I would like this to be an =, but there could be an indivisible amount
    // of reward; we could compute what that will be and move the transfer after
    // this before it. This is a very expensive theorem to check. It is true, 
    // but I disable it during development.
    .invariant((hardTheorem ? implies((! done && rewardedStake > 0),
        remainingReward >= muldiv(totalReward, remainingStake, rewardedStake)
      ) : remainingReward <= totalReward), "hard theorem")
    .while( ! done )
    .paySpec([stakeToken])
    .api_(P.Governor_stake, (stakeN, stakeT, bene) => {
      const gov = this;
      check(isNone(AccM[gov]), "unstaked");
      const stake = stakeN + stakeT;
      // This is not needed for correctness, but it is helpful so that people
      // don't waste fees trying to unstake or get claims when they have no
      // stake.
      check(stake > 0, "positive stake");
      return [ [ stakeN, [ stakeT, stakeToken ]], (k) => {
        checked(before(deadline1_signupEnd), "b signupEnd");
        AccM[gov] = { stakeN, stakeT, bene, voted: false };
        k(true);
        Notify.stake(gov, stakeN, stakeT, bene);
        return {
          done: false, currentVote,
          rewardedStakeN, rewardedStakeT,
          remainingStakeN: remainingStakeN + stakeN,
          remainingStakeT: remainingStakeT + stakeT,
          remainingReward,
        };
      }];
    })
    .api_(P.Governor_vote, (vote) => {
      const gov = this;
      const { stakeN, stakeT, stake, voted } = accGet(gov);
      check(! voted, "hasn't voted yet");
      return [ [ 0, [0, stakeToken] ], (k) => {
        checked(after(deadline2_voteStart), "a voteStart");
        checked(before(deadline3_voteEnd), "b voteEnd");
        accUpd(gov, (_) => ({ voted: true }));
        const voten = voteManager.Staking_vote.ALGO({
          addressToAccount: true,
        })(gov, stake, vote);
        k(voten);
        Notify.vote(gov, voten);
        return {
          done: false, currentVote: voten,
          rewardedStakeN: rewardedStakeN + stakeN,
          rewardedStakeT: rewardedStakeT + stakeT,
          remainingStakeN, remainingStakeT,
          remainingReward,
        };
      }];
    })
    .api_(P.Governor_unvote, () => {
      const gov = this;
      const { stakeN, stakeT, voted } = accGet(gov);
      check(voted, "has voted already");
      return [ [ 0, [0, stakeToken] ], (k) => {
        checked(after(deadline2_voteStart), "a voteStart");
        checked(before(deadline4_voteFinal), "b voteFinal");
        accUpd(gov, (_) => ({ voted: false }));
        const voten = voteManager.Staking_withdraw.ALGO({
          addressToAccount: true,
        })(gov);
        k(voten);
        Notify.unvote(gov, voten);
        return {
          done: false, currentVote: voten,
          rewardedStakeN: rewardedStakeN - stakeN,
          rewardedStakeT: rewardedStakeT - stakeT,
          remainingStakeN, remainingStakeT,
          remainingReward,
        };
      }];
    })
    .define(() => {
      const doUnstake = (gov) => {
        const { stake, stakeN, stakeT, voted, bene } = accGet(gov);
        assert(stake <= remainingStake, "stake is portion of stake");
        return [ [0, [0, stakeToken]], (k) => {
          const rewardsStarted = getRewardsStarted();
          const shouldReward = rewardsStarted && voted;
          const reward = (() => { if (shouldReward) { return muldiv(totalReward, stake, rewardedStake); } else { return 0; } })();
          (hardTheorem ? assert : checked)(reward <= remainingReward, "reward is portion of reward");
          checked(implies(voted, rewardsStarted), "a rewardStart");
          delete AccM[gov];
          transfer([
            stakeN,
            [ stakeT, stakeToken ]
          ]).to(gov);
          transfer(reward).to(bene);
          k(reward);
          Notify.unstake(gov, bene, stakeN, stakeT, reward);
          return {
            done: false, currentVote,
            rewardedStakeN, rewardedStakeT,
            remainingStakeN: remainingStakeN - stakeN,
            remainingStakeT: remainingStakeT - stakeT,
            remainingReward: remainingReward - reward,
          };
        }];
      };
    })
    .api_(P.Governor_unstake, () => {
      const [ pay, doAfter ] = doUnstake(this);
      return [ pay, (k) => {
        return doAfter(k);
      }]
    })
    .api_(P.Other_claimFor, (gov) => {
      const [ pay, doAfter ] = doUnstake(gov);
      return [ pay, (k) => {
        checked(after(deadline5_rewardStart), "a rewardStart");
        return doAfter(k);
      }]
    })
    .api_(P.Admin_delete, () => {
      const who = this;
      void who;
      return [ [ 0, [0, stakeToken] ], (k) => {
        checked(after(deadline6_delete), "a delete");
        const rN = remainingStakeN + remainingReward;
        const rT = remainingStakeT;
        transfer([ rN, [ rT, stakeToken ] ]).to(Deployer);
        k([rN, rT]);
        Notify.deleted();
        return {
          done: true, currentVote,
          rewardedStakeN, rewardedStakeT,
          remainingStakeN: 0,
          remainingStakeT: 0,
          remainingReward: 0,
        };
      }];
    })
    .timeout(false);
  commit();
  exit();
});
