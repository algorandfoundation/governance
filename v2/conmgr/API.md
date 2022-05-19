# Consensus Participation

Participation in the Algorand consensus algorithm requires an account to
actually hold ALGOs.

If these ALGOs were staked in the governance system, then they would not be
possessed by the participating account and thus could not participate.

Thus, the staking system allows staking in ALGOs or in another token, called a
Participant-ALGO (pALGO).

### Methods

#### Create

The application must be created with 3 global ints, 1 local int, and 1 local byte slice.

#### `Admin_init()void`

This must be called with the pALGO token as the first asset in the `foreignAssets` array and with two fees.

Prior to being called, the application's account must be sent a sufficient number of ALGOs to opt-in to the pALGO.

After being called, pALGOs should be sent to the application's account.

#### `User_register(uint64)void`

The argument is called `bP`.

This must be called by an escrow account holding at least `bP` ALGO.
The call must be an `OptIn`.
The call must have one extra fee.
The call must rekey to the application account.
The call must have the pALGO token as the first element of `foreignAssets`.
The first element of `accounts` is saved as the owner of the calling account.

This call transfers to the owner a number of pALGO equal to `bP`.

#### `User_keyreg(address,address,byte[64],uint64,uint64,uint64)void`

The call must designate the escrow account as the first element of `accounts`.
It must be called by the owner of the escrow account.
It must be called with one extra fee.

This call sends a `keyreg` transaction from the escrow account.

#### `User_keyunreg()void`

The call must designate the escrow account as the first element of `accounts`.
It must be called by the owner of the escrow account.
It must be called with one extra fee.

This call sends a `keyreg` transaction from the escrow account with no fields set.

#### `User_unregister()void`

This call must be in a transaction group where the first transaction sends `bP` PALG to the application's account.
It must have one extra fee.
It must designate the escrow account as the first element of `accounts`.
It must be called by the owner of the escrow account.

This call rekeys the escrow account back to its owner.

#### `Admin_delete()void`

This may only be called if there are no registers users.
It must be called with a `DeleteApplication` `OnCompletion`.
It must be called with two extra fees.
It must be called with the pALGO token as the first element of `foreignAssets` array.
This may only be called by the creator.

The application will close its pALGO and ALGO balances to the creator.

