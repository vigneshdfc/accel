import React from "react";
import "./template.css";
import pasword from "../../assets/Images/relationship/1password.svg";
import grp from "../../assets/Pictures/password.jpeg";

const Pass = () => {
  return (
    <div className="pass">
      <div className="text-part">
        <div className="img">
          <img src={pasword} alt="" width="200px" height="200px" />
        </div>
        <div className="text">
          <div className="founders">
            <h5>FOUNDERS</h5>
            <div className="line"></div>
            <p>Jeff Shiner (CEO)</p>
            <p> Roustem Karimov</p>
            <p>Dave Teare</p>
          </div>
          <div className="partners">
            <h5>PARTNERS</h5>
            <div className="line"></div>
            <p>Arun Mathew</p>
            <p>Ethan Choi</p>
          </div>
        </div>
      </div>
      <div className="image-part">
        <div className="image">
          <img src={grp} alt="" />
        </div>
        <div className="txt">
          <p>
            1Password provides a place for users — both organizations and
            individuals — to store passwords and other sensitive information.
            The company provides a virtual vault, which is itself locked with a
            master password. Founded in 2006, 1Password didn’t accept outside
            investment until the Accel-led Series A in 2019.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Pass;
