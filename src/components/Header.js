import react from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { walletConnect, walletLink, ledger, fortmatic, portis } from "../lib/wallets";

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
        case "walletlink":
            activate(walletLink);
            break;
        case "ledger":
            activate(ledger);
            break;
        case "fortmatic":
            activate(fortmatic);
            break;
        case "portis":
            activate(portis);
            break;
        default:
          console.log("Unknown wallet");
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

          <button id="connect-wallet" onClick={() => connectWallet("metamask")} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;