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
    <div className="h-auto w-auto bg-orange-200 flex items-center justify-center flex-wrap py-6  ">
      <CardContainer
        listOfRest={listOfRest}
        setListOfRest={setListOfRest}
        filteredListOfRest={filteredListOfRest}
        setFilteredListOfRest={setFilteredListOfRest}
      />
    </div>
  );
};

export default Body;
