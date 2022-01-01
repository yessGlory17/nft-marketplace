import React from "react";
import "../styles/Search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div
        className="search-container"
        style={{
          background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                rgba(48,118,234,0.2) 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`,
        }}
      >
        <input id="search" placeholder="Explore NFT's" />
        <AiOutlineSearch size="30" color="rgba(48,118,234,1)" />
      </div>
    </div>
  );
};

export default Search;
