import React from "react";
import { pics } from "../../assets/data";

const BestSeller = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex justify-center mt-15 items-center gap-2 text-gray-500">
        <span className="text-xl sm:text-2xl font-medium">
          BEST <span className="text-gray-800">SELLER</span>
        </span>
        <div className="w-10 h-0.5 bg-gray-500"></div>
      </div>

      <p className="text-gray-500 text-center p-4 mb-5 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {pics.slice(0, 5).map((item, index) => (
          <div key={index}>
            <div className="overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full" />
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm font-semibold mt-1">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;