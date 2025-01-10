import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import FeaturesSection from "./components/FeaturesSection";
import AshokTextiles from "./components/ashokTextiles";
import ProjectManagement from "./components/projectManagement";
import "./App.css";
import MediApp from "./components/mediApp";
import TextilesHub from "./components/TextilesHub";
import FleetPulseProject from "./components/FleetPulseProject";
function App() {
  return (
    <div className="bg-black text-white h-full whole">
      <Navbar />
      <ProductsSection />
      <FeaturesSection/>
      <AshokTextiles/>
      <ProjectManagement/>
      <MediApp/>
      <TextilesHub/>
      <FleetPulseProject/>
    </div>
  );
}

export default App;
