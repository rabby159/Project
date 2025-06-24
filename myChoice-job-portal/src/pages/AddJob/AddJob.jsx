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
                <h1>General Information</h1>
              </div>
              <div className="p-5 border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ml-14">
                  {/* Job Tittle */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Job Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="input input-info"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* Company Name */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Company Name</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="input input-info"
                      placeholder="Type here.."
                    />
                  </div>
                  {/* Category */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Category</span>
                    </label>
                    <select
                      defaultValue="Press to Select"
                      name="category"
                      className="select select-info"
                    >
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
                      <span className="label-text text-lg">No of vacancy</span>
                    </label>
                    <input
                      type="number"
                      name="vacancy"
                      className="input input-info"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* Experience */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Experience</span>
                    </label>
                    <select
                      defaultValue="Press to Select"
                      name="experience"
                      className="select select-info"
                    >
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
                      <span className="label-text text-lg">Job Type</span>
                    </label>
                    <select
                      defaultValue="Press to Select"
                      name="jobType"
                      className="select select-info"
                    >
                      <option disabled={true}>Press to Select</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contractual</option>
                      <option>Remote</option>
                      <option>Intern</option>
                    </select>
                  </div>
                  {/* Description */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Description</span>
                    </label>
                    <textarea
                      placeholder="Info"
                      name="description"
                      className="textarea textarea-info"
                    ></textarea>
                  </div>
                  {/* Requirement */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Requirement</span>
                    </label>
                    <textarea
                      placeholder="Info"
                      name="requirement"
                      className="textarea textarea-info"
                    ></textarea>
                  </div>
                  {/* Responsibility */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Responsibility</span>
                    </label>
                    <textarea
                      placeholder="Info"
                      name="responsibility"
                      className="textarea textarea-info"
                    ></textarea>
                  </div>
                </div>
                {/* Salary Range */}
                <div className="ml-14">
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Salary Range</span>
                    </label>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                      <div>
                        <input
                          type="number"
                          name="min"
                          className="input input-info"
                          placeholder="Min"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="max"
                          className="input input-info"
                          placeholder="Max"
                        />
                      </div>
                      <div>
                        <select
                          defaultValue="Currency"
                          name="currency"
                          className="select select-info"
                        >
                          <option disabled={true}>Currency</option>
                          <option>bdt</option>
                          <option>usd</option>
                          <option>euro</option>
                          <option>inr</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Personal information section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
                <h1>Company Address</h1>
              </div>
              <div className="p-5 border border-blue-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ml-14">
                  {/* HR email */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Email</span>
                    </label>
                    <input
                      type="email"
                      name="hr_email"
                      className="input input-info"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* Phone */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Phone</span>
                    </label>
                    <input
                      type="number"
                      name="hr_phone"
                      className="input input-info"
                      placeholder="Type here.."
                    />
                  </div>
                  {/* Location */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="input input-info"
                      placeholder="Type Here.."
                    />
                  </div>
                  {/* City */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">City</span>
                    </label>
                    <select
                      defaultValue="Press to Select"
                      name="city"
                      className="select select-info"
                    >
                      <option disabled={true}>Press to Select</option>
                      <option>Dhaka</option>
                      <option>Barisal</option>
                      <option>Chittagong</option>
                      <option>Khulna</option>
                      <option>Syhet</option>
                      <option>Myminshing</option>
                      <option>Rajshahi</option>
                    </select>
                  </div>
                  {/* Country */}
                  <div className="fieldset">
                    <label className="label">
                      <span className="label-text text-lg">Country</span>
                    </label>
                    <select
                      defaultValue="Press to Select"
                      name="country"
                      className="select select-info"
                    >
                      <option disabled={true}>Press to Select</option>
                      <option>Bangladesh</option>
                      <option>Pakistan</option>
                      <option>USA</option>
                      <option>Russia</option>
                      <option>Japan</option>
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
