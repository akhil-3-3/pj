import React from "react";
import { images } from "../../assets/data";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center border border-gray-400 max-w-7xl mx-auto mt-5 px-5 lg:px-0 font-outfit text-gray-700">
      <div className="flex justify-center flex-col text-center lg:text-left lg:ml-20 py-10">
        <p className="flex items-center justify-center lg:justify-start gap-2 mb-3">
          <hr className="w-10" />
          <span>OUR BESTSELLERS</span>
        </p>

        <p className="font-prata text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Latest Arrivals
        </p>

        <p className="flex items-center justify-center lg:justify-start gap-2 mt-4">
          <span>SHOP NOW</span>
          <hr className="w-10" />
        </p>
      </div>

      <div className="w-full lg:w-auto">
        <img className="w-full max-w-md mx-auto lg:max-w-xl" src={images.header} alt="" />
      </div>
    </div>
  );
};

export default Hero;