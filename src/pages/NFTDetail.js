import React, { useState, useEffect,createRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useMobile } from "../hooks/isMobile";
import {hotDropsData} from "../constants/MockupData";
import CardList from "../components/CardList";
import NFTCard from "../components/NFTCard";

const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [isLike, setIsLike] = useState(false);

  const moreNftListRef = createRef();

  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(()=>{
    setColors([]);
  },[state]);



  useEffect(()=>{
    if(moreNftListRef.current != null){
      //moreNftListRef.current
      moreNftListRef.current.addEventListener("wheel",()=>{
        console.log('aaaa');
      })
    }
  },[moreNftListRef])

  return (
    <div>
      <Header />
      <div id="nft-detail-card-wrapper">
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              <ColorExtractor getColors={getColors}>
                <img id="detail-image" src={state.item.src} />
              </ColorExtractor>

              <div id="detail-info" style={{}}>
                <div id='detail-info-container'>
                  <p id="collection"> {state.item.name} </p>
                  <p id="name"> {state.item.name} </p>
                  <p id="description" > {state.item.description} </p>

                </div>

                <div id="detail-controls">
                  <Button
                    width={isMobile ? "70%" : "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <FaEthereum size="28px" />
                        <p id="price">1254</p>
                      </div>
                    }
                  ></Button>
                  <div className="like-container">
                    <button className="like" onClick={like}>
                      {!isLike ? (
                        <AiOutlineHeart size="45" color="white" />
                      ) : (
                        <AiFillHeart
                          size="45"
                          style={{
                            stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`,
                          }}
                          color="#00f5c966"
                        />
                      )}
                    </button>
                    <p className="like-count">123</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <div id="more-nft-container" ref={moreNftListRef} style={{ width: isMobile ? "100%" : "65vw" }}>
            {hotDropsData.map((hotDrop,index)=>(
              <NFTCard nftSrc={hotDrop.src} key={index} onClick={()=>navigate('/detail',{state:{item:hotDrop}})}/>
            ))}
        </div>
      </div>

    </div>
  );
};

export default NFTDetail;
