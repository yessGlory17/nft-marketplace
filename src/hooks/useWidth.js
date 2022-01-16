import { useEffect, useState } from "react";


export const getWindowDim = () => {  
    return {
      width:window.innerWidth,
      height:window.innerHeight,
    };
  };


export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [windowDim, setWindowDim] = useState(getWindowDim());

  const handleResize = () => {
    console.log(getWindowDim());
    setWindowDim(getWindowDim());
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize");
  }, []);

  useEffect(() => windowDim.width < 1200 ? setIsMobile(true) : setIsMobile(false), [windowDim]);
  return isMobile;
};