import React from "react";
import NFTCard from "./NFTCard";
import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";

const CardList = ({ list }) => {
  let navigate = useNavigate();

  return (
    <div id="card-list">
      {list.map((item,index) => (
        <NFTCard nftSrc={item.src} key={index} onClick={()=>navigate('/detail',{state:{item:item}})}/>
      ))}
    </div>
  );
};

export default CardList;
