This directory contains the governance code.

It arranged into subdirectories:
- `conmgr`
- `staking`
- `voting`
- `tool`

The first three are different applications related to the governance system; each has the same structure:
- An `API.md` file which describes the API.
- An `abi.json` file which describes the API in the ARC4 format.
- An `%.approval.teal` file which is the approval program TEAL.
- An `%.clear.teal` file which is the clear state program TEAL.

The `staking` directory also contains:
- An `%.rsh` file which is the Reach source for the program.
- An `%.mjs` file which is the output of the Reach compiler.

The `tool` directory is an undocumented collection of tools for interacting with the system.
