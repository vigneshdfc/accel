import React from "react";
import "./hero.css";
import add from "../../assets/video/addmp4.mp4";
import clothadd from "../../assets/video/clothadd.mp4";
import search from "../../assets/Images/icons/searchicon.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_slide">
          <h1>First partner to exceptional teams everywhere</h1>
          <div className="search-bar">
            <div className="search">
              <input
                type="text"
                placeholder="SEARCH FOR A COMPANY,FOUNDER,OR PARTNER"
              />
            </div>
            {/*<div className="searchicon">
              <img src={search} alt="search" />
  </div>*/}
          </div>
        </div>

        <div className="brand_adv">
          <div className="video">
            <video controls autoplay muted id="myvideo">
              <source src={add} type="video/mp4" width="100%" />
            </video>
          </div>
          <div className="myvideo">
            <video controls autoplay muted id="myvideo">
              <source src={clothadd} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
