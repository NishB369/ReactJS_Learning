let liStyle = {
    marginRight: "30px",
    cursor: "pointer",
  };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-ctr" onClick={() => window.location.reload()}>
        <img
          width={"40px"}
          height={"40px"}
          src="https://www.svgrepo.com/show/490738/food-restaurant.svg"
        />
      </div>

      <div className="nav-bar">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li style={liStyle}>Home</li>
          <li style={liStyle}>About</li>
          <li style={liStyle}>Contact</li>
          <li style={liStyle}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
