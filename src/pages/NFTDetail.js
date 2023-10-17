import React, { useState, useEffect, createRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { FaEthereum } from "react-icons/fa";
import { useMobile } from "../hooks/isMobile";
import { hotDropsData } from "../constants/MockupData";
import NFTCard from "../components/NFTCard";
import { useARStatus } from "../hooks/isARStatus";

const NFTDetail = () => {
  const isMobile = useMobile();
  const [colors, setColors] = useState([]);
  
  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const { state } = useLocation();
  useEffect(() => {
    setColors([]);
  }, [state]);

  const isARSupport = useARStatus(state.item.src);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header />
      <div id="nft-detail-card-wrapper">
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            // Detail Content
            <div id="detail-content">
              {isARSupport ? (
                <model-viewer
                  ar-scale="auto"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  id="arDetail"
                  loading="eager"
                  camera-controls
                  auto-rotate
                  src={state.item.src}
                >
                </model-viewer>
              ) : (
                <>
                  <ColorExtractor getColors={getColors}>
                    <img id="detail-image" src={state.item.src} />
                  </ColorExtractor>
                </>
              )}
              <div id="back-btn">
                <p onClick={clickHandler}>&times;</p>
              </div>
              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection"> {state.item.name} </p>
                  <p id="name"> {state.item.name} </p>
                  <p id="description"> {state.item.description} </p>
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
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default NFTDetail;
