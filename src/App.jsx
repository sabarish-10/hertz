import React from "react";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import FeaturesSection from "./components/FeaturesSection";
import AshokTextiles from "./components/ashokTextiles";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-white h-full whole">
      <Navbar />
      <ProductsSection />
      <FeaturesSection/>
      <AshokTextiles/>
    </div>
  );
}

export default App;
