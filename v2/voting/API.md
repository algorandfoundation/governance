# Algorand Governance Voting

## Introduction

This app is a subsystem of Algorand governance. It is implemented as a PyTEAL
smart contract that handles the voting part of governance. It is primarily
intended to be used from the staking subsystem but some functions can also be
called directly.

#### Governance Period

A year has four governance periods, each three months in length.

#### Voting Session

Each governance period has exactly one voting session. Each voting session can
have 1-4 measures, with each having 2-4 options.

#### Governor

Participants in governance are called governors. To become a governor one has
to soft-stake ALGO in the governance staking application.

#### Governance Rewards

A governor who votes and soft-stakes until the FINALIZED phase receives rewards
for participating in governance.

#### Soft-Staking

Governors commit a certain amount of Algo to weigh their vote. To have their
vote counted (and become eligible for rewards), this stake has to stay
committed until FINALIZED. Any premature withdrawal is possible but invalidates
the governors vote and eligibility for rewards.

#### Staking Application

One of two smart contracts that implements governance. The staking application
is primarily an escrow contract holding the governors' funds for the duration
of the governance period. It also drives the voting process.

#### Voting Application

The subject of this document. One of two smart contracts that implements
governance. The voting application is responsible for tallying the votes of
eligible governors.

#### Temporary Hard-Staking

The staking and voting applications are designed to allow withdrawal from
governance at any time. Nonetheless, one edge-case exists that will cause a
temporary lock on the stake. It is caused by a governor accidentally forcing a
withdrawal (closeout/clearstate) from the voting app without withdrawing from
the staking app first. This hard-lock only occurs after having voted and lasts
until the FINALIZED phase.


## Governance Phases

Each governance period goes through a predefined set of phases. A period begins
with deploying the staking and voting app, then letting them know the other's
ID and address. At this point the voting app is INITIALIZED.

The voting app will then have to be configured for the voting session. This
will make the app CONFIGURED. Any phase transition thereafter is by timestamp.

![phases_img](res/afgov_voting_phases.png)


## Global and Local State

### Global State

The app stores seven integers (type `uint64`) and three byte slices (type
`bytes`) in its global storage.

- `staking_app_address`
  - Type: `bytes` (32 bytes long)
  - The address of the staking application's escrow account
- `delete_after`
  - Type: `uint64`
  - A UNIX timestamp that indicates after what time the voting app can be
    deleted
- `voting_start`
  - Type: `uint64`
  - A UNIX timestamp that indicates when the voting starts
- `voting_end`
  - Type: `uint64`
  - A UNIX timestamp that indicates when the voting ends and no new votes are
    accepted (but votes might still be withdrawn)
- `voting_finalized`
  - Type: `uint64`
  - A UNIX timestamp that indicates when the vote is finalized and cannot be
    changed anymore.
- `num_measures`
  - Type: `uint64`
  - The number of measures in this voting session (between 1 and 4).
- `choices_per_measure`
  - Type: `bytes` (32 bytes long)
  - This is an array of four uint64 numbers. The i-th number in this array
    denotes how many choices the i-th measure has (between 2 and four).
- `<empty string>`
  - Type: `bytes` (128 bytes long)
  - This key encodes the tally.  This is a 4x4 matrix `M` in row-major order
    and each element is a uint64 number. The `i`-th row denotes the tally for
    the `i`-th measure. `M[i][j]` denotes the number of votes for choice `j` in
    measure `i`. The key is the empty string '' because Algorand dictates that
    a key-value pair can occupy at most 128 bytes and all 128 bytes are already
    occupied by the value (i.e., matrix `M`).
- `num_tallied`
  - Type: `uint64`
  - Denotes the number of votes that have been cast.
- `num_untallied`
  - Type: `uint64`
  - Denotes the number of votes that have been withdrawn (and perhaps later
    cast again).


### Local State

The app stores a single byte slices (type `bytes`) in an account's local storage.

- `<empty string>`
  - Type: `bytes` (128 bytes long)
  - This key encodes the governor's vote. This is a 4x4 matrix `M` in row-major
    order and each element is a uint64 number. `M[i][j]` denotes the governor's
    vote for choice `j` in measure `i`. The key is the empty string '' because
    of Algorand's limitations on the size of a key-value pair (see the global
    state above).



## API

An [ARC-004](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md) compliant description of the voting API can be found in the
following file:
- [src/resources/governance-api-voting.json](src/resources/governance-api-voting.json)

Some method names are prefixed with the name of the role that is allowed to
execute the method. For instance, Creator_config can only be called by the
creator, while Staking_vote can only be called by the staking application
through an inner app call.


### `Creator_config(stakingAddress:address, stakingAppId:uint64, delete_after:uint64): void`

This method configures the voting app with the address `stakingAddress` of the
staking app, the ID `stakingAppId` of the staking app (making sure that
`stakingAddress` can be derived from `stakingAppId`), and the the UNIX
timestamp `delete_after` when the app can be deleted (must be in the future).
This method can only be called once and it can only be called by the creator.


### `Creator_setVotingSession(voting_start:uint64, voting_end:uint64, voting_finalized:uint64, num_measures:uint64, choices_per_measure:uint64[4]): void`

This method sets up a new voting session that starts at time `voting_start`,
ends at time `voting_end`, and is finalized at time `voting_finalized` (all
UNIX timestamps). The timestamps satisfy `now < voting_start < voting_end <=
voting_finalized < delete_after` where `now` denotes the latest confirmed block
time and `delete_after` is the timestamp configured in `Creator_config`.  The
voting session consists of `num_measures` (`1 <= num_measures <= 4`) measures.
The array `choices_per_measure` denotes how many choices a governor can choose
from for the `i`-th measure (between 2 and 4).

