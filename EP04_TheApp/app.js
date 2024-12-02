import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
import { dataList } from "./Utilities/mockData";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [listOfRest, setListOfRest] = useState([]);

  /*
    UI Rendered
    11 15 20 745

    11 15 20 770
    UseEffect Executed
  */

  return (
    <div className="app">
      <Header />
      <SearchBar setListOfRest={setListOfRest} />
      <Body listOfRest={listOfRest} setListOfRest={setListOfRest} />
    </div>
  );
};

// const heading = React.createElement("h1", {style:{color:"red"}},"Hello from React")

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
