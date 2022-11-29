import React, { useState } from "react";
import "./sidenav.css";
import menu from "../../assets/Images/icons/menu.ico";
import logo from "../../assets/Images/icons/accel.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="menu" open={open} onClick={() => setOpen(!open)}>
        <img src={menu} alt="menu" width="24px" height="25px" />
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
