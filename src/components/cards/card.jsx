import React from "react";
import "./card.css";
import ceo from "../../assets/Images/people/ceo.jpg";
import arrow from "../../assets/Images/icons/purplearrow.png";
import seed from "../../assets/Images/people/seed.svg";
import Slider from "react-slick";
import slack from "../../assets/Images/people/slackceo.jpg";
import slacklogo from "../../assets/Images/people/slacklogo.svg";
import segmentceo from "../../assets/Images/people/segmentceo.jpeg";
import segmentlogo from "../../assets/Images/people/segmentlogo.png";
import facebookceo from "../../assets/Images/people/fbceo.jpg";
import fblogo from "../../assets/Images/icons/fblogo.svg";
import bumble from "../../assets/Images/people/bu.png";
import jetceo from "../../assets/Images/people/jet.jpeg";
import jetlogo from "../../assets/Images/people/jetlogo.svg";
import couchbase from "../../assets/Images/people/couchbase1.jpeg";
import couchbaselogo from "../../assets/Images/people/couchbaselogo.png";
import uipath from "../../assets/Images/people/uipathceo.jpg";
import uipathlogo from "../../assets/Images/people/uipathlogo.png";
import silverman from "../../assets/Images/people/silverman.jpeg";
import etsylogo from "../../assets/Images/people/etsy.png";
import arista from "../../assets/Images/people/aristaceo.jpg";
import aristalogo from "../../assets/Images/people/aristalogo.svg";
import atoms from "../../assets/Images/icons/atoms.png";
import user from "../../assets/Images/people/user.jpeg";
import userlogo from "../../assets/Images/people/userlogo.png";
import dropcam from "../../assets/Images/people/dropcam.jpeg";
import dropcamlogo from "../../assets/Images/people/dropcamlogo.png";
import sumo from "../../assets/Images/people/sumoceo.jpeg";
import sumologo from "../../assets/Images/people/sumologo.png";
import cloud from "../../assets/Images/people/cloudera.jpeg";
import cloudlogo from "../../assets/Images/people/cloudlogo.svg";
import blur from "../../assets/Images/people/bgblur.png";

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
            <div
              className="ceo"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),
              url(${ceo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            >
              <div>
                <img src={blur} height="433px" width="100%" />
              </div>
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
                <img
                  className="image"
                  src={slack}
                  alt={slack}
                  width="100%"
                  height="584px"
                />
              </a>
              <div className="slacktext">
                <a href="#">
                  <img className="slack-logo" src={slacklogo} alt={slacklogo} />
                  <p>
                    "Life is too short to do mediocre work and it is definitely
                    too short to build shitty things."-Stewart
                    Butterfield,Co-founder & CEO
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div classNamebvhg="section-four">
            <div className="segment_ceo">
              <a href="#">
                <img className="image" src={segmentceo} width="100%" />
              </a>
              <div className="segment">
                <a href="#">
                  <img src={segmentlogo} alt="" width="100%" />
                  <p>
                    "You need to be brutally honest with yourself as to what the
                    world really wants,and not what you think it wants."-Peter
                    Reinhardit, Co-founder & CEO
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="section-five">
            <div className="fbceo">
              <a href="#">
                <img
                  className="facebook_ceo"
                  src={facebookceo}
                  alt={facebookceo}
                  width="100%"
                />
              </a>
              <div className="facebook">
                <a href="#">
                  <img src={fblogo} alt={fblogo} />
                  <p>
                    "Entrepreneurship is about crating change, not just
                    companies."- Mark Zuckerberg, Founder & CEO
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="section-six">
            <div className="jetceo">
              <a href="#">
                <img
                  className="jet_ceo"
                  src={jetceo}
                  alt={jetceo}
                  width="100%"
                />
              </a>
              <div className="jet">
                <a href="#">
                  <img src={jetlogo} alt={jetlogo} />
                  <p>
                    "The bigger your ambitions are, the more you need help from
                    others."-Marc Lore,Co- Founder & CEO
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="section-seven">
            <div className="couchbase">
              <a href="#">
                <img
                  className="couchbase_ceo"
                  src={couchbase}
                  alt={couchbase}
                  width="100%"
                />
              </a>
              <div className="couchlogo">
                <a href="#">
                  <img src={couchbaselogo} alt={jetlogo} />
                  <p>
                    "The bigger your ambitions are, the more you need help from
                    others."-Marc Lore,Co- Founder & CEO
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block-left">
          <div className="section-eight">
            <div>
              <img src={seed} alt="seed" width="190px" height="75px" />
            </div>
            <div className="seed">
              <div>
                <h2>
                  Enabling founders in <br />
                  their journey from <br />
                  Seed To Scale.
                </h2>
              </div>
              <div className="scale">
                <button>SEED TO SCALE</button>
              </div>
            </div>
          </div>
          <div className="section-nine">
            <div className="uipath">
              <a href="#">
                <img
                  className="uipath_ceo"
                  src={uipath}
                  alt={uipath}
                  width="265px"
                  height="370px"
                />
              </a>
            </div>
            <div className="uipathlogo">
              <a href="#">
                <img src={uipathlogo} alt={uipathlogo} />

                <p>
                  "Humility gives you the opportunity to course-correct fast.
                  ithimk this is the most important business lesson that i ever
                  had in my life."-Daniel Dines, Co- Founder & CEO
                </p>
              </a>
            </div>
          </div>
          <div className="section-ten">
            <div className="etsy">
              <a href="#">
                <img src={etsylogo} alt={etsylogo} />

                <p>
                  "Humility gives you the opportunity to course-correct fast.
                  ithimk this is the most important business lesson that i ever
                  had in my life."-Daniel Dines, Co- Founder & CEO
                </p>
              </a>
            </div>
            <div className="silverman">
              <a href="#">
                <img
                  className="etsy_ceo"
                  src={silverman}
                  alt={silverman}
                  width="373px"
                  height="353px"
                />
              </a>
            </div>
          </div>
          <div className="section-eleven">
            <div className="community">
              <p>
                Work at one of our
                <br /> portfolio companies.
              </p>
            </div>
            <div className="heading_button">
              <button>
                JOIN THE ACCEL COMMUNITY <img src={arrow} />
              </button>
            </div>
          </div>
          <div className="section-twelve">
            <div className="arista">
              <a href="#">
                <img src={aristalogo} alt={aristalogo} />

                <p>
                  "success is very addicting and thrilling,but i think setbacks
                  teach you more."-Jayashree Ulla, Co- Founder & CEO
                </p>
              </a>
            </div>
            <div className="arista_ceo">
              <a href="#">
                <img
                  className="arista-ceo"
                  src={arista}
                  alt={arista}
                  width="373px"
                  height="353px"
                />
              </a>
            </div>
          </div>
          <div className="section-thirten">
            <div className="accelatoms_logo">
              <img src={atoms} width="146px" height="20px" />
              <p>
                Launching the Atomic <br />
                Round!
              </p>
            </div>
            <div className="more_button">
              <button>
                Learn More <img src={arrow} />
              </button>
            </div>
          </div>
          <div className="section-fourten">
            <div className="user">
              <a href="#">
                <img src={userlogo} alt={userlogo} />

                <p>
                  "Technology does amazing things but it's where technology
                  meets people-the customer experience-that makes technology
                  most valuable to us as individuals."-Andy MacMillan, CEO
                </p>
              </a>
            </div>
            <div className="user_ceo">
              <a href="#">
                <img
                  className="usertest-ceo"
                  src={user}
                  alt={user}
                  width="373px"
                  height="353px"
                />
              </a>
            </div>
          </div>
          <div className="section-fifeten">
            <div className="drop">
              <a href="#">
                <img src={dropcamlogo} alt={dropcamlogo} />

                <p>
                  "Take your time.Don't ship it before it's ready."-Greg
                  Duffy,Co-founder & CEO
                </p>
              </a>
            </div>
            <div className="dropcam">
              <a href="#">
                <img
                  className="drop-ceo"
                  src={dropcam}
                  alt={dropcam}
                  width="373px"
                  height="280px"
                />
              </a>
            </div>
          </div>
          <div className="section-sixten">
            <div className="sumo">
              <a href="#">
                <img
                  className="sumo-ceo"
                  src={sumo}
                  alt={sumo}
                  width="267px"
                  height="444px"
                />
              </a>
            </div>
            <div className="sumologo">
              <a href="#">
                <img src={sumologo} alt={sumologo} />
                <p>
                  "As you progress in your career and life, you have to realize
                  that there are certain thing got you to experience success as
                  an induvial thus far because you are excustion oriented ,but
                  as you grow into a manager and a leader it's not about you
                  it's about enabling the team. it shifts from "me" to "we"
                  .-Ramin Sayar,President & CEO
                </p>
              </a>
            </div>
          </div>
          <div className="section-seventen">
            <div className="cloud">
              <a href="#">
                <img src={cloudlogo} alt={cloudlogo} />

                <p>
                  "Take your time.Don't ship it before it's ready."-Greg
                  Duffy,Co-founder & CEO
                </p>
              </a>
            </div>
            <div className="cloudera">
              <a href="#">
                <img
                  className="cloud-ceo"
                  src={cloud}
                  alt={cloud}
                  width="373px"
                  height="320px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
