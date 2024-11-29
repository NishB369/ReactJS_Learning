import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{style:{color:"red"}},"Rendereding React 😀")
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading)

// let jsxHeading = <h1 style={{color:"red"}}>This is a JSx Heading ✨</h1>
// root.render(jsxHeading)

// console.log(heading);
// console.log(typeof heading);

// console.log(jsxHeading);
// console.log(typeof jsxHeading);

// console.table([[heading, typeof heading],[jsxHeading, typeof jsxHeading]])

let TitleComp = () => <h1>This is a heading from Functional Comp</h1>;

let CompComp = () => (
  <>
    {TitleComp()}
    <h1>This is a heading from JSX</h1>
  </>
);

root.render(<CompComp />);
