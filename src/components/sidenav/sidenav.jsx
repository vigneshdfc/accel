import React, { useState } from "react";
import "./sidenav.css";
import menu from "../../assets/Images/icons/menu.ico";
import logo from "../../assets/Images/icons/accel.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarIsOn, setSidebarState] = useState(false);

  const hamburger = (
    <img
      src={menu}
      onClick={(e) => {
        e.preventDefault();
        setSidebarState(true);
      }}
    />
  );

  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <Link to="#">
          <h2>Relationship</h2>
        </Link>
        <b
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(false);
          }}
        >
          close
        </b>
      </div>
    </div>
  );
  return (
    <div className="navbar">
      <div className="menu">
        {hamburger} {sidebarIsOn && Sidebar}
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="80px" height="230px" />
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
