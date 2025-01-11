
import Navbar from "./Navbar";
import ProductsSection from "./ProductsSection";
import FeaturesSection from "./FeaturesSection";
import AshokTextiles from "./ashokTextiles";
import ProjectManagement from "./projectManagement";
import "../../App.css";
import MediApp from "./mediApp";
import EggsProApp from "./eggsProApp";
import TextilesHub from "./TextilesHub";
import FleetPulseProject from "./FleetPulseProject";
export default function ProductsMain(){
    return(
        <>
        <Navbar />
        <ProductsSection />
        <FeaturesSection/>
        <AshokTextiles/>
        <ProjectManagement/>
        <MediApp/>
        <EggsProApp/>
        <TextilesHub/>
        <FleetPulseProject/>
        </>
    );
}