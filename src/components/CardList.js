import React from "react";
import NFTCard from "./NFTCard";
import "../styles/CardList.css";

const CardList = ({ list }) => {
  return (
    <div id="card-list">
      {list.map((item,index) => (
        <NFTCard nftSrc={item.src} key={index}/>
      ))}
    </div>
  );
};

export default CardList;
