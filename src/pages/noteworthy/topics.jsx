import React from "react";
import "./topics.css";
import "./note.css";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <>
      <div>
        <div className="sidenav_note">
          <h1>Note worthy</h1>
          <ul>
            <li>
              <Link to="/news">RECENT</Link>
            </li>
            <li>
              <Link to="/noteworthy-topics">TOPICS</Link>
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
export default Topics;
