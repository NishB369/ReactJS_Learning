import { useState } from "react";

const SearchBar = ({ listOfRest, setListOfRest, filteredListOfRest, setFilteredListOfRest }) => {
  // whole component is re-rendered (the function in which state var are defined)
  const [btnLogin, setBtnLogin] = useState(true);
  // console.log("re-rendered");
  const [searchVal, setSearchVal] = useState("")
  
  
  return (
    <div className="search-bar">
      <input value={searchVal} placeholder="Search your food here..." onChange={
        (e)=>{
          setSearchVal(e.target.value)
        }
      }></input>
      <button onClick={()=>{
        // console.log(searchVal);
        const searchedList = listOfRest.filter((res)=>
          res.card.card.info.name.toLowerCase().includes(searchVal.toLowerCase())
        )
        // console.log(listOfRest[1]);
        // console.log(listOfRest[1].card.card.info.name.includes("Pizza"));
        
        // listOfRest.map((data)=>{
        //   console.log(data.card.card.info.name);
          
        // })
        setFilteredListOfRest(searchedList)
        }}>Search</button>
      <button
        style={{ backgroundColor: "#252525", color: "white" }}
        
        onClick={() => {
          let filteredList = listOfRest.filter(
            (res) => res.card.card.info.avgRating > 4
          );
          setFilteredListOfRest(filteredList);
                    
        }}
      >
        Top Rated Rest
      </button>
      <button
        style={{ backgroundColor: "#252525", color: "white" }}
        onClick={() => {
          let filteredList = listOfRest.filter(
            (res) => res.card.card.info.avgRating <= 4
          );
          setFilteredListOfRest(filteredList);
          
        }}
      >
        Low Rated Rest
      </button>

      <button
        style={{ backgroundColor: "#252525", color: "white" }}
        onClick={() => {
          btnLogin ? setBtnLogin(false) : setBtnLogin(true);
        }}
      >
        {btnLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default SearchBar;
