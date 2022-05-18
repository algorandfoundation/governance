from pyteal import *

"""Governance Rewards Application"""

# An optIn method call, to be called from every state-storing address.
# It stores in local storage the escrow address, and 15 more byte arrays
# each consisting of 127 zero bytes.
def opt_in(escrow_addr):
    i = ScratchVar()
    program = Seq(
        [
            App.localPut(Txn.sender(), Bytes("ES"), escrow_addr),  # store escrow addr
            For(i.store(Int(0)), i.load() < Int(15), i.store(i.load() + Int(1))).Do(
                App.localPut(
                    Txn.sender(),
                    # We only want the last byte to store as the key.
                    Substring(Itob(i.load()), Int(7), Int(8)),
                    BytesZero(Int(127)),
                )
            ),  # store 15 arrays of 127 zero-bytes each, indexed by 0,1,...,14
        ]
    )
    return program


# The claim method is described by
# {
#  "name": "claim",
#  "desc": "Claim the governance rewards for governor_addr account",
#  "args": [
#    { "name": "bit_index", "type": "uint16" }
#  ]
# }
# Its selector is the 1st four bytes of SHA512/256('claim(uint16)void').
# The SHA512/256 value is
#     5698b72d6233da9f9cb14852c3ad1b12739e658108c3cb3b5ab2dd29cf8c66e7
# Hence the selector is the four byte 0x5698b72d
claim_method_sel = Bytes("base16", "0x5698b72d")

# A claim method call, called by an arbitrary caller address to trigger
# sending rewards for some governor address. The argument is an int16,
# encoding the index of the bit for that governor in the array of the
# relevant state-holding address.
# This application call must be accompanied by a pay transaction for the
# payment itself.
@Subroutine(TealType.none)
def claim(bit_index):
    prev = Txn.group_index() - Int(1)  # index of the pay transaction

    # The bit-array is really a list of 15 arrays, each of 127 bytes (1016 bits)
    # Then use SetByte to encode the array to be used (0...14, encoded as a byte)
    idx1 = SetByte(Bytes("base16", "0x00"), Int(0), Btoi(bit_index) / Int(1016))
    idx2 = Btoi(bit_index) % Int(1016)  # index of the bit inside the array

    byteArray = App.localGet(Txn.accounts[1], idx1)  # get array from storage
    bit = GetBit(byteArray, idx2)  # read bit from array

    program = Seq(
        [
            Assert(
                And(
                    # Txn must be payment type
                    Gtxn[prev].type_enum() == TxnType.Payment,
                    # Bit index must be below 15*127*8 = 15240
                    Btoi(bit_index) < Int(15240),
                    # ES in Txn.accounts[1] should be the same as txn sender
                    Gtxn[prev].sender() == App.localGet(Txn.accounts[1], Bytes("ES")),
                    # Local storage should have 127 bytes
                    Len(byteArray) == Int(127),
                    # Bit value should be 0
                    bit == Int(0),
                )
            ),
            # Set bit to 1 and write back to storage
            App.localPut(Txn.accounts[1], idx1, SetBit(byteArray, idx2, Int(1))),
        ]
    )

    return program


# A high-level multiplexer that calls the right method
def approval_program():
    program = (
        If(Txn.application_id() == Int(0))
        .Then(Approve())
        .ElseIf(Txn.on_completion() == OnComplete.UpdateApplication)
        .Then(Return(Txn.sender() == Global.creator_address()))
        .ElseIf(Txn.on_completion() == OnComplete.OptIn)
        .Then(  # opt-in
            Seq(
                [
                    opt_in(Txn.application_args[1]),
                    Approve(),
                ]
            )
        )
        .ElseIf(
            And(  # calling the claim method
                Txn.on_completion() == OnComplete.NoOp,
                Txn.application_args[0] == claim_method_sel,
            )
        )
        .Then(Seq([claim(Txn.application_args[1]), Approve()]))
        .Else(Reject())
    )
    return Seq(program)


def clear_state_program():
    return Int(1)


if __name__ == "__main__":
    import os

    path = os.path.dirname(__file__)

    with open(os.path.join(path, "app_approval.teal"), "w") as f:
        compiled = compileTeal(
            approval_program(), mode=Mode.Application, version=4, assembleConstants=True
        )
        f.write(compiled)

    with open(os.path.join(path, "app_clear_state.teal"), "w") as f:
        compiled = compileTeal(
            clear_state_program(),
            mode=Mode.Application,
            version=4,
            assembleConstants=True,
        )
        f.write(compiled)
