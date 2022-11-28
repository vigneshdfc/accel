import React, { useState } from "react";
import "./sidenav.css";
import menu from "../../assets/Images/icons/menu.ico";
import logo from "../../assets/Images/icons/accel.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="menu" open={open} onClick={() => setOpen(!open)}>
        <img src={menu} alt="menu" width="24px" height="25px" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" width="80px" height="230px" />
      </div>
    </div>
  );
};
export default Sidebar;
