import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import FeaturesSection from "./components/FeaturesSection";
import AshokTextiles from "./components/ashokTextiles";
import ProjectManagement from "./components/projectManagement";
import "./App.css";
import MediApp from "./components/mediApp";

function App() {
  return (
    <div className="bg-black text-white h-full whole">
      <Navbar />
      <ProductsSection />
      <FeaturesSection/>
      <AshokTextiles/>
      <ProjectManagement/>
      <MediApp/>
    </div>
  );
}

export default App;
