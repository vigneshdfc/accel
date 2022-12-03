import React from "react";
import "./topics.css";
import { Link } from "react-router-dom";
import { accelData } from "../../data/noteworthy/accel";
import right from "../../assets/Images/icons/rightarrow.svg";

const Accel = () => {
  return (
    <>
      <div className="note_topic">
        <div className="sidenav_topics">
          <h1>Note worthy</h1>
          <ul>
            <li>
              <Link to="/news">RECENT</Link>
            </li>
            <li>
              <Link to="/noteworthy-topics">TOPICS</Link>
            </li>
            <li>
              <Link to="/noteworthy-portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="#">ACCEL</Link>
            </li>
          </ul>
        </div>
        <div className="topics_person">
          {accelData.map((accel) => (
            <div>
              <Link to="#">
                <img src={accel.image} width="470px" height="280px" />
                <div className="topic_one">
                  <h4>TOPICS</h4>
                  <b>{accel.para}</b>
                  <div className="right_arrow">
                    <img src={accel.icon} width="35px" height="35px" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="more_note">
        <div>
          <h2>Next</h2>
        </div>
        <div className="right_arrow">
          <img src={right} width="35px" height="35px" />
        </div>
      </div>
    </>
  );
};
export default Accel;
