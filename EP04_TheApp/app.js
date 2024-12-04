import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
// import { dataList } from "./Utilities/mockData";
import { useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import ErrorComp from "./Components/ErrorComp";

const AppLayout = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

  /*
    UI Rendered
    11 15 20 745

    11 15 20 770
    UseEffect Executed
  */

  return (
    <div className="app">
      <Header />
      <SearchBar
        listOfRest={listOfRest}
        setListOfRest={setListOfRest}
        filteredListOfRest={filteredListOfRest}
        setFilteredListOfRest={setFilteredListOfRest}
      />
      <Outlet
        context={{
          listOfRest,
          setListOfRest,
          filteredListOfRest,
          setFilteredListOfRest,
        }}
      />
    </div>
  );
};

// const heading = React.createElement("h1", {style:{color:"red"}},"Hello from React")

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>)

// const plate = document.querySelector(".error-comp")
