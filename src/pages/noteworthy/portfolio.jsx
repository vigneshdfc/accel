import React from "react";
import "./topics.css";
import { Link } from "react-router-dom";

import right from "../../assets/Images/icons/rightarrow.svg";
import { portfolioData } from "../../data/noteworthy/portfolio";

const Portfolio = () => {
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
              <Link to="/noteworthy-accel">ACCEL</Link>
            </li>
          </ul>
        </div>
        <div className="topics_person">
          {portfolioData.map((port) => (
            <div>
              <Link to="#">
                <img src={port.image} width="470px" height="280px" />
                <div className="topic_one">
                  <h4>TOPICS</h4>
                  <b>{port.para}</b>
                  <div className="right_arrow">
                    <img src={port.icon} width="35px" height="35px" />
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
export default Portfolio;
