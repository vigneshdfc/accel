import React from "react";
import "./people.css";

const People = () => {
  return (
    <>
      <div className="people">
        <div className="people_main">
          <div className="people_info">
            <h1>People</h1>
            <p>
              Together, we are more than the sum of our individual
              contributions. Meet our worldwide team.
            </p>
            <div className="input_member">
              <input type="search" placeholder="Find a team member" />
            </div>
          </div>
        </div>
        <div className="people_areas">
          <ul>
            <li>
              <a href="#">GLOBAL</a>
            </li>
            <li>
              <a href="#">BAY AREA</a>
            </li>
            <li>
              <a href="#">LONDON</a>
            </li>
            <li>
              <a href="#">BANGALOUR</a>
            </li>
            <li>
              <a href="#">EMIRITUS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default People;
