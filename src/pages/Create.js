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
      <Card width='250px' height='250px' blurColor="rgba(78, 242, 154,0.3)"/>
      <TextInput width="250px" height="30px" icon={<AiOutlineSearch size="28px" color="#32a852" />} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{
        width:'500px',
        height:'1000px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      }}>
      <Button width="150px" height="30px" textContent="Primary Button" />
      <br/>
      <br/>
      <br/>
      <Button
        width="150px"
        height="30px"
        textContent="Secondary Button"
        color={Colors.buttons.secondary}
      />
      <br/>
      <br/>
      <br/>
      <Button
        width="150px"
        height="30px"
        textContent="Danger Button"
        color={Colors.buttons.danger}
        onClick={()=>alert('Hello World')}
        textColor="blue"
      />
      <br/>
      <br/>
      <br/>
      <Button
        width="150px"
        height="30px"
        textContent="Succes Button"
        color={Colors.buttons.succes}
      />
      </div>
      <div style={{
        width:'500px',
        height:'1000px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
      }}>
      <Image
        width="300px"
        height="300px"
        src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
      />
      </div>
      
      <br/>
      <br/>
      <Accordion
        width="250px"
        height="100px"
        child={
          <>
            <br />
            <br />
            <TextInput placeholder="min" />
            <br />
            <TextInput placeholder="max" />
            <br />
            <Button
              width="100%"
              height="40px"
              textContent="Submit"
              color={Colors.buttons.succes}
            />
          </>
        }
      />
      <Accordion
        width="250px"
        height="auto"
        child={
          <div style={{ width: "90%", marginLeft: "15px", marginTop: "20px" }}>
            <Checkbox name="Historical NFT" onChange={checkboxOnChange} />
            <Checkbox name="Checkbox Example" />
            <Checkbox name="Historical NFT" />
            <Button
              width="100%"
              height="40px"
              textContent="Submit"
              color={Colors.buttons.succes}
            />
          </div>
        }
      />
      <Accordion
        width="250px"
        height="40px"
        child={
          <>
            <br />

            <Select
              items={["test1", "test2", "test3"]}
            />
            <br />
            <Select
              items={["test1", "test2", "test3"]}
              onChange={selectBoxOnChange}
            />
          </>
        }
      />
      <Accordion width="250px" height="40px" />
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Create;
