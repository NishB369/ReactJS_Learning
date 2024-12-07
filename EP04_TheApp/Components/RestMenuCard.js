const RestMenuCard = ({ menuItem }) => {
    const {
      name = "Unnamed Item",
      imageId = "",
      defaultPrice,
      price,
      description = "No description available",
    } = menuItem || {};

    const dispPrice = (defaultPrice||price)/100
  
    return (
      <div className="rest-menu h-[300px] w-[225px] bg-orange-100 flex items-center flex-col mb-1 rounded-md shadow-md py-4 gap-1 border-[1px] border-[#252525] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
          <img className="h-[50%] w-[90%] rounded-md object-cover object-center mb-2"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              imageId
            }
            alt={name}
          />
          <h1 className="text-xl w-[90%] font-bold leading-5 h-[20%]">{name}</h1>
          <h3 className="w-[90%] text-2xl font-bold text-orange-600">{"₹" + dispPrice}</h3>
          <p className="w-[90%] text-xs">
            {description.length > 50 ? `${description.substring(0, 50)}...` : description}
          </p>
      </div>
    );
  };
  
  export default RestMenuCard;
  