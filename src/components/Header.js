import react from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          <button id="connect-wallet">Connect Wallet</button>
        </div>
      </div>
    );
}

export default Header;