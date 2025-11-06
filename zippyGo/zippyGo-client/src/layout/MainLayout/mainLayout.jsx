import Navbar from "@/pages/Shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

const mainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default mainLayout;
