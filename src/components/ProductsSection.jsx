import React from "react";
import obj  from "../assets/obj.png";
function ProductsSection(){
  return (
    <section className="my-16 bg-black text-white text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 glow-effect mb-4">
        Our Products
      </h2>
      <p className="text-lg lg:text-xl text-gray-300 mb-8">
        At the heart of innovation and technology
      </p>
      <div className="flex justify-center  mb-8">
        <img
          src={obj}
          alt="3D Object"
          className="w-auto  h-40 md:h-60 lg:h-96 my-16"
        />
      </div>
      <div className="flex justify-center">
      <p className="text-sm lg:text-lg lg:w-3/4 mx-3 lg:mx-0 tracking-wide my-10 text-wrap text-gray-400">
        Our products are designed to empower businesses across industries.
        Whether you're managing <span className="text-white">textiles, healthcare, logistics, or poultry, our
        solutions simplify operations,</span> enhance user experiences, and drive
        efficiency. Combining advanced features with intuitive design, our web
        and mobile applications cater to the unique needs of modern enterprises.
      </p></div>
    </section>
  );
}

export default ProductsSection;
