import CardContainer from "./CardContainer";

const Body = ({ listOfRest, setListOfRest, filteredListOfRest, setFilteredListOfRest}) => {
  return (
    <>
      <CardContainer listOfRest={listOfRest} setListOfRest={setListOfRest} filteredListOfRest={filteredListOfRest} setFilteredListOfRest={setFilteredListOfRest}/>
    </>
  );
};

export default Body;
