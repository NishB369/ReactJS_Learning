// // creating the heading in root
// // core functionality of React
// let heading = React.createElement("h1", {style:{color:"black", backgroundColor:"grey", padding:"5px 30px", width:"fit-content"}}, "Hello World from React!");
// // {} is an obj used to give attributes to tag!

// // this returns an object
// // so React.createElement is nothing but a js obj
// // props -> includes children and attributes
// // console.log(heading);

// // rendering logic related to DOM
// // functionlaity of ReactDOM
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // take the obj and create a html elem from the object of react elem and put it on document
// root.render(heading);

// ------------------------------------------

// creating nested elem
/*
    <div id="parent">
        <div id="child">
            <h1>Hello from React Lode...</h1>
        </div>
    </div>
*/

// use the React.createElement along with 3rd parameter
// const parentDiv = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { style: { color: "red" } },
//       "Hello from React Lodu"
//     )
//   )
// );

// // // rendering logic related to DOM
// // // functionlaity of ReactDOM
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // // take the obj and create a html elem from the object of react elem and put it on document
// root.render(parentDiv);

// creating siblings or adding multiple elements
// we can use array
// react will throw an error of needing keys
const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { style: { color: "red" } },
      "Hello from React Lodu"
    ),
    React.createElement(
      "h1",
      { style: { color: "blue" } },
      "Hello from React Gandu"
    ),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { style: { color: "red" } },
      "Hello from React Lodu"
    ),
    React.createElement(
      "h1",
      { style: { color: "blue" } },
      "Hello from React Gandu"
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
