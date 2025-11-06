import Navbar from "@/pages/Shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";
import "../../App.css";
import Footer from "@/pages/Shared/Footer/Footer";

const mainLayout = () => {
  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default mainLayout;
