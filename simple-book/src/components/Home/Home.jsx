import React from "react";

import HomeCover from "../Banner/Banner";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Simple Book | Home</title>
      </Helmet>
      <Banner></Banner>
      <Books></Books>
    </>
  );
};

export default Home;
