import React, { createRef, useRef,useState } from "react";
import "../styles/Filters.css";
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";
//Price
//Categories
//Status
const Filters = () => {

  const [statusIsOpen, setStatusOpen] = useState(false);
  const detailRef = useRef();

  const detail = () => {
    console.log(detailRef);
    if(statusIsOpen){
        detailRef.current.style.height = "45px";
        setStatusOpen(false);
    }else{
        detailRef.current.style.height = "200px";
        setStatusOpen(true);
    }
  };

  return (
    <div id="filters">
      <div id="status-filter" ref={detailRef}>
        <div id='status-top'>
          <p id="status-header">Status</p>
          <button id="detail-button" onClick={detail}>
            {statusIsOpen ? <AiOutlineUp color="white" /> : <AiOutlineDown color="white" />}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Filters;
