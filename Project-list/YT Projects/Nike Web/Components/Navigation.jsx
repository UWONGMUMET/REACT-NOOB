import React from "react";
import BrandLogo from "../images/brand_logo.png";
import '../Components/Navi.css';

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={BrandLogo} alt="Logo" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
