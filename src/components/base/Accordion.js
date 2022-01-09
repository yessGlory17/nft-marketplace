import React, { useState, useRef, forwardRef,useEffect } from "react";
import Card from "./Card";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({child }) => {
  const [isOpen, setOpen] = useState(false);
  const accordionRef = useRef();

  useEffect(() => accordionRef.current.style.minHeight = '50px',[]);

  const open = () => {
    if (!isOpen) {
      setOpen(!isOpen);
      console.log(child);
      accordionRef.current.style.height = "auto";
    } else {
      setOpen(!isOpen);
      accordionRef.current.style.height = "50px";
    }
  }

  return (
    <Card
      width="250px"
      height="50px"
      ref={accordionRef}
      child={
        <>
          <AccordionHeader
            heading="Accordion Header"
            onClick={open}
            isOpen={isOpen}
          />
          {isOpen ? child : null}
        </>
      }
    />
  );
};

export default Accordion;
