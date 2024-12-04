import CardContainer from "./CardContainer";
import { useOutletContext } from "react-router";

const Body = () => {
  const {
    listOfRest,
    setListOfRest,
    filteredListOfRest,
    setFilteredListOfRest,
  } = useOutletContext();
  return (
    <>
      <CardContainer
        listOfRest={listOfRest}
        setListOfRest={setListOfRest}
        filteredListOfRest={filteredListOfRest}
        setFilteredListOfRest={setFilteredListOfRest}
      />
    </>
  );
};

export default Body;
