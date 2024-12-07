import Card from "./Card";
import ShimCard from "../Shimmer Components/Card";
import { useEffect } from "react";
import { Link } from "react-router";

const CardContainer = ({ listOfRest, setListOfRest, filteredListOfRest, setFilteredListOfRest }) => {
  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8658005&lng=75.8196917&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    // The data.json() method returns a Promise that resolves with the result of parsing the body text as JSON.
    const json = await data.json();
    // console.log("isko utha");

    setListOfRest(json?.data?.cards.slice(3));
    setFilteredListOfRest(json?.data?.cards.slice(3))  
    console.log(json?.data?.cards.slice(3));
    
      
  };

  if (listOfRest.length === 0) {
    return (
      <>
        <div className="card-container">
          <ShimCard />
          <ShimCard />
          <ShimCard />
          <ShimCard />
        </div>
        <div className="card-container">
          <ShimCard />
          <ShimCard />
          <ShimCard />
          <ShimCard />
        </div>
      </>
    );
    // return <h1>Loading...</h1>
  }

  return (
    <div className="card-container items-center h-full justify-center gap-8 w-[80%] flex-wrap flex">
      {filteredListOfRest.map((data, index) => (
        <Link className="card-link" to={"/RestMenu/"+data.card.card.info.id}><Card key={index} resData={data} /></Link>
      ))}
    </div>
  );
};

export default CardContainer;
