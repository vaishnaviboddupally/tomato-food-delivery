import React from "react";
import "./Header.css";
const headerStyle = {
  background: 'url("/header_img.png") no-repeat',
  height: "34vw",
  backgroundSize: "contain",
  position: "relative",
};
const Header = () => {
  return (
    <div style={headerStyle} className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
