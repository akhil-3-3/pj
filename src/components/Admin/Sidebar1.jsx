import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar1 = () => {
  return (
    <div className="bg-gray-500 h-screen w-50">
      <NavLink to="/user">
        <h1 className="text-center p-5 font-bold ">Digital Menu</h1>
      </NavLink>

      <ul className="text-center p-1 flex flex-col gap-4">
        <li>
          <NavLink to="/admin/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/admin/category">Category</NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar1;
