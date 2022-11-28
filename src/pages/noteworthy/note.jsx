import React from "react";
import { Link } from "react-router-dom";
import "./note.css";

const Noteworthy = () => {
  return (
    <>
      <div className="noteworth">
        <div className="sidenav_note">
          <h1>Note worthy</h1>
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
        </div>
      </div>
    </>
  );
};
export default Noteworthy;
