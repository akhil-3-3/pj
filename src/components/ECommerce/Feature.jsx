import React from "react";
import { images } from "../../assets/data";

const Feature = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex mt-30 mb-30 flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-20 font-outfit text-center">
        <div>
          <img className="w-10 h-10 mx-auto" src={images.exchange} alt="" />
          <p>Easy Exchange Policy</p>
          <p className="text-gray-500">We offer hassle free exchange policy</p>
        </div>

        <div>
          <img className="w-10 h-10 mx-auto" src={images.quality} alt="" />
          <p>7 Days Return Policy</p>
          <p className="text-gray-500">We provide 7 days free return policy</p>
        </div>

        <div>
          <img className="w-10 h-10 mx-auto" src={images.support} alt="" />
          <p>Best Customer Support</p>
          <p className="text-gray-500">We provide 24/7 customer support</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-xl sm:text-2xl font-medium mb-5">
          Subscribe now & get 20% off
        </h3>

        <p className="text-gray-500 mb-5 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-30 w-full max-w-xl">
          <input
            type="text"
            className="border px-4 w-full h-12"
            placeholder="Enter your email id"
          />
          <button className="bg-black text-white px-6 h-12 w-full sm:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
