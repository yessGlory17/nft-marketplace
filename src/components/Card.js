import React, { useState } from "react";
import "../styles/Card.css";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ColorExtractor } from 'react-color-extractor'


const Card = ({ username, nftName, price, nftSrc, likeCount, gradient }) => {
  const [isLike, setIsLike] = useState(false);
  const [colors,setColors] = useState([]);

  const like = () => setIsLike(!isLike);
  
  const getColors = colors => {
    setColors(c => [...c,...colors]);
    //console.log(colors);
  }

  

  return (
    <div className="card" style={{
        background: `radial-gradient(
            circle,
            rgba(255, 255, 255, 0.05) 0%,
            ${colors[0]} 0%,
            rgba(255, 255, 255, 0.05) 70%
          )`
    }}>
      <ColorExtractor getColors={getColors}>
      <img className="nft-image" src={nftSrc} />
      </ColorExtractor>
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
        <button className="buy-now">Buy Now</button>
        <div className="like-container">
          <button className="like" onClick={like}>
            {!isLike ? (
              <AiOutlineHeart size="30" color="white" />
            ) : (
              <AiFillHeart size="30" style={{
                stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`
              }}  color='#00f5c966' />
            )}
          </button>
          <p className="like-count">123</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

