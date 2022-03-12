import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();

    }

    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;