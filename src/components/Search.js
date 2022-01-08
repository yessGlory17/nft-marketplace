import React from "react";
import TextInput from "./base/TextInput";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <TextInput
      placeholder="Explore NFTs"
      icon={<AiOutlineSearch size="30" color="rgba(48,118,234,1)" />}
    />
  );
};

export default Search;
