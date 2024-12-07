import { useState } from "react";

const SearchBar = ({ listOfRest, setListOfRest, filteredListOfRest, setFilteredListOfRest }) => {
  // whole component is re-rendered (the function in which state var are defined)
  const [btnLogin, setBtnLogin] = useState(true);
  // console.log("re-rendered");
  const [searchVal, setSearchVal] = useState("")
  
  
  return (
    <div className="search-bar h-16 flex items-center justify-center gap-4 bg-orange-200">
      <input value={searchVal} placeholder="Search your food here..." onChange={
        (e)=>{
          setSearchVal(e.target.value)
        }
      } className="h-10 px-4 bg-orange-100 text-black placeholder:text-black"></input>

      <button className="bg-[#252525] text-white px-6 py-[8px] rounded-sm ml-[-15px]" onClick={()=>{
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
      <button className="bg-[#252525] text-white px-6 py-[8px] rounded-sm"
        
        onClick={() => {
          let filteredList = listOfRest.filter(
            (res) => res.card.card.info.avgRating > 4
          );
          setFilteredListOfRest(filteredList);
                    
        }}
      >
        Top Rated Rest
      </button>
      <button className="bg-[#252525] text-white px-6 py-[8px] rounded-sm"
        onClick={() => {
          let filteredList = listOfRest.filter(
            (res) => res.card.card.info.avgRating <= 4
          );
          setFilteredListOfRest(filteredList);
          
        }}
      >
        Low Rated Rest
      </button>

      <button className="bg-[#252525] text-white px-6 py-[8px] rounded-sm"
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
