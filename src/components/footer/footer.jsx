import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import w from "../../assets/Icons/w.svg";

const Footer = () => {
  return (
    <div className="down-bar">
      <div className="footer">
        <Link to="/">
          <h1>Relationship</h1>
        </Link>
        <Link to="/">
          <h1>People</h1>
        </Link>
        <Link to="/noteworthy">
          <h1>NoteWorthy</h1>
        </Link>
        <Link to="#">
          <h1>Jobs</h1>
        </Link>
        <Link to="/connect">
          <h1>connect</h1>
        </Link>
      </div>
      <div className="phrase-bar">
        <div className="part-1">
          <div className="img-bar">
            <img src={w} alt="" width="16px" height="16px" />
          </div>
          <div className="phrase">
            <a href="#">Proudly made with Webflow</a>
          </div>
        </div>
        <div className="part-2">
          <div>
            <h6>Accelⓒ2022</h6>
          </div>
          <div>
            <h6>Legal</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
