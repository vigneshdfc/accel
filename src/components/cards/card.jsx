import React from "react";
import "./card.css";
import ceo from "../../assets/Images/people/ceo.jpg";
import arrow from "../../assets/Images/icons/purplearrow.png";
import seed from "../../assets/Images/people/seed.svg";
import Slider from "react-slick";
import slack from "../../assets/Images/people/slackceo.jpg";

const Card = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="cards-section">
        <div className="block-right">
          <div className="section-one">
            <div className="ceo">
              <img src={ceo} alt="ceo" />
            </div>
          </div>
          <div className="section-two">
            <div className="note-worth">
              <h3>
                Note <br />
                worthy
              </h3>
            </div>
            <div className="note-carusel">
              <Slider {...settings}>
                <div className="note-wrap">
                  <a href="#">
                    <div>
                      <h4>
                        Secrets to Scaling with Webflow's
                        <br />
                        Vlad Magdalin
                      </h4>
                    </div>
                    <div>
                      <img src={arrow} alt={arrow} />
                    </div>
                  </a>
                </div>
                <div>
                  <div>
                    <div className="note-wrap">
                      <a href="#">
                        <div>
                          <h4>
                            Secrets to Scaling with Webflow's
                            <br />
                            Vlad Magdalin
                          </h4>
                        </div>
                        <div>
                          <img src={arrow} alt={arrow} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="note-wrap">
                    <a href="#">
                      <div>
                        <h4>
                          Secrets to Scaling with Webflow's
                          <br />
                          Vlad Magdalin
                        </h4>
                      </div>
                      <div>
                        <img src={arrow} alt={arrow} />
                      </div>
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="section-three">
            <div className="slack_ceo">
              <a href="#">
                <img className="image" src={slack} alt={slack} />
              </a>
              <div className="slacktext">
                <a href="#">
                  <h2>uyfyufyyuyuyuyfyuf</h2>
                </a>
              </div>
            </div>
          </div>
          <div classNamebvhg="section-four">
            <div></div>
          </div>
          <div className="section-five">
            <div></div>
          </div>
          <div className="section-six">
            <div></div>
          </div>
          <div className="section-seven">
            <div></div>
          </div>
        </div>
        <div className="block-left">
          <div className="section-eight">
            {/*<div>
              <img src={seed} alt="seed" width="190px" height="75px" />
            </div>
            <div className="seed">
              <div>
                <h2>
                  Enabling <br />
                  founders in their <br />
                  journey from <br />
                  Seed To Scale.
                </h2>
              </div>
              <div className="scale">
                <button>SEED TO SCALE</button>
              </div>
  </div>*/}
          </div>
          <div className="section-nine">
            <div></div>
          </div>
          <div className="section-ten">
            <div></div>
          </div>
          <div className="section-eleven">
            <div></div>
          </div>
          <div className="section-twelve">
            <div></div>
          </div>
          <div className="section-thirten">
            <div></div>
          </div>
          <div className="section-fourten">
            <div></div>
          </div>
          <div className="section-fifeten">
            <div></div>
          </div>
          <div className="section-sixten">
            <div></div>
          </div>
          <div className="section-seventen">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
