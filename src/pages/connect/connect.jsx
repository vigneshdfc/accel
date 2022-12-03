import React from "react";
import "./connect.css";
import asia from "../../assets/Images/noteworthy/asia.jpg";

const Connect = () => {
  return (
    <>
      <div className="connect">
        <div>
          <img src={asia} width="100%" height="" />
          <div className="contact">
            <h1>Bangalore</h1>
            <h4>
              886/A, Confident Electra 17th E Main Road, opposite Koramangala
              club, 6th Block, Koramangala 560095 Bengaluru, Karnataka, India
              +91 80 43539800
            </h4>

            <h3>
              Accel Launchpad Koramangala Club Road, 881, 6th Cross Rd, 6th
              Block, Koramangala 560095 Bengaluru, Karnataka, India
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Connect;
