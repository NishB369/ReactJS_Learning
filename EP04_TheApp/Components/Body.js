import CardContainer from "./CardContainer";

const Body = ({ listOfRest, setListOfRest}) => {
  return (
    <>
      <CardContainer listOfRest={listOfRest} setListOfRest={setListOfRest}/>
    </>
  );
};

export default Body;
