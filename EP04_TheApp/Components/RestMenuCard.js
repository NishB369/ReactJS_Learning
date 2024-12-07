const RestMenuCard = ({ menuItem }) => {
    const {
      name = "Unnamed Item",
      imageId = "",
      price = 0,
      description = "No description available",
    } = menuItem || {};
  
    return (
      <div className="rest-menu">
        <div className="rest-menu-left">
          <h1>{name}</h1>
          <h3>{"₹" + price / 100}</h3>
          <p>{description}</p>
        </div>
        <div className="rest-menu-right">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              imageId
            }
            alt={name}
          />
        </div>
      </div>
    );
  };
  
  export default RestMenuCard;
  