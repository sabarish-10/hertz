import React from "react";
import logo from "/assets/logo.svg"
function Navbar() {
  return (
    <nav className="flex justify-between items-center  mx-4 p-4 bg-black text-white">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-36 h-14 mx-4"
        />
       
      </div>
      <ul className="cursor-pointer hidden md:flex mx-4 flex items-center space-x-6 text-sm">
        <li className="hover:text-orange-500">Home</li>
        <li className="hover:text-orange-500">Services</li>
        <li className="border border-slate-600  text-orange-500 p-2 rounded">Products</li>
        <li className="hover:text-orange-500">Career</li>
        <li className="hover:text-orange-500">Contact Us</li>
      </ul>
      <button className="border border-orange-400   p-2 mx-4 rounded hover:bg-orange-500 hover:text-white">
        Enquire Now
      </button>
    </nav>
  );
}

export default Navbar;
