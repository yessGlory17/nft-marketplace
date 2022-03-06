import React, { useState } from "react";
import "../../styles/base/Button.css";

const Button = ({
  width = "80px",
  height = "30px",
  color = "#ffffff",
  onClick,
  textColor = "black",
  textContent = 'Button',
  child
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      className="default-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        width: `${width}`,
        height: `${height}`,
        color: `${isHover ? textColor : color}`,
        border: `1px solid ${color}`,
        transition: "background-color .5 ease-in-out",
        backgroundColor: isHover ? color : "transparent",
      }}
    >
      {child ? child : textContent}
    </button>
  );
};

export default Button;
