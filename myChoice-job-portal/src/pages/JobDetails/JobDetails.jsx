import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="my-20 max-w-7xl mx-auto">
        <h1>Job Details</h1>
      </div>
    </div>
  );
};

export default JobDetails;
