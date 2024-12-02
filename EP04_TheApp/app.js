import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
// import { dataList } from "./Utilities/mockData";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState([])

  /*
    UI Rendered
    11 15 20 745

    11 15 20 770
    UseEffect Executed
  */

  return (
    <div className="app">
      <Header />
      <SearchBar listOfRest={listOfRest} setListOfRest={setListOfRest} filteredListOfRest={filteredListOfRest} setFilteredListOfRest={setFilteredListOfRest} />
      <Body listOfRest={listOfRest} setListOfRest={setListOfRest} filteredListOfRest={filteredListOfRest} setFilteredListOfRest={setFilteredListOfRest}/>
    </div>
  );
};

// const heading = React.createElement("h1", {style:{color:"red"}},"Hello from React")

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
