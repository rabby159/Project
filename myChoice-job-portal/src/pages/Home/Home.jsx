import React from "react";
import Banner from "./Banner";
import Navbar from "../Shared/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
