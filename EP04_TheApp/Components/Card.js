

const Card = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, costForTwo, avgRating} = resData.info
  return (
    <div className="card">
      <img
        className="food-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
      />
      <p className="food-title">{name}</p>
      <div className="ctr">
        <p className="food-desc">{costForTwo}
        </p>
        <p className="food-rating">{avgRating}</p>
      </div>
      <div className="btn-ctr">
        <div className="more-btn btn">More</div>
        <div className="add-btn btn">Add</div>
      </div>
    </div>
  );
};

export default Card;