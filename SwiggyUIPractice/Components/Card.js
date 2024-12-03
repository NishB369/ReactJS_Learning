const Card = (props) => {
  const { resData } = props;
//   console.log(typeof resData);

  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = resData.card.card.info;
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h1>{name}</h1>
      <div className="rating-ctr">
        <div className="bi bi-star-fill rating-star"></div>
        <div>{avgRating}</div>
        <div>•</div>
        <div>{sla.slaString}</div>
      </div>
      <p>{cuisines.join(" ")}</p>
      <p style={{ marginTop: "4px" }}>{areaName}</p>
    </div>
  );
};

export default Card;
