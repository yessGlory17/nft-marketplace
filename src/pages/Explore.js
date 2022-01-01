import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import '../styles/Explore.css';
import Header from "../components/Header";
import Search from "../components/Search";
const Explore = () => {
  return (
    <div id="explore">
      <Header />
      <Search/>
      <div id="list-container">
        <CardList list={exploreList} />
      </div>
    </div>
  );
};

export default Explore;
