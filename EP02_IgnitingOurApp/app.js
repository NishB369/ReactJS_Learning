import React from "react";
import ReactDOM from "react-dom/client"
/*this is showing a issue when I am using local port but working when used with npx command why?*/

const parentDiv = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { style: { color: "red" } },
        "Hello from React"
      ),
      React.createElement(
        "h1",
        { style: { color: "blue" } },
        "Hello from React"
      ),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { style: { color: "red" } },
        "Hello from React"
      ),
      React.createElement(
        "h1",
        { style: { color: "blue" } },
        "Hello from React"
      ),
    ]),
  ]);
  
  // // rendering logic related to DOM
  // // functionlaity of ReactDOM
  // if something is already in root div then it will be replaced by what is being render
  // for some ms it will be loaded and then gone
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // // take the obj and create a html elem from the object of react elem and put it on document
  root.render(parentDiv);
  