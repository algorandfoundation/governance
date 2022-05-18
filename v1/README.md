# Algorand Governance Technical Details

This repository contains some technical details about the governance program. In particular an [overall design document](./Algorand-Governance_Implementation-aspects.pdf), a [description of the smart contracts](./Algorand-Governance_Rewards-claiming.pdf) for distributing rewards, and a [spec for the governance system state transitions](./af-gov1-spec.md).

The smart contracts itself (in PyTeal) are provided in the [contracts subfolder](./contracts/), and we also provide here [an audit report](./Algorand-Governance_Rewards-audit-report.pdf) for these contracts by [runtimeverification](https://runtimeverification.com/).

We also provide [a bash script](./misc/claim.sh) that demonstrates how these smart contracts can be called to claim the rewards. (Note that the signatures included in the [example CSV file](./misc/rewards-list-signed.csv) that comes with this script are not valid, they are for demonstration purposes only.)
