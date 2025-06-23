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

        {/* Full form */}
        <form>
          {/* input data part */}
          <div className="mb-10">
            {/* Personal information section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
                <h1>Personal Information</h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 border border-blue-100">
                {/* Job Tittle */}
                <div className="fieldset">
                  <label className="label">
                    <span className="label-text">Job Tittle</span>
                  </label>
                  <input type="text" name="jobTittle" className="input" placeholder="Type Here.." />
                </div>
                {/* Company Name */}
                <div className="fieldset">
                  <label className="label">
                    <span className="label-text">Company Name</span>
                  </label>
                  <input type="text" name="companyName" className="input" placeholder="Type here.." />
                </div>
                {/* Job Tittle */}
                <div className="fieldset">
                  <label className="label">
                    <span className="label-text">Job Tittle</span>
                  </label>
                  <input type="text" className="input" placeholder="Title" />
                </div>
              </div>
            </div>
          </div>
          {/* Apply part*/}
          <div>
            <div className="text-center mb-20 ">
              <button className="btn btn-info text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
