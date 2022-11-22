import React from "react";
import "./header.css";
import atoms from "../../assets/Images/icons/atoms.png";
const Head = () => {
  return (
    <>
      <div className="accel_atoms">
        <div className="atoms">
          <a href="#">
            <img src={atoms} width="143px" height="20px" />
          </a>
        </div>

        <div className="atom_content">
          <hr />
          <p>
            Introducing Atoms, a pre-seed funding program for early -stage
            startups in India!
          </p>
        </div>
        <div className="readbutton">
          <button>READ ABOUT&nbsp;IT HERE </button>
        </div>
      </div>
    </>
  );
};
export default Head;
