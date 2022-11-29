import React from "react";
import "./nav.css";
import devalley from "../../assets/Images/icons/devalley.svg";
import menu from "../../assets/Images/icons/menu.ico";

const Navbar = () => {
  return (
    <>
      <div className="nav_logo">
        <div className="menu_nav">
          <img src={menu} />
        </div>
        <div className="devalley">
          <img src={devalley} />
        </div>
      </div>
    </>
  );
};
export default Navbar;
