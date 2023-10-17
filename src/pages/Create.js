import react, { useEffect ,useState} from "react";
import Accordion from "../components/base/Accordion";
import AccordionHeader from "../components/base/AccordionHeader";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Checkbox from "../components/base/Checkbox";
import Image from "../components/base/Image";
import Select from "../components/base/Select";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";
import {AiOutlineSearch} from 'react-icons/ai';
import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { FaEthereum } from "react-icons/fa";
import '../styles/Create.css'
import nft from '../assets/nft.jpg'
import nft2 from '../assets/nft2.jpg'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useARStatus } from "../hooks/isARStatus";



const Create = ({onClick}) => {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);
  const [isLike, setIsLike] = useState(false);
  const [colors, setColors] = useState([]);
  const [likeCount,setLikeCount]=useState(0)

  

  const like = () => setIsLike(!isLike);
 
  const toggleLike = () => {
    if (isLike) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLike(!isLike);
  
    like()
  };

  useEffect(()=>{
    activateBrowserWallet();
  },[])

  return (
    <>
      <Header />
      <div className="nfts">
      <div className="nft-card">
      <img
        src={nft}
        alt="NFT Image"
        className="nft-image"
      />
      <div className="nft-details">
        <h3 className="nft-name">My NFT</h3>
        <p className="nft-owner">Created by Shawn</p>
        <FaEthereum /> 4.555
      </div>
      
      <div className="buttons">
          {/* <button className="buy-now">Buy Now</button> */}
         
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
      </div>
{/*second */}
<div className="nft-card">
      <img
        src={nft2}
        alt="NFT Image"
        className="nft-image"
      />
      <div className="nft-details">
        <h3 className="nft-name">My NFT2</h3>
        <p className="nft-owner">Created by New</p>
        <FaEthereum /> 4.555
      </div>
      
      <div className="buttons">
          {/* <button className="buy-now">Buy Now</button> */}
         
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
      </div>
      </div>
    </>
  );
};

export default Create;
