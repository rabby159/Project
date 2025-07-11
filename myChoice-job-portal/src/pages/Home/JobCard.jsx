import { key } from "localforage";
import React from "react";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    applicationDeadline,
    description,
    requirements,
    salaryRange,
  } = job;

  return (
    <div>
      <div className="card bg-indigo-100 shadow-sm px-5 py-5  h-[435px]">
        <div className="flex items-center gap-3">
          <figure className="flex-1/3">
            <img src={company_logo} alt="Shoes" className="rounded-xl w-16 " />
          </figure>
          <div className="flex-2/3">
            <h3 className="font-semibold text-xl">{company}</h3>
            <p className="flex items-center gap-1">
              {" "}
              <CiLocationOn />
              {location}
            </p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1">
              <LuBriefcaseBusiness />
              {jobType}
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <CiCalendarDate />
              {applicationDeadline}
            </p>
          </div>
        </div>
        <div className="pb-5">
          <p>{description}</p>
        </div>
        <div className="pb-5">
          <div className="flex items-center flex-wrap gap-1 ">
            {requirements.map((skill, index) => (
              <p key={index} className="border p-1 text-xs rounded-md bg-blue-100 hover:text-blue-600">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <h2 className="flex items-center text-md font-bold">
            <PiCurrencyDollarSimpleBold />
            {salaryRange.min} - {salaryRange.max} / {salaryRange.currency}
          </h2>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-info text-white text-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
