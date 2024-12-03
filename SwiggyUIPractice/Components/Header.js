const navItemsList = [
    { text: "Profile", logo: `bi bi-person-circle` },
    { text: "Offers", logo: `bi bi-percent` },
    { text: "Help", logo: `bi bi-question-circle` },
    { text: "Cart", logo: `bi bi-bag` },
  ];
  
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png" />
      </div>
      <div className="address">Shanti Nagar, Tri Nagar, Delhi - 110035</div>
      <div className="nav-bar">
        {navItemsList.map((item, index) => (
          <div key={index} className="nav-item">
            <div className={`nav-item-left ${item.logo}`}></div>
            <div className="nav-item-right">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
