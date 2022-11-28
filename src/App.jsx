import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";
import Home from "./pages/relationship/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Relationship from "./pages/relationship";
import RelationshipTemplate from "./pages/relationship/template";
import Card from "./components/cards/card";
import Head from "./components/header/header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import People from "./pages/people/people";

const App = () => {
  return (
    <div>
      <SimpleSlider />
      <Head />
      <Hero />
      <Card />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/relationship/:id" element={<RelationshipTemplate />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
