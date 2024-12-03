const filtersList = [
  "Pure-Veg",
  "Nov-Veg",
  "Less than 30 mins",
  "Rs 300-600",
  "Less than Rs 300",
];

const SearchBar = () => {
  return (
    <>
      <div className="main-bar">
        <div className="search-bar">
          <input placeholder="What's on your mind?"></input>
          <button className="bi bi-search"></button>
        </div>
        <div className="filter-bar">
            {filtersList.map((filter, index)=>(
                <div className="filter" key={index}>{filter}</div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
