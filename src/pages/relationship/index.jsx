import React, { useState } from "react";
import "./index.css";
import password from "../../assets/Images/relationship/1password.svg";
import ada from "../../assets/Images/relationship/ada.svg";
import airbyte from "../../assets/Images/relationship/airbyte.png";
import algolia from "../../assets/Images/relationship/algolia.png";
import aura from "../../assets/Images/relationship/aura.svg";
import away from "../../assets/Images/relationship/away.jpeg";
import blablacar from "../../assets/Images/relationship/blablacar.png";
import blackbuck from "../../assets/Images/relationship/blackbuk.png";
import browserstack from "../../assets/Images/relationship/browserstack.png";
import captivate from "../../assets/Images/relationship/captivate.png";
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
import digi from "../../assets/Images/relationship/dji.png";
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
import { Link } from "react-router-dom";
//import mensa from "../../assets/Images/relationship/mensa.jpg";
//import messagebird from "../../assets/Images/relationship/messagebird.png";

const Relationship = () => {
  const [company] = useState([
    {
      Image: password,
      year: "series A 2019",
      owner: "Jeff Shiner (ceo), Roustem Karimov, Dave Teare",
      link: "secure password manager for individuals and businesses",
    },
    {
      Image: ada,
      year: "series B 2020",
      owner: "Mike Murchison, David Hariri",
      link: "All- powered cx Platform that fuels meaningful interactions between brands and their customers",
    },
    {
      Image: airbyte,
      year: "seed 2021",
      owner: "Michel Tricot, John Lafleur",
      link: "Open-Source Data integration platform",
    },
    {
      Image: algolia,
      year: "series A 2015",
      owner: "Bernedetta Nixon (ceo), Nicollas Dessaignae, Julien Lemoine ",
      link: "Web Search Discovery Platform For Websites",
    },
    {
      Image: aura,
      year: "series A 2018",
      owner: "Hari Ravichandran (ceo)",
      link: "personal privacy and security solutions for consumers and small business",
    },
    {
      Image: away,
      year: "seed 2015",
      owner: "Jenifer Rubio,Steph Korey",
      link: "Travel and lifestyle offering , high quality luggages at affordable prices",
    },
    {
      Image: blablacar,
      year: "series B 2011",
      owner: "Nicolas Brusson, Fredrick mazella, Francis nappez",
      link: "Long Distance carpooling platform",
    },
    {
      Image: blackbuck,
      year: "series A 2015",
      owner: "Rajesh Yabiji, Ramasubramanian B, Chankya Hridaya",
      link: "India Based online Trucking Market place ",
    },
    {
      Image: browserstack,
      year: "series A 2018",
      owner: "Ritesh Arora, Nakkul Agarwal",
      link: "web and mobile app testing platform",
    },
    {
      Image: captivate,
      year: "series B 2021",
      owner: "Conway Teng, Hubert Wong, Mark Schopmeyer",
      link: "Commission Software Automation",
    },
    {
      Image: celonis,
      year: "series A 2016",
      owner: "Alexander Rinke, Bostian Nominacher, Martin Klenk",
      link: "process Mining Software",
    },
    {
      Image: chain,
      year: "series B 2018",
      owner: "Michael Gronagar, Jonathan Levin",
      link: "Blockchain data and analysis",
    },
    {
      Image: charge,
      year: "series A 2013",
      owner:
        "Krish Subramanian, KP saravanan, Rajaram Santhanam, Thiyagarajan T",
      link: "Saas Platform Enterprice class subscription billing",
    },
    {
      Image: check,
      year: "series A 2014",
      owner: "Daniel Yanisse, Jonathan Perichon",
      link: "Automated Profession Background Test",
    },
    {
      Image: cognite,
      year: "series A 2020",
      owner: "Geir Engdahl, Dr.John Markus Lervik",
      link: "Global Industrial platform enabling digital transformation of heavy assets",
    },
    {
      Image: cohesity,
      year: "series B 2015",
      owner: "Mohit Aron, Sanjay Poonen(ceo)",
      link: "Secondary Storage Provider and data management platform",
    },
    {
      Image: cointrack,
      year: "series A 2021",
      owner: "Jon Lerner, Chandhan Lodha",
      link: "Cryptocurrency PortFolio Tracking and tax reporting tool",
    },
    {
      Image: commercetools,
      year: "initial growth investment 2021",
      owner: "Dirk Hoerig",
      link: "Cloud Native enterprice commerce platform",
    },
    {
      Image: cult,
      year: "series A ",
      owner: "Mukesh Bansal, Ankit Nagori",
      link: "Health and fitness platform with both digital and offline offering",
    },
    {
      Image: cognite,
      year: "series A 2020",
      owner: "Geir Engdahl, Dr.John Markus Lervik",
      link: "Global Industrial platform enabling digital transformation of heavy assets",
    },
    {
      Image: digi,
      year: "series B 2015",
      owner: "Frank Wang",
      link: "UAV Platform with high performance software, high resolution imaging and advanced hardware  ",
    },
    {
      Image: discord,
      year: "seed 2012",
      owner: "Jason Citron, Stanislav Vishnevskiy",
      link: "Online communication platform designed for creating communities",
    },
    {
      Image: doctolib,
      year: "series B 2015",
      owner:
        "Stanislas Niox-Chateau, thomas Landais,ivan Schneider,Frank Tetzlaff, Steve Abou rjeily, Jessy Bernal",
      link: "Online and Mobile Platform for finding and booking appointments with specialist doctors",
    },
    {
      Image: drivewelth,
      year: "initial growth investment 2021",
      owner: "Robert S Cortright",
      link: "API driven brokerage infrastructure",
    },
    {
      Image: emeritus,
      year: "initial growth investment 2021",
      owner: "Ashwin Damera, Chaitanya kalipatnapu",
      link: "Connects Online Business Professional Program to univrersities globally",
    },
    {
      Image: ethos,
      year: "series B 2018",
      owner: "Peter Colis, Lingke Wang",
      link: "Flexible Hassile- free life insurance",
    },
    {
      Image: falconx,
      year: "seed 2019",
      owner: "Raghu Yarlagadda, Prabhakar Reddy",
      link: "institutional trading platform for crypto aseets",
    },
    {
      Image: fever,
      year: "series A 1019",
      owner: "Ignacio Bachiller,Alexandre Perez, Francisco Hein,Pep Gomez ",
      link: "event discovery and ticket purchasing platform",
    },
    {
      Image: g2,
      year: "series B 2017",
      owner: "Global Abel, Mark Myers, Matt Gorniak,Mark Wheeler, Tim Handorf",
      link: "Software Purchasing Platform",
    },
    {
      Image: goat,
      year: "series B 2017",
      owner: "Eddy Lu, Daishin Sugano",
      link: "Online Sneaker-Selling Platform",
    },

    {
      Image: gem,
      year: "seed 2018",
      owner: "Steven Bartel,Nick Bushak",
      link: "All-in-one recruiting Platform",
    },
    {
      Image: gocard,
      year: "seed 2011",
      owner: "Hiroki Takeuchi, Matt Robinson, Tom Blomfield",
      link: "Recruting payment collection platform for business",
    },
    {
      Image: gopuff,
      year: "initial growth investment 2018",
      owner: "Yakir Gola, Rafael ilishayev",
      link: "instant needs delivery platform providing daily essentials",
    },
    {
      Image: hootsuite,
      year: "series A 2013",
      owner: "Ryan Holmes, David Tedman,Dario Meli",
      link: "Social MEdia maketing and managing Platform",
    },
    {
      Image: hopin,
      year: "seed 2020",
      owner: "Jhonny Boufarhat",
      link: "Virtual Events Platform",
    },
    {
      Image: hudi,
      year: "initial growth investment 2015",
      owner: "David Graff, john wirtz, Brian Kaiser ",
      link: "Video Analysis and coaching tools for sports team",
    },
    {
      Image: illumio,
      year: "initial investment 2015",
      owner: "Andrew Rubin, PJ Kirner",
      link: "Adaptive Segmentation cloud Security",
    },
    {
      Image: invision,
      year: "initial growth investment 2015",
      owner: "Clark Valberg, Ben Nadel",
      link: "Digital Project Design, workflow and collaboration Platform",
    },
    {
      Image: infra,
      year: "seed 2019",
      owner: "Souvik Sengupta, Aaditya Sharda",
      link: "Online Constructions Materials Marketplace",
    },
    {
      Image: ironclad,
      year: "series A 2017",
      owner: "Jason Boehmig, cai Gogwilt",
      link: "Digital Contracting Platform",
    },
    {
      Image: kry,
      year: "series A 2017",
      owner:
        "Johannes Shildt, josefin Landgard,Fredrik Jung Abbou,joachim hedenious",
      link: "Platform for connecting patients with family practice doctors",
    },
    {
      Image: klaviyo,
      year: "initial growth investment 2020",
      owner: "Andrew Bialecki, Ed Hellen",
      link: "Email marketing and sms marketing for e-commerce",
    },
    {
      Image: lookout,
      year: "series B 2010",
      owner: "Jim Dolce (ceo), john Hering, Kevin Mahaffey",
      link: "Mobile CyberSecurity",
    },
    {
      Image: lydia,
      year: "series B 2020",
      owner: "Antoine porte, Cyril chiche",
      link: "peer to peer payment platform",
    },
    {
      Image: melio,
      year: "series B 2020",
      owner: "Matan Bar, ilan atias, ziv paz",
      link: "b2b payment for small business",
    },
    /*{
      Image: mensa,
      year: "Seed/series A 2021",
      owner: "Ananth Narayanan",
      link: "Acquires and grows d2c brands",
    },
    {
      Image: messagebird,
      year: "series A 2017",
      owner: "Robert Vis, Adrian Mol",
      link: "Zero Friction Omni Channel Communication",
    },*/
  ]);
  return (
    <div className="body">
      <div className="Relation">
        <h1>Relationship</h1>
        <p>
          Original, exceptional, and bold. Our entrepreneurs bring extraordinary
          products and companies to life.
        </p>
      </div>
      <div className="nav">
        <a href="#">SPOTLIGHT</a>
        <a href="#">WHAT'S NEW</a>
        <a href="#">ACCEL FAMILY</a>
        <a href="#">THE VAULT</a>
      </div>
      <div className="Spotlight">
        {company.map((item, idx) => (
          <Link to={`/relationship/${item.link}`}>
            <div className="product" key={idx}>
              <img
                src={item.Image}
                alt={item.name}
                width="100px"
                height="75px"
              />
              <h3>{item.year}</h3>
              <h3>{item.owner}</h3>
              <h3>{item.link}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Relationship;
