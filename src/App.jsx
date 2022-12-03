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
import Noteworthy from "./pages/noteworthy/note";
import Recent from "./pages/noteworthy/recent";
import Topics from "./pages/noteworthy/topics";
import Navbar from "./components/nav/nav";
import Portfolio from "./pages/noteworthy/portfolio";
import Accel from "./pages/noteworthy/accel";
import Notetemplates from "./pages/noteworthy/notetemplate";
import Connect from "./pages/connect/connect";

const App = () => {
  return (
    <div>
      {/* <SimpleSlider />
      <Head />
      <Hero />
      <Card />
      <Sidebar />
 */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/relationship/:id" element={<RelationshipTemplate />} />
        <Route path="/people" element={<People />} />
        <Route path="/noteworthy" element={<Noteworthy />} />
        <Route path="/news" element={<Recent />} />
        <Route path="/noteworthy-topics" element={<Topics />} />
        <Route path="/noteworthy-portfolio" element={<Portfolio />} />
        <Route path="/noteworthy-accel" element={<Accel />} />
        <Route path="/noteworthy/:id" element={<Notetemplates />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
      <Notetemplates />
    </div>
  );
};
export default App;
