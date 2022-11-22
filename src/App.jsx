import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";
import Home from "./pages/relationship/home";
import Head from "./components/header/header";
import Hero from "./components/hero/hero";
import Card from "./components/cards/card";

const App = () => {
  return (
    <div>
      <SimpleSlider />
      <Sidebar />
      <Head />
      <Hero />
      <Card />
      {/*<Home />*/}
    </div>
  );
};
export default App;
