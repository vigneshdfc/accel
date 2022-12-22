import React from "react";
import "./note.css";
import { Link } from "react-router-dom";
import well from "../../assets/Images/noteworthy/we.jpg";
import fintech from "../../assets/Images/noteworthy/fintech.jpg";
import modern from "../../assets/Images/noteworthy/mod.png";
import right from "../../assets/Images/icons/right-arrow.png";
import akto from "../../assets/Images/noteworthy/akto.jpg";
import accel from "../../assets/Images/noteworthy/accel.jpg";
import mergo from "../../assets/Images/noteworthy/merrgo.png";
import euro from "../../assets/Images/noteworthy/euroscap.jpg";

const Recent = () => {
  return (
    <>
      <div className="noteworthy_grid">
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
              <Link to="/noteworthy-portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/noteworthy-accel">ACCEL</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="fintech_note">
            <div className="grid_note_one">
              <div>
                <Link to="#">
                  <div>
                    <img src={fintech} width="100%" height="300px" />
                  </div>
                  <div></div>
                </Link>
              </div>
              <Link to="#">
                <div>
                  <img src={fintech} width="100%" height="300px" />
                </div>
              </Link>
            </div>
            <div className="grid_note_two">
              <div className="well">
                <Link to="#">
                  <div>
                    <img src={well} width="100%" height="100%" />
                  </div>
                  <div className="well_theory">
                    <h4>PORTFOLIO</h4>
                    <div>
                      <b>
                        Our investment in WellTheory : The virutual care
                        plantform for Autoimmune Disease
                      </b>
                    </div>
                    <div className="right_arrow">
                      <img src={right} width="35px" height="35px" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="note_worth">
            <div className="grid_note_three">
              <div className="modern">
                <Link to="#">
                  <div className="modern-img">
                    <img src={modern} width="430px" height="415px" />
                  </div>
                  <div className="well_theory">
                    <h4>PORTFOLIO</h4>
                    <div>
                      <b>
                        Our Countinued Support of EdgeDB: The Modern Database
                        for the Modern Developer
                      </b>
                    </div>
                    <div className="right_arrow">
                      <img src={right} width="35px" height="35px" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid_note_four">
              <div className="akto_ceo_note">
                <div className="akto_note">
                  <h4>P O R T F O L I O</h4>
                  <p>
                    Our seed Investment in Akto: Bulding the Smoothest API
                    Security Platform
                  </p>
                  <div className="right_arrow">
                    <img src={right} width="35px" height="35px" />
                  </div>
                </div>
                <div>
                  <Link to="#">
                    <div>
                      <img src={akto} width="100%" height="340px" />
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="#">
                <div>
                  <img src={accel} width="100%" height="300px" />
                </div>
              </Link>
            </div>
          </div>
          <div className="note_worth_two">
            <div className="grid_note_five">
              <div className="akto_ceo_note">
                <div className="mergo_note">
                  <h4>P O R T F O L I O</h4>
                  <p>
                    Our Investment in Merge:The Leading Unified API for
                    Integrations
                  </p>
                  <div className="right_arrow">
                    <img src={right} width="35px" height="35px" />
                  </div>
                </div>
                <div>
                  <Link to="#">
                    <div>
                      <img src={mergo} width="100%" height="340px" />
                    </div>
                  </Link>
                </div>
              </div>
              <Link to="#">
                <div>
                  <img src={fintech} width="100%" height="300px" />
                </div>
              </Link>
            </div>
            <div className="grid_note_six">
              <div className="well">
                <Link to="#">
                  <div className="euro_brand">
                    <img src={euro} width="430px" height="415px" />
                  </div>
                  <div className="euro">
                    <div>
                      <b>Accel 2022 Euroscape :Reset</b>
                    </div>
                    <div className="right_arrow">
                      <img src={right} width="35px" height="35px" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more_note">
        <div>
          <h2>View More</h2>
        </div>
        <div className="right_arrow">
          <img src={right} width="35px" height="35px" />
        </div>
      </div>
    </>
  );
};
export default Recent;
