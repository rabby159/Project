import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";

const JobApply = () => {
  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-10 space-y-4">
          <h2 className="text-4xl font-bold">Job Apply Form</h2>
          <p className="text-xl">Please Fill Out the Form Below to Submit Your Job Application!</p>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
