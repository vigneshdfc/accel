import React, { useEffect, useState } from "react";
import "./people.css";
import { peopleData } from "../../data/people";

const People = () => {
  // const [people, setPeople] = useState();
  // useEffect(() => {
  //   setPeople(peopleData.find((d) => d.title === id));
  // }, [id]);
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
        <div className="people-grid">
          {peopleData.map((people) => (
            <div className="grid-1">
              <div className="people-img">
                <img src={people.Image} />
              </div>
              <div className="place">
                <h4>{people.Name}</h4>
                <h5>{people.Area}</h5>
              </div>
              <div className="languages">
                <h3>{people.lang}</h3>
                <h4> {people.media}</h4>
              </div>
            </div>
          ))}
          {/* <div className="grid-2">
            <div className="people-img">
              <img src={mahen} alt="" />
            </div>
            <div className="place">
              <h5>Mahendran Balachandran</h5>
              <h4> Bangalore</h4>
            </div>
            <div className="languages">
              <h3>Consumer</h3>
              <h3>Media</h3>
              <h3> Cloud/Saas</h3>
            </div>
          </div>
          <div className="grid-3">
            <div className="people-img">
              <img src={luca} alt="" />
            </div>
            <div className="place">
              <h5>Luca Bocchio</h5>
              <h4>London</h4>
            </div>
            <div className="languages">
              <h3>Consumer</h3>
              <h3>Finetech</h3>
              <h3> Services</h3>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default People;
