import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useLoaderData } from "react-router-dom";
import { CiMoneyCheck1, CiCalendarDate } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import GoogleMapReact from "google-map-react";

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
    jobType,
    applicationDeadline,
  } = useLoaderData();

  const defaultProps = {
    center: {
      lat: 23.81033,
      lng: 90.41252,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => (
    <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
  );

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="flex gap-5">
          {/* Job details left side layOut*/}
          <div className="flex-3">
            {/* Job details tittle section*/}
            <div className="border-1 rounded-2xl border-blue-100 p-5 shadow">
              <div className=" flex-col lg:flex-row flex items-center gap-5">
                <div className="flex-2 flex justify-center border-r-1 border-blue-100">
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={company_logo}
                        className="max-w-sm rounded-lg shadow-2xl w-20"
                      />
                    </div>
                    <p className="flex justify-center mt-3 font-semibold">
                      {title}
                    </p>
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
                  <p className="flex items-center gap-2 ">
                    <CiCalendarDate />
                    Deadline:{" "}
                    <span className="text-red-400">{applicationDeadline}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Job details description section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-white text-2xl font-bold p-5 rounded-t-xl">
                <h1>Job Description</h1>
              </div>
              <div className="flex justify-center p-5 border border-blue-100">
                <p>{description}</p>
              </div>
            </div>

            {/* Job details Skill section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-white text-2xl font-bold p-5 rounded-t-xl">
                <h1>Job Skill</h1>
              </div>
              <div className="p-5 border border-blue-100">
                {requirements.map((skill, index) => (
                  <p key={index} className="">
                    - {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Job details location section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-white text-2xl font-bold p-5 rounded-t-xl">
                <h1>Location</h1>
              </div>
              <div className="p-5 border border-blue-100 h-[400px] w-full">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDtl6LM-SBpi4-95IysTdJ7zbhBJ2Z52lQ",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={22.70292}
                    lng={90.3466}
                    text="My Marker"
                  ></AnyReactComponent>
                </GoogleMapReact>
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
