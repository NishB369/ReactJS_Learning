

const Card = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, costForTwo, avgRating, } = resData.card.card.info
  return (
    <div className="card h-[300px] w-[225px] bg-orange-100 flex items-center flex-col mb-1 rounded-md shadow-md py-4 gap-2 border-[1px] border-[#252525] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
      <img
        className="food-img h-[50%] w-[90%] rounded-md object-cover object-center"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
      />
      <p className="food-title text-2xl w-[90%] font-bold leading-5 h-[20%]">{name}</p>
      <div className="ctr w-[90%] flex items-center justify-between">
        <p className="food-desc text-xl text-orange-500 font-bold">{costForTwo}
        </p>
        <p className="food-rating font-bold text-green-600">{avgRating}</p>
      </div>
      <div className="btn-ctr w-[90%] flex items-center justify-between">
        <div className="more-btn btn w-[48%] rounded-sm px-4 py-1 bg-orange-500 text-white flex items-center justify-center">More</div>
        <div className="add-btn btn w-[48%] rounded-sm px-4 py-1 bg-orange-500 text-white flex items-center justify-center">Add</div>
      </div>
    </div>
  );
};

export default Card;