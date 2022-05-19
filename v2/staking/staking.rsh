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
const nowReal = thisConsensusSecs;
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
    Admin_nop: Fun([], UInt),
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
    done, pnow, lnow,
    currentVote,
    rewardedStakeN, rewardedStakeT,
    remainingStakeN, remainingStakeT, remainingReward
  } =
    parallelReduce({
      done: false, pnow: nowReal(), lnow: 0,
      currentVote: vote0,
      rewardedStakeN: 0,
      rewardedStakeT: 0,
      remainingStakeN: 0,
      remainingStakeT: 0,
      remainingReward: totalReward,
    })
    .define(() => {
      const now = (p) => p ? pnow : nowReal();
      const before = (p, x) => now(p) < x;
      const after = (p, x) => x < now(p);

      const remainingStake = remainingStakeN + remainingStakeT;
      const rewardedStake = rewardedStakeN + rewardedStakeT;
      V.Info.set(() => InfoStruct.fromObject({
        stakePeriod, stakeToken,
        currentVote,
        rewardedStake, rewardedStakeN, rewardedStakeT,
        remainingStake, remainingStakeN, remainingStakeT,
        remainingReward,
      }));

      const rewardsStarted = after(false, deadline5_rewardStart);
      const remainingToRewarded = (cmp) => (
        true
        // There is no relationship between remaining and rewarded, because
        // anyone can vote or not
        //&& cmp(remainingStakeN, rewardedStakeN)
        //&& cmp(remainingStakeT, rewardedStakeT)
        && cmp(remainingReward, totalReward)
      );

      const doGovernor_stake = (gov, p, stakeN, stakeT, bene) => {
        check(before(p, deadline1_signupEnd), "b signupEnd");
        check(isNone(AccM[gov]), "unstaked");
        const stake = stakeN + stakeT;
        // This is not needed for correctness, but it is helpful so that people
        // don't waste fees trying to unstake or get claims when they have no
        // stake.
        check(stake > 0, "positive stake");
        return (k) => {
          AccM[gov] = { stakeN, stakeT, bene, voted: false };
          k(true);
          Notify.stake(gov, stakeN, stakeT, bene);
          return {
            done: false, pnow: nowReal(), lnow: pnow,
            currentVote,
            rewardedStakeN, rewardedStakeT,
            remainingStakeN: remainingStakeN + stakeN,
            remainingStakeT: remainingStakeT + stakeT,
            remainingReward,
          };
        };
      };
      const doGovernor_vote = (gov, p, vote) => {
        check(after(p, deadline2_voteStart), "a voteStart");
        check(before(p, deadline3_voteEnd), "b voteEnd");
        const { stakeN, stakeT, stake, voted } = accGet(gov);
        check(! voted, "hasn't voted yet");
        return (k) => {
          accUpd(gov, (_) => ({ voted: true }));
          const voten = voteManager.Staking_vote.ALGO({
            addressToAccount: true,
          })(gov, stake, vote);
          k(voten);
          Notify.vote(gov, voten);
          return {
            done: false, pnow: nowReal(), lnow: pnow,
            currentVote: voten,
            rewardedStakeN: rewardedStakeN + stakeN,
            rewardedStakeT: rewardedStakeT + stakeT,
            remainingStakeN, remainingStakeT,
            remainingReward,
          };
        };
      };
      const doGovernor_unvote = (gov, p) => {
        check(after(p, deadline2_voteStart), "a voteStart");
        check(before(p, deadline4_voteFinal), "b voteFinal");
        const { stakeN, stakeT, voted } = accGet(gov);
        check(voted, "has voted already");
        return (k) => {
          accUpd(gov, (_) => ({ voted: false }));
          const voten = voteManager.Staking_withdraw.ALGO({
            addressToAccount: true,
          })(gov);
          k(voten);
          Notify.unvote(gov, voten);
          return {
            done: false, pnow: nowReal(), lnow: pnow,
            currentVote: voten,
            rewardedStakeN: rewardedStakeN - stakeN,
            rewardedStakeT: rewardedStakeT - stakeT,
            remainingStakeN, remainingStakeT,
            remainingReward,
          };
        };
      };
      const doUnstake = (p, gov) => {
        void p;
        const { stake, stakeN, stakeT, voted, bene } = accGet(gov);
        if ( voted ) {
          check(rewardsStarted, "a rewardStart");
        }
        assert(stake <= remainingStake, "stake is portion of stake");
        const shouldReward = rewardsStarted && voted;
        const reward = (() => { if (shouldReward) { return muldiv(totalReward, stake, rewardedStake); } else { return 0; } })();
        (hardTheorem ? assert : check)(reward <= remainingReward, "reward is portion of reward");
        return (k) => {
          delete AccM[gov];
          transfer([
            stakeN,
            [ stakeT, stakeToken ]
          ]).to(gov);
          transfer(reward).to(bene);
          k(reward);
          Notify.unstake(gov, bene, stakeN, stakeT, reward);
          return {
            done: false, pnow: nowReal(), lnow: pnow,
            currentVote,
            rewardedStakeN, rewardedStakeT,
            remainingStakeN: remainingStakeN - stakeN,
            remainingStakeT: remainingStakeT - stakeT,
            remainingReward: remainingReward - reward,
          };
        };
      };
      const doGovernor_unstake = (gov, p) => {
        return doUnstake(p, gov);
      };
      const doOther_claimFor = (who, p, gov) => {
        void who;
        check(after(p, deadline5_rewardStart), "a rewardStart");
        return doUnstake(p, gov);
      };
      const doAdmin_delete = (who, p) => {
        void who;
        check(after(p, deadline6_delete), "a delete");
        return (k) => {
          const rN = remainingStakeN + remainingReward;
          const rT = remainingStakeT;
          transfer([ rN, [ rT, stakeToken ] ]).to(Deployer);
          k([rN, rT]);
          Notify.deleted();
          return {
            done: true, pnow: nowReal(), lnow: pnow,
            currentVote, rewardedStakeN, rewardedStakeT,
            remainingStakeN: 0,
            remainingStakeT: 0,
            remainingReward: 0,
          };
        };
      };
      const doAdmin_nop = (who, p) => {
        void who; void p;
        check(lnow <= pnow);
        const pnowp = nowReal();
        return (k) => {
          k(pnowp);
          return {
            done, pnow: pnowp, lnow: pnow,
            currentVote,
            rewardedStakeN, rewardedStakeT,
            remainingStakeN, remainingStakeT,
            remainingReward,
          };
        };
      };
    })
    .invariant(implies(done, remainingReward == 0), "no reward when done")
    .invariant(balance() == remainingStakeN + remainingReward, "balance is stakeN + reward")
    .invariant(remainingStakeN == (done ? 0 : totalStakeN()), "stakeN is 0 when done")
    .invariant(balance(stakeToken) == remainingStakeT, "balance of token is stakeT")
    .invariant(remainingStakeT == (done ? 0 : totalStakeT()), "stakeT is 0 when done")
    .invariant(implies(! done, (rewardsStarted ? remainingToRewarded(le) : remainingToRewarded(eq))), "remaining to reward")
    // I would like this to be an =, but there could be an indivisible amount
    // of reward; we could compute what that will be and move the transfer after
    // this before it. This is a very expensive theorem to check. It is true, 
    // but I disable it during development.
    .invariant((hardTheorem ? implies((! done && rewardedStake > 0),
        remainingReward >= muldiv(totalReward, remainingStake, rewardedStake)
      ) : remainingReward <= totalReward), "hard theorem")
    .while( ! done )
    .paySpec([stakeToken])
    .api(P.Governor_stake,
      (stakeN, stakeT, bene) => { const _ = doGovernor_stake(this, true, stakeN, stakeT, bene); },
      (stakeN, stakeT, _) => [ stakeN, [ stakeT, stakeToken ]],
      (stakeN, stakeT, bene, ret) => doGovernor_stake(this, false, stakeN, stakeT, bene)(ret))
    .api(P.Governor_vote,
      (vote) => { const _ = doGovernor_vote(this, true, vote); },
      (_) => [ 0, [0, stakeToken] ],
      (vote, ret) => doGovernor_vote(this, false, vote)(ret))
    .api(P.Governor_unvote,
      () => { const _ = doGovernor_unvote(this, true); },
      () => [ 0, [0, stakeToken] ],
      (ret) => doGovernor_unvote(this, false)(ret))
    .api(P.Governor_unstake,
      () => { const _ = doGovernor_unstake(this, true); },
      () => [ 0, [0, stakeToken] ],
      (ret) => doGovernor_unstake(this, false)(ret))
    .api(P.Other_claimFor,
      (who) => { const _ = doOther_claimFor(this, true, who); },
      (_) => [ 0, [0, stakeToken] ],
      (who, ret) => doOther_claimFor(this, false, who)(ret))
    .api(P.Admin_delete,
      () => { const _ = doAdmin_delete(this, true); },
      () => [ 0, [0, stakeToken] ],
      (ret) => doAdmin_delete(this, false)(ret))
    .api(P.Admin_nop,
      () => { const _ = doAdmin_nop(this, true); },
      () => [ 0, [0, stakeToken] ],
      (ret) => doAdmin_nop(this, false)(ret))
    .timeout(false);
  commit();
  exit();
});
