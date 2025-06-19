import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useLoaderData } from "react-router-dom";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";

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
    jobType
  } = useLoaderData();

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="flex gap-5">
          {/* Job details left side layOut*/}
          <div className="flex-3 p-5">
            {/* Job details tittle*/}
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
                    <p className="flex justify-center mt-3">{title}</p>
                    <p className="flex justify-center mt-1 mb-4">{location}</p>
                    <div className="flex justify-center">
                      <button className="btn btn-info text-white">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-3">
                  <p className="flex items-center gap-2">
                    <CiMoneyCheck1 /> {salaryRange.min} - {salaryRange.max} /{" "}
                    {salaryRange.currency}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead /> {hr_email}{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    <LuBriefcaseBusiness />
                    {jobType}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Job details right side layOut*/}
          <div className="flex-2 border-2 border-amber-400 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
