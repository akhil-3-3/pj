import React from "react";
import { pics } from "../../assets/data";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex justify-center mt-15 items-center gap-2 text-gray-500">
        <span className="text-xl sm:text-2xl font-medium">
          LATEST <span className="text-gray-800">COLLECTIONS</span>
        </span>
        <div className="w-10 h-0.5 bg-gray-500"></div>
      </div>

      <p className="text-gray-500 text-center mb-5 p-4 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {pics.map((item, index) => (
          <Link to={`product/${item.id}`}>
            <div key={index} className="bg-white">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full hover:scale-105 transition duration-300"
              />
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm font-semibold mt-1">${item.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;