import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { UnstoppableLogin, logout } from "./LoginWithUnstoppable";

const Header = () => {
    const [domainName, setDomain] = useState(null)
    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();

    }
    const handleDisconnect = async () => {
      // await logout()
      localStorage.clear("domain")
      setDomain("")
    }

    useEffect(() =>{
      const value = localStorage.getItem("domain")
      setDomain(value)
    }, [])

    return (
        <div id="header">
        <Link to='/' id='logo'>NFT Room</Link>

        <div id="link-containers">
          <a>Start Hunting</a>
          <a>Dark NFTs</a>
          <a>Community</a>
          <a>Craft NFT</a>

          {/* <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button> */}
          <button id="connect-wallet" onClick={domainName ==="" ? UnstoppableLogin : handleDisconnect}>{ domainName ? domainName : "Login with Unstoppable"}</button>
        </div>
      </div>
    );
}

export default Header;