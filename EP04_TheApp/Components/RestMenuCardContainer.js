import { useState, useEffect } from "react";
import RestMenuCard from "./RestMenuCard";
import { useParams } from "react-router";

const RestMenuCardContainer = () => {
  const [restMenuList, setRestMenuList] = useState([]);

  const idVal = useParams();
  console.log(idVal.restId);
  // console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8658005&lng=75.8196917&restaurantId="+idVal.restId+"&catalog_qa=undefined&query=Pizza&submitAction=ENTER");
  

  useEffect(() => {
    fetchList();
    console.log(restMenuList);
  }, []);

  const fetchList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8658005&lng=75.8196917&restaurantId="+idVal.restId+"&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    const json = await data.json();
    const menuItems =
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    console.log(json.data.cards);

    if (menuItems) {
      setRestMenuList(menuItems);
    }
  };

  return (
    <div>
      {restMenuList.length > 0 ? (
        restMenuList.map((menuItem, index) => (
          <RestMenuCard key={index} menuItem={menuItem.card?.info} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RestMenuCardContainer;
