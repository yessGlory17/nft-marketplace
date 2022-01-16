import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
const POLLING_INTERVAL = 12000;

const RPC_URLS = {
    1 : `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    3 : `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    4 : `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
    5 : `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
}
console.log(RPC_URLS);

export const walletConnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1], 3: RPC_URLS[3], 4: RPC_URLS[4], 5: RPC_URLS[5] },
    bridge: 'https://bridge.walletconnect.org',
    infuraId : process.env.REACT_APP_INFURA_KEY,
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
  })
