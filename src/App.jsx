import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../src/components/carausel/carausel";
import Sidebar from "./components/sidenav/sidenav";
import Home from "./pages/relationship/home";
import { Routes, Route } from "react-router-dom";
import Relationship from "./pages/relationship";
import RelationshipTemplate from "./pages/relationship/template";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/*<SimpleSlider />*/}
              <Sidebar />
              <Home />
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
