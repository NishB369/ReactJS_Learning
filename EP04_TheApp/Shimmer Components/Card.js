

const ShimCard = () => {
  return (
    <div className="card shim-card">
      <img
        className="food-img shim-food-img"
      />
      <p className="food-title shim-title"></p>
      <div className="ctr shim-ctr">
        <p className="food-desc">
        </p>
        <p className="food-rating"></p>
      </div>
      <div className="btn-ctr shim-btn-ctr">
        <div className="more-btn btn shim-btn"></div>
        <div className="add-btn btn shim-btn"></div>
      </div>
    </div>
  );
};

export default ShimCard;