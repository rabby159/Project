import React from "react";
import Banner from "./Banner";
import Navbar from "../Shared/Navbar";
import JobPost from "./JobPost";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <JobPost></JobPost>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
