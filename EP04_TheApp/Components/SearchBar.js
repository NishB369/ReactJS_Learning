import { dataList } from "../Utilities/mockData";

const SearchBar = ({ setListOfRest }) => {
  return (
    <div className="search-bar">
      <textarea placeholder="Search your food here..."></textarea>
      <button>Search</button>
      <button
        style={{ backgroundColor: "#252525", color: "white" }}
        onClick={() => {
          let filteredList = dataList.filter((res) => res.card.card.info.avgRating > 4);
          setListOfRest(filteredList);
        }}
      >
        Top Rated Rest
      </button>
      <button
        style={{ backgroundColor: "#252525", color: "white" }}
        onClick={() => {
          let filteredList = dataList.filter((res) => res.card.card.info.avgRating < 4);
          setListOfRest(filteredList);
        }}
      >
        Low Rated Rest
      </button>
    </div>
  );
};

export default SearchBar;
