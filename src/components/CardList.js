import React from "react";
import Card from "./Card";
import "../styles/CardList.css";

const CardList = ({ list }) => {
  return (
    <div id="card-list">
      {list.map((item,index) => (
        <Card nftSrc={item.src} key={index}/>
      ))}
    </div>
  );
};

export default CardList;
