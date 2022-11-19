import React, { Component } from "react";
import Slider from "react-slick";
import "./carausel.css";
import password from "../../assets/Images/relationship/1password.svg";
import acho from "../../assets/Images/relationship/acho.png";
import ada from "../../assets/Images/relationship/ada.svg";
import airbyte from "../../assets/Images/relationship/airbyte.png";
import algolia from "../../assets/Images/relationship/algolia.png";
import aura from "../../assets/Images/relationship/aura.svg";
import away from "../../assets/Images/relationship/away.jpeg";
import blablacar from "../../assets/Images/relationship/blablacar.png";
import blackbuk from "../../assets/Images/relationship/blackbuk.png";
import browserstack from "../../assets/Images/relationship/away.jpeg";
import captivate from "../../assets/Images/relationship/away.jpeg";
import celonis from "../../assets/Images/relationship/celonis.png";
import chain from "../../assets/Images/relationship/chain.png";
import charge from "../../assets/Images/relationship/charge.svg";
import check from "../../assets/Images/relationship/check.svg";
import cognite from "../../assets/Images/relationship/cognite.png";
import cohesity from "../../assets/Images/relationship/cohesity.png";
import cointrack from "../../assets/Images/relationship/cointrack.png";
import commercetools from "../../assets/Images/relationship/commercetools.png";
import cult from "../../assets/Images/relationship/cult.png";
import discord from "../../assets/Images/relationship/discord.png";
import dji from "../../assets/Images/relationship/dji.png";
import doctolib from "../../assets/Images/relationship/doctolib.png";
import drivewelth from "../../assets/Images/relationship/drivewelth.png";
import emeritus from "../../assets/Images/relationship/emeritus.png";
import ethos from "../../assets/Images/relationship/ethos.png";
import falconx from "../../assets/Images/relationship/falconx.png";
import fever from "../../assets/Images/relationship/fever.png";
import g2 from "../../assets/Images/relationship/g2.png";
import gem from "../../assets/Images/relationship/gem.svg";
import goat from "../../assets/Images/relationship/goat.png";
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
import melio from "../../assets/Images/relationship/melio.png";

const SimpleSlider = () => {
  const settings = {
    //infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="company_logo">
      <Slider {...settings}>
        <div>
          <a href="#">
            <img src={password} width="auto" height="20px" />{" "}
          </a>
        </div>
        <div>
          <a href="#">
            <img src={acho} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ada} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={airbyte} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={algolia} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={aura} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={away} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={blablacar} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={blackbuk} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={browserstack} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={captivate} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={celonis} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={chain} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={charge} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={check} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={cognite} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={cohesity} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={cointrack} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={commercetools} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={cult} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={discord} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={dji} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={doctolib} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={drivewelth} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={emeritus} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={falconx} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={fever} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={g2} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={gem} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={goat} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={gocard} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={gopuff} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={hootsuite} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={hopin} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={hudi} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={illumio} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={infra} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={invision} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={ironclad} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={klaviyo} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={kry} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={lookout} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={lydia} width="auto" height="20px" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={melio} width="auto" height="20px" />
          </a>
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
