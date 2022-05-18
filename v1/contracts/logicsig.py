from pyteal import *
import os

"""Stateless Governance Program"""


def logicsig(
    prd,
    app_id,
    addrs,
    T,
    output_path=os.path.dirname(__file__),
    nonpart_last_valid=16529000,
):
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
    N = len(addrs)
    pks = []
    for i in range(N):
        pks.append(Addr(addrs[i]))
    prdStr = prd.to_bytes(2, "big").hex()
    prdStr32 = prd.to_bytes(
        32, "big"
    ).hex()  # 32-byte str needed for lease value comparison
    enc_pd_num = Bytes("base16", prdStr)

    # Subroutine for verifying multi-signatures on one entry.
    # It counts how many arguments have the right length (64 bytes)
    # and are verified as valid signatures on the given entry.
    @Subroutine(TealType.uint64)
    def verifiedSubCall(entry):
        verified = ScratchVar()  # A counter: How many signatures verified
        # Assemble a program as a list of actions
        program = [verified.store(Int(0))]  # initialize the counter to zero
        for i in range(N):  # Go over the N arguments
            step = If(Len(Arg(i)) == Int(64)).Then(  # if it looks like a signature
                verified.store(
                    verified.load()  # load current counter
                    + Ed25519Verify(  # add verification result
                        entry,
                        Arg(i),
                        pks[i],
                    )
                )
            )
            program.append(step)  # add this verification step to the program

        program.append(Return(verified.load()))
        # NOTE: above i,N are known when the PyTeal interpreter is run, but
        # all other variables are TEAL variables that are only known during
        # runtime when the TEAL program is run. The code above will be compiled
        # to an unrolled loop of N=3 steps in TEAL.
        return Seq(program)  # return a single program made of all these steps

    # txn.lease() is 32-byte length
    lease_val = Bytes("base16", prdStr32)

    validKeyRegTxn = And(
        Txn.type_enum() == TxnType.KeyRegistration,  # A makeNonParticipating call
        Txn.rekey_to() == Global.zero_address(),
        Txn.last_valid() == Int(nonpart_last_valid),
        Txn.lease() == lease_val
        # , Txn.nonparticipation() == Int(1), # only available from TEALv5
    )

    # Standard sanity-checks for any transaction
    goodTxnParams = And(
        Txn.rekey_to() == Global.zero_address(),
        Txn.close_remainder_to() == Global.zero_address(),
        Txn.fee() <= (Int(2) * Global.min_txn_fee()),
    )

    next = Txn.group_index() + Int(1)  # index in group of the stateful application call
    isAppCall = Gtxn[next].type_enum() == TxnType.ApplicationCall
    validApptxn = And(  # Check for application call to the claiming method
        Gtxn[next].application_id()
        == Int(app_id),  # the application ID of the governance stateful-TEAL program
        Gtxn[next].application_args[0] == claim_method_sel,
    )

    ga = Txn.receiver()  # the recipient address
    amt = Itob(Txn.amount() + Txn.fee())  # should equal the amount due to this address
    sa = Gtxn[next].accounts[1]  # The state-holding foreign address
    idx = Gtxn[next].application_args[1]  # index of governor's bit in the array at sa
    entry = Concat(enc_pd_num, sa, idx, ga, amt)  # concatenate them all to an entry
    program = Seq(
        [
            If(validKeyRegTxn, Approve()),  # allow key registration
            Assert(goodTxnParams),  # general sanity checks
            Assert(isAppCall),  # second txn is an app call
            Assert(validApptxn),  # Check application call
            Assert(verifiedSubCall(entry) >= Int(T)),  # check that we have at least T
            Return(Int(1)),
        ]
    )

    with open(os.path.join(output_path, "logicsig.teal"), "w") as f:
        compiled = compileTeal(
            program,
            mode=Mode.Signature,
            version=4,
            assembleConstants=True,
        )
        f.write(compiled)

    return compiled


if __name__ == "__main__":
    import sys
    import json

    # example run
    prd = 18
    app_id = 350477347
    addrs = [
        "NO52H7LD4CDSUS4OHTNDFQGB6EN752VDRE7FSF4ZOUMSVN22T456UZ4MSE",
        "7FJVMPOUIDQQFR47J3SDDTA3VTCYHHFZWCRS2MW37DL6WKLXGUORS46FGE",
        "MVBLQB3XVSCUJIED5KJMY2DCXBJVBBKGF5I374XN6N43GUJ72AITJDQ3OY"
    ]
    T = 2

    # If a config file is given, get the values from this file
    if len(sys.argv) > 1:
        confile = sys.argv[1]
        if os.path.exists(confile):
            with open(confile) as f:
                confData = json.load(f)
                NN = len(confData["signing_addr"])
                TT = confData["signing_threshold"]
                pp = confData["period"]

                # if parameters were specified, use them
                if TT > 0 and NN >= TT and pp > 0:
                    N = NN
                    T = TT
                    prd = pp
                    addrs = []
                    for i in range(N):
                        addrs.append(confData["signing_addr"][i])

    logicsig(prd, app_id, addrs, T)
