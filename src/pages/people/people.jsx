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
          <a href="#">GLOBAL</a>
          <a href="#">BAY AREA</a>
          <a href="#">LONDON</a>
          <a href="#">BANGALORE</a>
          <a href="#">EMIRITUS</a>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export default People;
