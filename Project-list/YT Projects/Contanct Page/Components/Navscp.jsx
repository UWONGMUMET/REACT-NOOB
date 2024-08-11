import React from "react";
import styles from "./Navscp.css";
import Logo from '../Assets/logo.png';

const Navscp = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src={Logo} alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navscp;
