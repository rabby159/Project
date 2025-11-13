import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Brands></Brands>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
