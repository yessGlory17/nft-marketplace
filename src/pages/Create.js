import react, { useEffect } from "react";
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
import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Create = () => {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  useEffect(()=>{
    activateBrowserWallet();
  },[])

  return (
    <>
      <Header />
    </>
  );
};

export default Create;
