import React, { useEffect, useState } from "react";
import "../styles/NFTCard.css";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ColorExtractor } from 'react-color-extractor'
import Card from "./base/Card";
import Button from "./base/Button";
import { Colors } from "../constants/Colors";

import { ModelViewerElement } from "@google/model-viewer";
import { useARStatus } from "../hooks/isARStatus";



const NFTCard = ({ username, nftName, price, nftSrc, likeCountProp, gradient, onClick }) => {
  const [isLike, setIsLike] = useState(false);
  const [colors, setColors] = useState([]);
  const [likeCount,setLikeCount]=useState(0)

  const isARSupport = useARStatus(nftSrc);

  useEffect(() => {
    console.log(isARSupport);
  }, [])

  const like = () => setIsLike(!isLike);
 
  const getColors = colors => {
    setColors(c => [...c, ...colors]);
    //console.log(colors);
  }
  const toggleLike = () => {
    if (isLike) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLike(!isLike);
  
    like()
  };


  
  return (
    <Card
      blurColor={colors[0]}

      child={<>
        {isARSupport ? <model-viewer ar-scale="auto" ar ar-modes="webxr scene-viewer quick-look" id="reveal" loading="eager" camera-controls auto-rotate src={nftSrc} > </model-viewer> : <><ColorExtractor getColors={getColors}>
          <img className="nft-image" src={nftSrc} />
        </ColorExtractor></>}
        <div className="wrapper">
          <div className="info-container">
            <p className="owner"> LEJOURN.DARK.NFT</p>
            <p className="name">Alien Cry</p>
          </div>

          <div className="price-container">
            <p className="price-label">Price</p>
            <p className="price">
              {" "}
              <FaEthereum /> 4.555
            </p>
          </div>
        </div>
        <div className="buttons">
          {/* <button className="buy-now">Buy Now</button> */}
          <Button color={Colors.buttons.primary} textContent="Buy Now" onClick={onClick} />
          <div className="like-container">
            <button  id="like" className={isLike ? 'isLike' : ''} onClick={toggleLike}>
              {!isLike ? (
                <AiOutlineHeart  size="30" color="white" />
              ) : (
                <AiFillHeart className="like-count" size="30" style={{
                  stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`
                }} color='#00f5c966' />
              )}
            </button>
            <span className="like-count">{likeCount} </span>
            
          </div>
        </div>    
      </>
      }>

    </Card>
  );
};

export default NFTCard;

