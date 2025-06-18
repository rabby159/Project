import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    company_logo,
    title,
    location,
    salaryRange,
    hr_email,
    description,
    requirements,
    responsibilities,
    status,
  } = useLoaderData();

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="flex gap-5">
          {/* ------------------------------------------------------------------------- */}

          <div className="flex-3 p-5">
            <div className="hero border-1 rounded-2xl border-blue-100">
              <div className="hero-content flex-col lg:flex-row flex gap-5">
                <div className="flex-2 flex justify-center border-r-1 border-blue-100">
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={company_logo}
                        className="max-w-sm rounded-lg shadow-2xl w-20"
                      />
                    </div>
                    <p className="flex justify-center">{title}</p>
                    <p className="flex justify-center">{location}</p>
                    <div className="flex justify-center">
                      <button className="btn btn-info text-white">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-3">
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}

          <div className="flex-2 border-2 border-amber-400 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
