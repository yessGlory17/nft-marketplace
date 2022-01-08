import React, { useState,useRef,forwardRef } from "react";
import Card from "./Card";
import '../../styles/base/Accordion.css';

const Accordion = ({ width, height, acordionHeader }) => {
  const [isOpen, setOpen] = useState(false);
  const accordionRef = useRef();

  const open = () => {
      if(!isOpen){
          accordionRef.current.style.height = '500px';
          setOpen(!isOpen);
      }else{
        accordionRef.current.style.height = height;
        setOpen(!isOpen);
      }
  }
  return (
    <Card
      width={width}
      height={height}
      ref={accordionRef}
      onClick={open}
      child={<h1 style={{ color: "white" }}>Accordion Header</h1>}
    />
  );
};

export default Accordion;
