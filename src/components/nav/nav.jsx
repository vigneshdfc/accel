import React, { useState } from "react";
import "./nav.css";
import devalley from "../../assets/Images/icons/devalley.png";
import menu from "../../assets/Images/icons/menu.ico";
import { Link } from "react-router-dom";
import arrow from "../../assets/Images/icons/purplearrow.png";
import close from "../../assets/Images/icons/close.png";
import twitter from "../../assets/Images/icons/twitter.png";
import linkedin from "../../assets/Images/icons/linkedin.png";

const Navbar = () => {
  const [active, setActive] = useState();
  return (
    <>
      <div className={active ? "nav_main active" : "nav_main"}>
        <div className="serch_nav">
          <div className="scroll">
            <div className="input_search">
              <input type="text" placeholder="search" />
            </div>
            <Link to="/">
              <h1>
                Relationship <img src={arrow} width="40px" height="40px" />
              </h1>
            </Link>
            <Link to="/">
              <h1>
                People <img src={arrow} width="40px" height="40px" />
              </h1>
            </Link>
            <Link to="/">
              <h1>
                Noteworthy <img src={arrow} width="40px" height="40px" />
              </h1>
            </Link>
            <Link to="/">
              <h1>
                Jobs <img src={arrow} width="40px" height="40px" />
              </h1>
            </Link>
            <Link to="/">
              <h1>
                Connect <img src={arrow} width="40px" height="40px" />
              </h1>
            </Link>
          </div>
          <div className="twitter">
            <div>
              <a href="https://twitter.com/accel">
                <img src={twitter} width="30px" height="30px" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={linkedin} width="30px" height="30px" />
              </a>
            </div>
          </div>
        </div>

        <div className="nav_logo">
          <div className="menu_nav">
            {!active ? (
              <img src={menu} onClick={() => setActive(true)} />
            ) : (
              <img src={close} onClick={() => setActive(false)} />
            )}
          </div>
          <div className="devalley">
            <Link to="/">
              <img src={devalley} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
