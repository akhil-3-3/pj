import Top from "../Admin";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar1 from "./Sidebar1";

const Layout1 = () => {
  return (
    <div className="flex">
      <Sidebar1 />

      <div className="flex-1">
        <Top />
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
