import React from "react";
import '../../styles/base/Input.css';

//Base Input Component
//Usage: <Input width='550px' height='30px' />

const Input = ({width,height, placeholder='default input', icon }) => {
  return (
    <div className="search-wrapper">
      <div
        className="search-container"
        style={{
          width:`${width}`,
          height:`${height}`,
          background: `radial-gradient(
                    circle,
                    rgba(255, 255, 255, 0.05) 0%,
                    rgba(48,118,234,0.2) 0%,
                    rgba(255, 255, 255, 0.05) 70%
                )`,
        }}
      >
        <input id="search" placeholder={placeholder} />
        {icon}
      </div>
    </div>
  );
};

export default Input;
