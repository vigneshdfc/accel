import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";

const App = () => {
  return (
    <div>
      <SimpleSlider />
      <Sidebar />
    </div>
  );
};
export default App;
