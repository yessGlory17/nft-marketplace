import React from "react";
import "../../styles/base/Select.css";

const Select = ({items}) => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" aria-haspopup="true">
        Select from Options
      </button>
      <ul className="dropdown-menu" role="listbox" aria-expanded="false">
        
        {items && items.map((item,index)=>(
            <li role="option" tabIndex={index} key={index}>
            {item}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Select;
