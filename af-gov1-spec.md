# Formal spec of the Algorand governance state machine:

Each governance address has its own state machine for each period. These machines are completely independent and the state transition in one has no bearing on any other. The only cross-address influence are the vote tally and the amount of awards received at the end, these aspects are left out-of-scope of this spec.

This spec consists of two layers: a decoding layer that reads the blockchain and provides input to the state machine, and the state machine itself. We describe the state machine first, and then the decoder.

## State machine for one governance address:

For each period and each address, we keep the following pieces of state:

+ Committed-balance: 53-bit integer, between 0 and 2^53-1=9007199254740991 (microAlgos)
+ Phase: integer in {0,1,2,3}  (0-not open, 1-signup, 2-commitment, 3-over)
+ Voting-accepted: boolean     (the voting session is open)
+ Vote-expected: boolean       (account did not vote yet in the currect session)
+ Commitment-violated: boolean (a sticky bit, once set it never clears)

Note that an address is eligible for rewards when Phase==3 and Commitment-violated==false. This spec does not model rewards distribution, and therefore does not include any mechanism for marking that rewards were already claimed.

The start state has Phase=0 and Committed-balance=0, the flags are set to false. The inputs that this machine accepts from the decoding layer are:

+ Signup-open
+ Commitment   (argument: commit - 53-bit integer)
+ Signup-close (argument: balance - 53-bit integer)
+ Voting-open
+ Vote-cast
+ Voting-close
+ Balance-change (argument: balance - 53-bit integer)
+ Period-end

The state-transitions associated with these inputs as described next:

* Signup-open: If Phase==0 then set Phase=1

* Commitment(n): If Phase==1 then set Committed-balance=n
  // Note: previous value of Committed-balance is overwritten

* Signup-close(n): If Phase==1 then:
  - If n<Committed-balance then set Commitment-violated=true
  - Set Phase=2

* Voting-open: If Phase==2 and Voting-accepted==false then:
  - Set Voting-accepted=true
  - Set Vote-expected=true

* Vote-cast: If Phase==2 and Voting-accepted==true then set Vote-expected=false

* Voting-close: If Phase==2 and Voting-accepted==true then:
  - If Vote-expected==true then set Commitment-violated=true and Vote-expected=false
  - Set Voting-accepted=false

* Balance-change(n):
  If Phase==2 and n<Committed-balance then set Commitment-violated=true

* Period-end: If Phase==2 then set Phase=3

## The Decoding Layer

The decoding layer (for a particular governance period and governing address) follows the blockchain, block-by-block and transaction-by-transaction, and based on what it sees it sends inputs to the state machine.

The decoder is parametrized by a governance address GA that it tracks, the governance escrow address EA, and by five timestamps: `signup-open < signup-close <= voting-open < voting-close <= period-end`. (Note: having more voting sessions in a period is possible, but will complicate the description of this layer.)

For every block, the decoder process in order all the transactions in this block with Sender==GA, as well as the timestamp of this block (`cts`) and the the timestamp of the previous block (`pts`), as describe below. It goes over all the bullets below in order, and if more than one of them applies then it sends more than one input to the state machine.

+ If `pts < signup-open <= cts` then send `Signup-open` before processing any of the transactions in the block;

+ If `pts <= signup-close < cts` then lookup the balance of GA at the end of the previous block and send `Signup-close(<end-of-previous-block-balance>)` before processing any of the transactions in the block;

+ If `pts < voting-open <= cts` then send `Voting-open` before processing any of the transactions in the block;

+ If `pts <= voting-close < cts` then send `Voting-close` before processing any of the transactions in the block;

+ If `pts <= period-end < cts` then send `Period-end` before processing any of the transactions in the block;

+ For every pay transaction from GA to EA in this block with notes field of the format `af/gov1:j{"com":<n>}` if <n> is a 53-bit non-negative integer then it sends `Commitment(<n>)`. In more detail, the part enclosed in `{}` (including) must be valid JSON object literal that includes a key "com" with a number value. (It may include other key/value pairs, they will be ignored.)

+ For every pay transaction from GA to EA in this block with notes field of the format `af/gov1:j[3,"a"]` or `af/gov1:j[3,"b"]` it sends `Vote-cast`.

  In more detail, the part enclosed in `[]` (including) must be a valid JSON array literal, whose length is one more than the number of measures in the voting session (length=2 for the voting session in the 1st governance period). Denoting that array by A, A[0] must be a number literal, equal to the internal index of the voting session (which is 3 for the voting session in the 1st governance period). Each A[i] for i>0 must be a string literal equal to one of the options for the i'th measure (so A[1] must be either "a" or "b" for the voting session in the first governance period).

+ If the block contains any transaction with Sender==GA, the decoder looks up the balance of GA at the end of the block and sends `Balance-change(<end-of-block-balance>)`.
