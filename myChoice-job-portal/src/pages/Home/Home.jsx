import React from "react";
import Banner from "./Banner";
import Navbar from "../Shared/Navbar";
import JobPost from "./JobPost";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JobPost></JobPost>
    </div>
  );
};

export default Home;