This method can only be called once and it can only be called by the creator.


### `Staking_vote(governor:account, stake:uint64, vote:uint64[4][4]): uint64[4][4]`

This method can only be called by the staking app and is used by it to cast a
vote on behalf of `governor` whose stake in governance is `stake`. Vote `vote`
is a 4x4 matrix in row-major order (see global and local state above).

Voting is only allowed in between the `voting_start` and `voting_end`
timestamps.

For each configured measure, the governor's votes per measure must sum up to
`stake`.  Votes for non-measures must be all zero. That is, if there are two
measures in the voting sessions, the first two rows of `vote` must be set and
the remaining two rows must be all zero.

The voting app rejects calls for governors that have an active vote in the
tally. If governors wish to revote, they first have to withdraw their previous
vote.


### `Staking_withdraw(governor:account): uint64[4][4]`

This method can only be called by the staking app and is used by it to remove /
withdraw governor `governor`'s vote from governance.

Withdrawing a vote is only allowed before the vote is finalized, that is,
`voting_finalized` has not yet happened.

The method returns the new tally after removing the governor's vote.


### `Staking_checkVoted(governor:account): void`

This method can only be called by the staking app. Calling this method succeeds
if `governor` has an active vote in governance and fails otherwise.


### `getVotingSession(): (uint64,uint64,uint64,uint64,uint64[4])`

This method can be called by anyone to obtain the voting session's
configuration. It returns a tuple that encodes the parameters passed previously
to `Creator_setVotingSession` (see there for details).

This method fails if the voting session has not yet been configured.


### `getTally(): uint64[4][4]`

This method returns the current tally as a 4x4 matrix in row-major order (see
above for details on the structure of this matrix and how to parse it).


### `getNumTallied(): uint64`

This method returns the number of governors that have an active vote in
governance. Active vote means a vote that is part of the tally.


### `getNumUntallied(): uint64`

This method returns the number of times a vote has been withdrawn from
governance. This includes withdrawals that were necessary for revoting (by
calling first `Staking_withdraw` and then `Staking_vote`). As such, it is not a
true representation of how many governors have dropped out of governance.



## Bare App Calls

### Creating the app

Takes no parameters and simply initializes some of the global state.


### Opt-in

Opt-ins are rejected once voting has started. That is, a governor must opt-in
to the voting app before `voting_start`.


### Close-out

Closing out is supported at any moment during the protocol. If a governor calls
close-out after having vote, the vote is not removed from the tally (only the
staking app can tell the voting app to withdraw a vote).


### Update

Updates to the app are not permitted.


### Delete

The app can only be deleted by its creator and only after the `delete_after`
timestamp set during `Creator_config`.


### Clear-state

Same as close-out.



## Implementation Details

Correctly adding and removing a governor's vote from the tally is the most
important part of the voting app. In the following we describe an efficient
algorithm for adding/removing a vote in TEAL.

First, we begin with the data structures. Let `T` be the tally and `V` be the
vote. Both are `uint64[4][4]` matrices that are internally represented as byte
slices of length 128 (stored in row-major order, every `uint64` is stored in
big-endian format). Adding vote `V` to tally `T` means computing the
matrix-addition `T+V`. Removing vote `V` from tally `T`$ is done through
matrix-subtraction. In the following we focus on adding a vote, subtracting is
analogous.

TEAL has the `b+` opcode (`BytesAdd` in PyTEAL) that sums up two byte strings
that can have up to 64 bytes each.  Thus we split `V` into `V1=V[0..63]` and
`V2[64..127]`, and do the same for `T1` and `T2`.  We then compute
`CONCAT(T1+V1, T2+V2)`. The problem is that `T1+V1` and `T2+V2` are not
necessarily byte strings of length 64 (they can be shorter if the most
significant bytes are zero). This means we need to pad `T1+V1` and `T2+V2` with
zeros at the front until they are 64 bytes long. Let `Z` be a 64-byte long
string containing all zeros. We compute the logical OR between `T1+V1` and `Z`
using the `b|` opcode (`BytesOr` in PyTEAL) and do the same also for `T2+V2`.
This forces the output to be a 64-byte string.

Doing matrix addition like this may cause unwanted and dangerous integer
overflows.  Computing `T1+V1` and `T2+V2` can, in theory, cause integer
overflows.  Let `T1`, `V1` be the following two vectors containing eight
`uint64` numbers each:

- `V1 = [v_7,v_6,v_5,v_4,v_3,v_2,v_1,v_0]`
- `T1 = [t_7,t_6,t_5,t_4,t_3,t_2,t_1,t_0]`

If, e.g., `v_0+t_0` overflows (i.e., exceeds 2^64-1), this can spill over and
corrupt the tally for vote `v_1`. **In practice this cannot happen**. Since
each tally `t_i` is denoted in microALGO and there can be at most
`L=10_000_000_000_000_000` (< 2^54) microALGO at any time, each `t_i` is
upper-bounded by `L`. Likewise each vote `v_i` is upper-bounded `L` as well.
This is enforced by checking that the sum of votes corresponds to the
governor's stake, which again is upper-bounded by `L`. Hence, each `v_i` and
`t_i` is upper-bounded by 2^54 and `v_i+t_i` by 2^55.  Hence, no overflow is
possible in practice.
