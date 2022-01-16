import react from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { walletConnect } from "../lib/wallets";

const Header = () => {

    const {activateBrowserWallet, activate, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const connectWallet = (wallet) => {
      switch (wallet) {
        case "metamask":
          activateBrowserWallet();
          break;
        case "walletconnect":
          activate(walletConnect);
          break;
        default:
          activateBrowserWallet();
          break;
      }
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet" onClick={connectWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;