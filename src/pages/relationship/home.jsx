import React from "react";
import SimpleSlider from "../../components/carausel/carausel";
import Card from "../../components/cards/card";
import Footer from "../../components/footer/footer";
import Head from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Sidebar from "../../components/sidenav/sidenav";
import People from "../people/people";
import Relationship from "./index";
import Pass from "./template";
const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Head />
      <Hero />
      <Card />
    </>
  );
};
export default Home;
