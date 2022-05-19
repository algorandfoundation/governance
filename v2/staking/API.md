# Algorand Governance System

This document describes the new Algorand governance system.

## General architecture

For each period of governance, a fresh set of two applications are launched:

1. A voting application is created.

2. A staking application is created.

Users almost never interact with the voting application directly, although it provides read-only access to the status of the vote.

## Common terms and definitions

* Period --- One complete cycle of staking, voting, and rewarding.

* Beneficiary --- An account that receives the stake and reward for participating in governance.

* `MaxMeasures` --- The largest number of measures supported.
  Presently, `4`.

* `MaxChoices` --- The largest number of choices per measure supported.
  Presently, `4`.

* Vote -- A two-dimension array of `uint64` values of size `MaxMeasures x MaxChoices`

* Deadline --- A `uint64` representing a UNIX timestamp which is compared to
the round timestamp on-chain.
  (Round timestamps do not correspond to actual time in the presence of network downtime.)

* pALGO --- An ASA that can be used for staking.

## Voting application

The API of the voting application is documented elsewhere:

https://github.com/blockshake-io/afgov

## Staking application

### Parameters

The staking application is initialized with the following parameters:

- `stakeToken` --- An ASA id naming a token that may be used to stake with instead of ALGOs.
  These are referred to as pALGOs.

- `stakePeriod` --- A structure with the following fields:

  - `period` --- A `uint64` indicating which period this application is for.

  - `voteManager` --- A `uint64` indicating the application ID of the voting application.

  - `voteManagerAddr` --- The address corresponding to the `voteManager`.
  This is not used, but included for completeness.

  - `measures` --- A `uint64` indicating the number of measures in this period.
  Must be less than or equal to `MaxMeasures`.

  - `choicesPerMeasure` --- An array of `MaxMeasures` `uint64` values indicating the number of choices in each measure.

  - `deadline1_signupEnd` --- A deadline after which no governors may stake.

  - `deadline2_voteStart` --- A deadline before which no governors may vote.

  - `deadline3_voteEnd` --- A deadline after which no governors may vote.

  - `deadline4_voteFinal` --- A deadline after which no governors may unvote.

  - `deadline5_rewardStart` --- A deadline before which no governors may claim rewards.

  - `deadline6_delete` --- A deadline before which the application may not be deleted and after which all rewards (and stake) are forfeited to the creator of the staking application (i.e. the Algorand Foundation).

  - `totalReward` --- A `uint64` representing the total reward, in uALGO, for the period.

### Methods

#### Create

The application is created by providing the two parameters and paying the `totalReward`.

#### OptIn

Governors must opt-in to the staking application before interacting with it.
They do this by sending a bare `OptIn` transaction.

#### `Governor_stake(n:uint64, t:uint64, b:address)byte`

This method creates a staking position before `deadline1_signupEnd`.

This method must be called as the third transaction in a group where the first is `pay` txn of `n` ALGOs to the staking application's account, the second a `axfer` txn of `t` pALGOs.
The `b` value is the beneficiary of the stake.

#### `Governor_unstake()uint64`

This method withdraws the caller's staking position.

This method must be called with three extra fees to allow the staking application to transfer the stake to the governor and the reward to the beneficiary.
This method with the beneficiary in the `Accounts` array.

If called after `deadline5_rewardStart` and the governor voted, then the transfer will include the reward.

Returns the reward amount.

#### `Governor_vote(v:Vote)Vote`

This method casts a vote based on the caller's staking position after `deadline2_voteStart` and before `deadline3_voteEnd`.

This method must be called with an extra fee to allow the staking application to call the voting application.
This method must be called with `voteManager` in the `Apps` array.
The caller must not have an active vote.

Returns the new vote.

#### `Governor_unvote()Vote`

This method uncasts a vote after `deadline2_voteStart` and before `deadline4_voteFinal`.

This method must be called with an extra fee to allow the staking application to call the voting application.
This method must be called with `voteManager` in the `Apps` array.
The caller must have an active vote.

#### `Other_claimFor(g:address)uint64`

This method reclaims the staking position of the governor `g`, and any rewards they've earned.

This may only be called after `deadline5_rewardStart`.

This method must be called with three extra fees to allow the staking application to transfer the stake to the governor and the rewards to the designated beneficiary, set when the stake position was established.
This method must be called with `g` and the beneficiary in the `Accounts` array.

#### ClearState

Governors may clear state after they are done interacting with it.
If they do this before they claim their rewards, then their stake and rewards are forfeit.

### Administrative transitions

The application relies on someone to call functions to transition it to the next state.
It is assumed the Creator (i.e. Algorand Foundation) will call these, but anyone can.

#### `Admin_nop()uint64`

May be called anytime to record the time in the contract state.

This function never needs to be called and is included for testing.

#### `Admin_delete()(uint64,uint64)`

Called after `deadline6_delete` to delete the application.

This method must be given four extra fees to close out the various accounts used by the application.
This method must be called with `OnCompletion` set to `DeleteApplication`.

### Views

The application provides read-only methods to view information about its state.

#### `Info()Info`

Returns a structure with the following fields:
- `stakePeriod:StakePeriod` --- The `stakePeriod` parameter.
- `stakeToken:Token` --- The `stakeToken` parameter.
- `currentVote:Vote` --- The current vote.
- `rewardedStake:uint64` --- The amount of stake counted for rewards.
- `rewardedStakeN:uint64` --- The amount of stake counted for rewards in ALGO.
- `rewardedStakeT:uint64` --- The amount of stake counted for rewards in pALGO.
- `remainingStake:uint64` --- The amount of stake remaining.
- `remainingStakeN:uint64` --- The amount of stake remaining in ALGO.
- `remainingStakeT:uint64` --- The amount of stake remaining in pALGO.
- `remainingReward:uint64` --- The amount of reward remaining.

#### `accountData(g:address)AccountDataP`

Returns information about the governor's staking position:
- `stakeN` --- A `uint64` for how many ALGOs they staked.
- `stakeT` --- A `uint64` for how many pALGOs they staked.
- `bene` --- An `address` naming their beneficiary
- `voted` --- A `byte` which is `1` when they have an active vote and `0` otherwise.
- `stake` --- The sum of `stakeN` and `stakeT`.

This must be called with `g` in the `Accounts` array.

### Events

The application emits events when certain actions occur.

#### `stake(g:address, stakeN:uint64, stakeT:uint64, bene:address)`

Emitted when a governor signs up.

#### `unstake(g:address, bene:address, stakeN:uint64, stakeT:uint64, reward:uint64)`

Emitted when a governor withdraws.

#### `vote(g:address, t:Vote)`

Emitted when governor `g` casts a vote and the tally becomes `t`.

#### `unvote(g:address, t:Vote)`

Emitted when governor `g` removes their vote the tally becomes `t`.

#### `deleted()`

Emitted when the application is deleted.

