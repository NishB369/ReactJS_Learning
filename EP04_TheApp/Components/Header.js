import {Link} from "react-router"

let liStyle = {
    marginRight: "30px",
    cursor: "pointer",
  };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-ctr" onClick={() => (window.location.href = '/')}>
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
          {/* <li style={liStyle} onClick={() => (window.location.href = '/')}>Home</li>
          <li style={liStyle} onClick={() => (window.location.href = '/About')}>About</li>
          <li style={liStyle} onClick={() => (window.location.href = '/Contact')}>Contact</li>
          <li style={liStyle}>Cart</li> */}

          <li style={liStyle}><Link className="link" to={"/"}>Home</Link></li>
          <li style={liStyle}><Link className="link" to={"/About"}>About</Link></li>
          <li style={liStyle}><Link className="link" to={"/Contact"}>Contact</Link></li>
          <li style={liStyle}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
