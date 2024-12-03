import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
import { data } from "./Utility/mockData";

const App = () => {
  return (
    <>
      <Header />
      <div className="title-ctr">
        <h1>Shakes</h1>
        <h4>Tempt your taste buds with cold and thick milkshakes.</h4>
      </div>
      <SearchBar />
      <h3>Restaurants to explore</h3>
      <div className="cards-ctr">
        {data.map((res, index)=>(
          <Card key={index} resData={res}/>
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
