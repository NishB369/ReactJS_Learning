import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Body from "./Components/Body";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import ErrorComp from "./Components/ErrorComp";
import RestMenuCardContainer from "./Components/RestMenuCardContainer"; // Import the container

const AppLayout = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredListOfRest, setFilteredListOfRest] = useState([]);

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      {
        path: "/RestMenu/:restId",
        element: <RestMenuCardContainer />, // Rendering the container here
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
