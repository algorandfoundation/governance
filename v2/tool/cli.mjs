import { loadStdlib } from '@reach-sh/stdlib';
import * as sdk from './sdk.mjs';
import * as backend from './build/index.main.mjs';
import * as util from 'util';
import { promises as fs } from 'fs';
const { stdlib } = sdk;
const { algosdk } = stdlib;

const show = (x) => console.log(JSON.stringify(x, null, 2));

const loadConfig = async () => {
  const config = JSON.parse(await fs.readFile('./config.json'));
  const { accAdmin_phrase } = config
  const accAdmin = accAdmin_phrase ?
    await stdlib.newAccountFromMnemonic(accAdmin_phrase)
    : await stdlib.newTestAccount(stdlib.parseCurrency(100));
  if ( ! accAdmin_phrase ) {
    console.log(`Created accAdmin`);
    show({
      'accAdmin': stdlib.formatAddress(accAdmin),
      'accAdmin_phrase': stdlib.unsafeGetMnemonic(accAdmin),
    });
  }
  return {
    ...config,
    accAdmin,
  };
};

const cliOpts = {
  'cli-abi': async () => {
    const acc = await stdlib.createAccount();
    const ctc = acc.contract(backend);
    const { sigs } = ctc.getABI();
    const abictc = new algosdk.ABIContract({
      name: 'algo-govt',
      methods: sigs.map((s) =>
        algosdk.ABIMethod.fromSignature(s).toJSON()
      ),
    });
    show(abictc.toJSON());
    return;
  },
  'cli-abi-consensus': async () => {
    const abi = sdk.conManagerABI;
    const abictc = new algosdk.ABIContract({
      name: 'consensus',
      methods: Object.keys(abi).map((f) =>
        algosdk.ABIMethod.fromSignature(`${f}${abi[f]}`).toJSON()
      ),
    });
    show(abictc.toJSON());
    return;
  },
  'cli-launch-palgo': async () => {
    const { accAdmin} = await loadConfig();
    show(
      await sdk.launchPALGO({ accAdmin })
    );
  },
  'cli-launch-cons-manager': async () => {
    const { accAdmin, stakeToken } = await loadConfig();
    show(
      await sdk.launchConsManager({ accAdmin, stakeToken })
    );
  },
  'cli-launch-govt-period': async () => {
    const { accAdmin, stakeToken, stakePeriod } = await loadConfig();
    show(
      await sdk.launchGovernancePeriod({ accAdmin, stakeToken, stakePeriod })
    );
  },
};

export const runCli = async (mode) => {
  const f = cliOpts[mode];
  if ( f !== undefined ) { await f(); }
  else {
    console.log('CLI modes:');
    console.log(Object.keys(cliOpts));
    return;
  }
};
