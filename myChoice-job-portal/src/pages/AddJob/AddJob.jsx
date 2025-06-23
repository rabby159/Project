import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";

const AddJob = () => {
  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="max-w-7xl mx-auto">
        {/* Page tittle */}
        <div className="my-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold">Add Job Form</h2>
          <p className="text-xl">
            Please Fill Out the Form Below to Submit Your Job Form!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
