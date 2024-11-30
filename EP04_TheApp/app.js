import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
import { dataList } from "./Utilities/mockData";
import { useState } from "react";

const AppLayout = () => {
  const [listOfRest, setListOfRest] = useState(dataList);
  
  return (
    <div className="app">
      <Header />
      <SearchBar setListOfRest={setListOfRest} />
      <Body listOfRest={listOfRest} />
    </div>
  );
};

// const heading = React.createElement("h1", {style:{color:"red"}},"Hello from React")

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
