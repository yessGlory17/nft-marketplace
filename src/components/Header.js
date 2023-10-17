import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleWallet = () => {
    activateBrowserWallet();
  };
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };
  return (
    <div id="header">
      <Link to="/" id="logo">
        NFT Room
      </Link>
      <h1
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          background: "#11998e" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to bottom, #38ef7d, #11998e)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to bottom, #38ef7d, #11998e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          fontWeight: "600", // Make the text bold
          color: "#ffffff", // Set text color to white
          cursor: "pointer",
          border: "2px",

          borderRadius: "50px", // Make the element round
          borderWidth: "5px", // Make the border thicker
          // borderStyle: "solid", // Set the border style to solid
          borderColor: "#ffffff", // Set border color to white
          padding: "15px", // Increase the padding to expand the background around the text
        }}
      >
        Hello, {userName}
      </h1>

      <div id="link-containers">
        <button
          style={{
            width: "170px",
            height: "40px",
            borderRadius: "50px",
            fontSize: "18px",
            border: "none",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            backgroundColor: "transparent",
            border: "2px solid #ffffff",
            color: "#ffffff",
            cursor: "pointer",
          }}
          onClick={logOut}
        >
          Logout
        </button>
        <a>Start Hunting</a>
        <a>Dark NFTs</a>
        <a>Community</a>
        <a>Craft NFT</a>

        <button id="connect-wallet" onClick={handleWallet}>
          {!account ? "Connect Wallet" : account}
        </button>
      </div>
    </div>
  );
};

export default Header;
