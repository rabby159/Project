import React from "react";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { LuBriefcaseBusiness } from "react-icons/lu";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    location,
    jobType,
    applicationDeadline,
    description,
    requirements,
  } = job;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm px-5 py-5  h-[435px]">
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
          <p className="flex items-center flex-wrap gap-1">
            {requirements.map((skill) => (
              <p className="border p-1 text-xs rounded-xl">{skill}</p>
            ))}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <h2>Amount</h2>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */
}

export default JobCard;
