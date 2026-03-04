import React from "react";
import { images } from "../../assets/data";

const Footer = () => {
  return (
    <div className="px-5 lg:px-0 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/3">
          <img className="w-28 mb-5" src={images.logo} alt="" />
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div>
          <h1 className="mb-5">COMPANY</h1>
          <ul className="text-gray-600 space-y-3">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h1 className="mb-5">GET IN TOUCH</h1>
          <ul className="text-gray-600 space-y-3">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-0.5 bg-gray-400 mb-5"></div>
        <h1 className="text-center text-sm mb-10 mt-10">
          Copyright 2024 © GreatStack.dev - All Right Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;