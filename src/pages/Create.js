import react from "react";
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

const Create = () => {
  const checkboxOnChange = () => {
    alert("checkbox is changed");
  };

  const selectBoxOnChange = (v) => {
    alert(`Selectbox selected value ${v}`);
  };

  return (
    <div>
      Create Page
     
    </div>
  );
};

export default Create;
