import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";

const JobApply = () => {
  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="max-w-7xl mx-auto">
        <div className="my-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold">Job Apply Form</h2>
          <p className="text-xl">
            Please Fill Out the Form Below to Submit Your Job Application!
          </p>
        </div>
        <div className="flex gap-10 mb-20">
          {/* Personal information section*/}
          <div className="flex-1 mt-10">
            <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
              <h1>Personal Information</h1>
            </div>
            <div className="p-5 border border-blue-100">
              <form className="flex gap-10">
                <div className="space-y-5">
                  {/* first name */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="Type here.."
                      className="input input-info"
                    />
                  </div>
                  {/* Last name */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Type here.."
                      className="input input-info"
                    />
                  </div>
                  {/* Email */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="info@gmail.com"
                      className="input input-info"
                    />
                  </div>
                  {/* Phone */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      name="Phone"
                      placeholder="phone"
                      className="input input-info"
                    />
                  </div>
                </div>
                <div className="space-y-5">
                  {/* LinkedIn url */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input
                      type="url"
                      name="linkedIn-url"
                      placeholder="Type here.."
                      className="input input-info"
                    />
                  </div>
                  {/* Github URL */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Github URL</span>
                    </label>
                    <input
                      type="url"
                      name="github-url"
                      placeholder="Type here.."
                      className="input input-info"
                    />
                  </div>
                  {/* Resume URL */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Resume URL</span>
                    </label>
                    <input
                      type="url"
                      name="resume-url"
                      placeholder="Type here.."
                      className="input input-info"
                    />
                  </div>
                  {/* Portfolio URL */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">Portfolio URL</span>
                    </label>
                    <input
                      type="url"
                      name="portfolio-url"
                      placeholder="Type here..If have"
                      className="input input-info"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Professional information section*/}
          <div className="flex-1 mt-10">
            <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
              <h1>Professional Information</h1>
            </div>
            <div className="p-5 border border-blue-100">
              <form className="space-y-10">
                <div>
                  <div className="">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Cover Letter
                      </span>
                    </label>
                    <textarea
                      placeholder="Type here.."
                      name="cover-letter"
                      className="textarea textarea-info w-[580px]"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="space-x-7">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Other Document
                      </span>
                    </label>
                    <input type="file" className="file-input file-input-lg" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
