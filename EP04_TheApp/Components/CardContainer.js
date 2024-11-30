import Card from "./Card";

const CardContainer = ({ listOfRest }) => {
  return (
    <div className="card-container">
      {listOfRest.map((data, index) => (
        <Card key={index} resData={data} />
      ))}
    </div>
  );
};

export default CardContainer;
