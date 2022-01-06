import React from "react";
import Input from "./base/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Input
      placeholder="Explore NFTs"
      icon={<AiOutlineSearch size="30" color="rgba(48,118,234,1)" />}
    />
  );
};

export default Search;
