import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";
import Head from "./components/header/header";
import Hero from "./components/hero/hero";

const App = () => {
  return (
    <React.Fragment>
      <SimpleSlider />
      <Sidebar />
      <Head />
      <Hero />
    </React.Fragment>
  );
};
export default App;
