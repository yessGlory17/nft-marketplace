import React,{useState} from "react";
import TextInput from "./base/TextInput";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Search.css"

const Search = ({onSearch}) => {
  const [statusFilters, setStatusFilters] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [collectionFilters, setCollectionFilters] = useState({
    collection1: false,
    collection2: false,
    collection3: false,
  });
  const [categoryFilters, setCategoryFilters] = useState({
    category1: false,
    category2: false,
    category3: false,
  });

  const handleSearch = () => {
    const selectedFilters = {
      status: statusFilters,
      price: priceRange,
      collections: collectionFilters,
      categories: categoryFilters,
    };
    onSearch(selectedFilters);
  };

  return (
    <>
    <TextInput
      placeholder="Explore NFTs"
      icon={<AiOutlineSearch size="30" color="rgba(48,118,234,1)" />}
    />
    <div className="search-bar">
      <div className="filter">
        <h2>Status</h2>
        <label>
          <input
            type="checkbox"
            checked={statusFilters.inStock}
            onChange={() =>
              setStatusFilters({
                ...statusFilters,
                inStock: !statusFilters.inStock,
              })
            }
          />
          In Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={statusFilters.outOfStock}
            onChange={() =>
              setStatusFilters({
                ...statusFilters,
                outOfStock: !statusFilters.outOfStock,
              })
            }
          />
          Out of Stock
        </label>
      </div>
      <div className="filter">
        <h2>Price</h2>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
        />
      </div>
      <div className="filter">
        <input type="checkbox"/>Collections                        {/*just a label without input*/}
        {/* Similar structure as Status, but with collection filters */}
      </div>
      <div className="filter">
        <input type="checkbox"/>Categories
        {/* Similar structure as Status, but with category filters */}
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
    </>
  );
};

export default Search;
