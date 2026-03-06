import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pics } from "../../assets/data";
import { images } from "../../assets/data";
import { div } from "framer-motion/client";

const ProductDetails = () => {
  const { id } = useParams();
  const [size, setSize] = useState("");
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const product = pics.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between max-w-6xl mt-10">
        <div className="flex flex-col gap-11 ml-10">
          <img className="w-50" src={product.img} alt="" />
          <img className="w-50" src={product.img} alt="" />
          <img className="w-50" src={product.img} alt="" />
          <img className="w-50" src={product.img} alt="" />
        </div>
        <div className="w-5xl ml-10">
          <img src={product.img} alt="" className="w-xl" />
        </div>
        <div className="w-3xl ml-20 ">
          <h1 className="font-outfit text-2xl">{product.name}</h1>
          <div className=" flex mt-4 gap-1">
            <img src={images.star1} alt="" />
            <img src={images.star1} alt="" />
            <img src={images.star1} alt="" />
            <img src={images.star1} alt="" />
            <img src={images.star2} alt="" />
            <p>(122)</p>
          </div>
          <p className="text-xl mt-4  font-outfit">${product.price}</p>
          <p className="mt-4 ">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>
          <p className="text-xl mt-6 font-outfit text-gray-500">Select Size</p>
          <div className="flex gap-3  ">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className="border mt-4 border-gray-400 hover:border-orange-500 p-4 px-6"
              >
                {s}
              </button>
            ))}
          </div>
          <button className="mt-6 bg-black text-white p-4 px-9">
            ADD TO CART
          </button>
          <hr className="mt-7 border-gray-400 mb-5" />
          <ul className="font-outfit text-gray-500">
            <li>100% Original product.</li>
            <li>Cash on delivery is available on this product.</li>
            <li>Easy return and exchange policy within 7 days.</li>
          </ul>
        </div>
      </div>
      <div className="mt-30  ml-7 w-75 border border-b-0 border-gray-400">
        <button className="p-4 px-6 font-bold ">Description</button>
        <button className="p-4 px-6 border-l  border-gray-400 border-b-0 font-bold">
          Reviews(122)
        </button>
      </div>
      <div className="w-7xl ml-7  border-gray-400 p-20 border">
        <p className="text-gray-500">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p className="mt-6 text-gray-500">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
      <div className="flex justify-center mt-30 items-center gap-2 text-gray-500">
        <span className="text-xl sm:text-2xl font-medium">
          RELATED <span className="text-gray-800">PRODUCTS</span>
        </span>
        <div className="w-10 h-0.5 bg-gray-500"></div>
      </div>
      <div className="flex justify-center gap-8 mx-auto mt-10 mb-60 max-w-7xl">
        {pics.slice(0, 5).map((item, index) => (
          <div key={index} className="w-48">
            <div className="overflow-hidden">
              <img
                className="w-full hover:scale-105 transition"
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
