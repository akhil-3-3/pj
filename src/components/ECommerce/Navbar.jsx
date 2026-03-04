import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/data";

const Navbar = () => {
  const [active, setActive]=useState("HOME");

  return (
    <div className="flex mt-5 px-5 lg:px-0 justify-between max-w-7xl mx-auto items-center">
      <img className="w-28 sm:w-32" src={images.logo} alt="logo" />

      <ul className="hidden md:flex gap-6 lg:gap-8 relative">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer"
            onClick={() => setActive(item)}
          >
            <span className="px-2 text-sm lg:text-base">{item}</span>

            {active === item && (
              <motion.div
                layoutId="underline"
                className="mx-auto absolute left-0 right-0 -bottom-1 w-10 h-0.5 bg-gray-800 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
          </li>
        ))}
      </ul>

      <ul className="flex gap-4 sm:gap-5">
        <li><img className="w-5 sm:w-6" src={images.search} alt="" /></li>
        <li><img className="w-5 sm:w-6" src={images.profile} alt="" /></li>
        <li><img className="w-5 sm:w-6" src={images.vector} alt="" /></li>
      </ul>
    </div>
  );
};

export default Navbar;