import React, { Component } from "react";
import Slider from "react-slick";
import "./carausel.css";
import airbyte from "../../assets/Icons/airbyte.png";
import chain from "../../assets/Icons/chain.png";
import cognite from "../../assets/Icons/Cognite.png";
import falcon from "../../assets/Icons/Falcon.png";
import goat from "../../assets/Icons/goat.png";
import hopin from "../../assets/Icons/hopin.png";
import infra from "../../assets/Icons/infra-market.png";
import kry from "../../assets/Icons/kry.png";
import lydia from "../../assets/Icons/lydia.png";
import meglix from "../../assets/Icons/meglix.png";
import mensa from "../../assets/Icons/mensa.png";
import mindtickle from "../../assets/Icons/mindtickle.png";
import misfit from "../../assets/Icons/misfits.png";
import monte from "../../assets/Icons/monte-carlo.png";
import netskope from "../../assets/Icons/netskope.png";
import nuvemshop from "../../assets/Icons/nuvemshop.png";
import payit from "../../assets/Icons/payit.png";
import sennder from "../../assets/Icons/sennder.png";
import sentry from "../../assets/Icons/sentry.png";
import skydio from "../../assets/Icons/skydio.png";
import snorkel from "../../assets/Icons/snorkel.png";
import snyl from "../../assets/Icons/snyl.png";
import source from "../../assets/Icons/socure.png";
import sysdig from "../../assets/Icons/sysdig.png";
import trader from "../../assets/Icons/traderepublic.png";
import unit from "../../assets/Icons/unit.png";
import urban from "../../assets/Icons/urban-company.png";
import vercel from "../../assets/Icons/vercel.png";
import w from "../../assets/Icons/w.svg";
import wonder from "../../assets/Icons/wonder.png";
/*import goat from "../../assets/Images/relationship/goat.png";
import gocard from "../../assets/Images/relationship/gocard.png";
import gopuff from "../../assets/Images/relationship/gopuff.png";
import hootsuite from "../../assets/Images/relationship/hootsuite.png";
import hopin from "../../assets/Images/relationship/hopin.png";
import hudi from "../../assets/Images/relationship/hudi.png";
import illumio from "../../assets/Images/relationship/illumio.png";
import infra from "../../assets/Images/relationship/infra.png";
import invision from "../../assets/Images/relationship/invision.png";
import ironclad from "../../assets/Images/relationship/ironclad.png";
import klaviyo from "../../assets/Images/relationship/klaviyo.png";
import kry from "../../assets/Images/relationship/kry.png";
import lookout from "../../assets/Images/relationship/lookout.png";
import lydia from "../../assets/Images/relationship/lydia.png";
import melio from "../../assets/Images/relationship/melio.png";*/

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="company_logo">
      <div>
        <Slider {...settings}>
          <div>
            <a href="#">
              <img src={falcon} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={goat} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={hopin} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={airbyte} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={infra} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={kry} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={lydia} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={meglix} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={mensa} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={mindtickle} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={misfit} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={monte} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={chain} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={netskope} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={nuvemshop} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={payit} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={sennder} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={sentry} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={skydio} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={snorkel} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={snyl} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={source} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={sysdig} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={trader} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={unit} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={cognite} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={urban} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={vercel} width="auto" height="45px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={w} width="auto" height="2 5px" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={wonder} width="auto" height="45px" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default SimpleSlider;
