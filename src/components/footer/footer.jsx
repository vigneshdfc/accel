import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import w from "../../assets/Icons/w.svg";

const Footer = () => {
  return (
    <div className="down-bar">
      <div className="footer">
        <Link to="/relationship">Relationship</Link>
        <Link to="/people">People</Link>
        <Link to="/noteworthy">NoteWorthy</Link>
        <a href="#">Jobs</a>
        <a href="#">connect</a>
      </div>
      <div className="phrase-bar">
        <div className="part-1">
          <div className="img-bar">
            <img src={w} alt="" />
          </div>
          <div className="line"></div>
          <div className="phrase">
            <a href="#">Proudly made with Webflow</a>
          </div>
        </div>
        <div className="part-2">
          <div>Accelⓒ2022</div>
          <div>Legal</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
