import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="flex gap-5">
          <div className="flex-3 border-2 border-amber-400 p-5"></div>
          <div className="flex-2 border-2 border-amber-400 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
