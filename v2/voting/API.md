# Algorand Governance API

This is a draft of how the API will work, from the perspective of governors.

# Phases

The governance application consists of two smart contracts, once controlling the locking and rewards aspect, and the other controlling voting. The governance application runs for a single governance period. We will re-depoly this code anew for each period (thus getting different application-IDs for every period).

The governance application has the phases below. Moving from one phase to the next is done under the control of timestamps, which are set when the application is first deployed.

+ SIGNUP - The initial phase. Governors may add and remove stakes. Move to FUNDED once the signup timestamp has passed.

+ FUNDED - Governors may remove stakes. Move to VOTING once a vote-start timestamp has passed (this happens one or more times). Can also move to CLOSED once period-end timestamp has passed.

+ VOTING - Governors may remove stake (which removes votes) and vote. Move to VOTED once a vote-end timestamp has passed.

+ VOTED - Governors may remove stake (which removes votes). Move back to FUNDED once a vote-finalize timestamp has passed.

+ CLOSED - Governors may claim stakes and rewards.

> Shai: VOTED means that a vote just ended recently but is not finalized yet. FUNDED means that all votes (if any) were finalized. The only difference between VOTING and VOTED is that governors cannot vote in the latter.

# Transaction Specification

Below are the transactions that governors will have to submit to the system in order to participate. The application call transactions will comply with The Algorand Transaction Calling Conventions as specified in [ARC4](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md).

## `OptIn`

Before interacting with the application, an `appl` call transactions to each of the two smart contracts must be sent with the `OptIn` `OnCompletion` field set. (Note that the caller balance must be at least the minimum-balance requirements for both of these smart contracts. It is expected that One Algo will be sufficient.)

## `Governor_commitStake(address?)bool`

A transaction group with two transaction:

- The first is a `pay` txn with an amount of ALGOs to stake, with the application account as the recipient.
- The second is an `appl` call txn, specifying an (optional?) addresses which is the beneficiary address for the rewards (defaulting to the caller).

This may only be called during the SIGNUP phase. If called multiple times, every subsequent call adds to the staked amount and overwrites the beneficiary address (if provided).


## `Governor_vote(sessionVote)bool`

An `appl` txn to the voting application, specifying the session being voted on and the vote.

This may be called in the VOTING phase.

The `sessionVote` type is equivalent to `(uint64, uint64[4][4])`.
The session must match the current session.
Each measure must be voted on and non-measures must be equal to zero.
Each choices must be zero if that choice is not valid for the measure.
The total of each measure's choices must equal the total amount staked.

This may be called multiple times (to revise the vote).

## `governor_withdraw(void)bool`

An `appl` call txn, withdrawing all the committed Algos of that governor from the escrow, and clearing out all local storage. Algos are sent back to the caller. This must include an additional Fee to cover the `pay` inner transaction.

If this transaction is called during the VOTING or VOTED phases, and the governor has voted in the current session, then it makes an inner-transaction call to the voting application to ensure that the governor's vote will automatically be uncounted completely. (In that case, additional Fee must be paid by the caller to cover this additional fee.)

This may be called in any phase, except CLOSED. This transaction is called with `OnCompletion` field set to `CloseOut`.


## `Governor_claimRewards(void)bool`

An `appl` txn, sends via inner transaction the appropriate rewards amount to the beneficiary address that was specified at signup. Also, as for a `governor_withdraw` called by the specified governor, it withdraws all the committed Algos of that governor from the escrow, and clears out its local storage.
Caller must pay Fee also for the two inner transactions.

This can only be called in the CLOSED phase. This transaction is called with `OnCompletion` field set to `CloseOut`.


## `ClearState`

The `Governor_withdraw` and `Governor_stakeClaim` functions use `CloseOut`, so a governor that used either need not call `ClearState` for the staking/rewards application. It can still call `ClearState` for the voting application.

If an `appl` txn is sent with the `ClearState` `OnCompletion` field set before claiming the rewards or withdrawing, the staked ALGOs and their associated rewards will be burned and completely inaccessible.


# Example flows

Consider a governance period with a single voting session, with one measure on the ballot that has two possible answer: No (0) or Yes (1). The application address of the staking/rewards smart contract is denoted below by `AAAA`.

## Basic flow

A governor wanting to commit 99 Algo in this governance period and vote Yes in the voting session, will issue the following transactions:

**SIGNUP phase**

1. `OptIn()` - opt-in to the staking/rewards application
2. `optIn()` - opt-in to the voting application
3. A transaction group consisting of:

   a. `pay` transaction, sending 99 Algos (from anywhere) to `AAAA`

   b. `Governor_commitStake(void)` - call to the staking/rewards smart contract to register these 99 Algos

**VOTING phase**

4. `Governor_vote(sessionVote)` - call to the votign smart contract, with `sessionVote=(0, [[0,99,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])`, and fee of at least `2*MinFee`.

   The first `0` specifies the index of the voting session (1st session=index-0). The `[0,99,0,0]` voting all 99 Algos for the option Yes on the first measure, and all the other measures are undefined and hence have all-0 votes.

**CLOSED phase**

5. `Governor_claimRewards(void)` - call to the staking/rewards smart contract. Results in both the 99 Algos and the appropriate rewards being sent to the governor's address (via two separate transactions), and an opt-out from the governance application.

## Early withdrawal

A governor that wants to withdraw their Algos before the CLOSED phase can send the following transaction (instead of `Governor_claimRewards` above):

5. `Governor_withdraw(void)` - call to the staking/rewards smart contract. Results in the 99 Algos (but no rewards) being sent to the governor's address, and an opt-out from the governance application.

If this is called during the VOTING or VOTED phases, then the fees must be set at at least `3*MinFee`. If called during SIGNUP or FUNDED phases then the fee must be set at at least `2*MinFee`.

## Incremental commitment

Instead of sending just a single instance of the transaction group `3`, a governor address can send many of them. For example first it sends a group with a 99-Algo `pay` transaction, and then another group (from the same sender of the `appl` call) with a 17-Algo pay. The result is that stake committed by that governor is `99+17=116` Algos, and so a vote by that governor will have weight of 116 Algos and the rewards will be propositionally larger.

Observe that there is no direct way to decrease the committed amount. A governor that wants to decrease the amount must `withdraw` from the application and then opt-in and commit-stake again.

## Proportional voting

Rather that voting all their stake on one option, a governor can split it and vote fraction of the stake to each option. In the voting session above, a governor that committed 116 Algos can set `sessionVote=(0, [[55,61,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])`, voting 55 Algos for No nad 61 Algos for Yes.
