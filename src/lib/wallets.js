import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { PortisConnector } from "@web3-react/portis-connector";

const POLLING_INTERVAL = 12000;

const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  3: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  4: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  5: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
};

export const walletConnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1], 3: RPC_URLS[3], 4: RPC_URLS[4], 5: RPC_URLS[5] },
  bridge: "https://bridge.walletconnect.org",
  infuraId: process.env.REACT_APP_INFURA_KEY,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const walletLink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: "web3-react example",
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
});

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.REACT_APP_FORMATIC_PROD_KEY,
  chainId: 1,
});

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_DAPP_ID,
  networks: [1, 100]
});
