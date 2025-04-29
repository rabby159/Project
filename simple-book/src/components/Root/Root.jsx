import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Offer from "../Offer/Offer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto my-1">
      <Offer></Offer>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
