import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import '../styles/Explore.css';
import Header from "../components/Header";
const Explore = () => {
  return (
    <div id="explore">
      <Header />
      <div id="list-container">
        <CardList list={exploreList} />
      </div>
    </div>
  );
};

export default Explore;
