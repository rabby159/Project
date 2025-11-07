import Navbar from "@/pages/Shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";
import "../../App.css";
import Footer from "@/pages/Shared/Footer/Footer";

const mainLayout = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 h-screen w-full">
      rabby 
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default mainLayout;
