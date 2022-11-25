import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";
import Home from "./pages/relationship/home";
import { Routes, Route } from "react-router-dom";
import Relationship from "./pages/relationship";
import RelationshipTemplate from "./pages/relationship/template";
import Card from "./components/cards/card";
import Head from "./components/header/header";
import Hero from "./components/hero/hero";
import Downbar from "./components/footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SimpleSlider />
              <Sidebar />
              <Head />
              <Hero />
              <Card />
              {/*<Home />*/}
            </>
          }
        />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/relationship/:id" element={<RelationshipTemplate />} />
      </Routes>
    </div>
  );
};
export default App;
