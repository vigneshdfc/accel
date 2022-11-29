import React from "react";
import "./note.css";
import { Link } from "react-router-dom";
import well from "../../assets/Images/noteworthy/welltheory.jpg";
import fintech from "../../assets/Images/noteworthy/fintech.jpg";
import modern from "../../assets/Images/noteworthy/moderndeveloper.png";

const Recent = () => {
  return (
    <>
      <div className="noteworthy_grid">
        <ul>
          <li>
            <Link to="/news">RECENT</Link>
          </li>
          <li>
            <Link to="#">TOPICS</Link>
          </li>
          <li>
            <Link to="#">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="#">ACCEL</Link>
          </li>
        </ul>
        <div className="grid_note_one">
          <Link to="#">
            <div>
              <img src={fintech} width="100%" height="270px" />
            </div>
          </Link>
          <Link to="#">
            <div>
              <img src={fintech} width="100%" height="270px" />
            </div>
          </Link>
        </div>
        <div className="grid_note_two">
          <Link to="#">
            <div>
              <img src={well} width="100%" height="100%" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Recent;
