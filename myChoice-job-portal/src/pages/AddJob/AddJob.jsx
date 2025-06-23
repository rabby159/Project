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
              <div className="p-5 border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 ml-14">
                  {/* Job Tittle */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">Job Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="input"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* Company Name */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">Company Name</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="input"
                      placeholder="Type here.."
                    />
                  </div>
                  {/* Category */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <select defaultValue="Press to Select" name="category" className="select">
                      <option disabled={true}>Press to Select</option>
                      <option>Engineering</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                      <option>Teaching</option>
                      <option>Management</option>
                      <option>Data Science</option>
                      <option>Design</option>
                      <option>Development</option>
                    </select>
                  </div>
                  {/* No of vacancy */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">No of vacancy</span>
                    </label>
                    <input
                      type="number"
                      name="vacancy"
                      className="input"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* Experience */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">Experience</span>
                    </label>
                    <select defaultValue="Press to Select" name="experience" className="select">
                      <option disabled={true}>Press to Select</option>
                      <option>Fresher</option>
                      <option>6 Month</option>
                      <option>1 Year</option>
                      <option>More than 2 years</option>
                    </select>
                  </div>
                  {/* Job Type */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Press to Select" name="jobType" className="select">
                      <option disabled={true}>Press to Select</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contractual</option>
                      <option>Remote</option>
                    </select>
                  </div>
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
