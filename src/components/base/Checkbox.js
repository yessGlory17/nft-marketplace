import React from "react";
import '../../styles/base/Checkbox.css';

const Checkbox = ({name,onChange}) => {
  return (
    <label class="container">
      {name}
      <input type="checkbox" onChange={onChange} />
      <span class="checkmark"></span>
    </label>
  );
};

export default Checkbox;
