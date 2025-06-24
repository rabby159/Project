import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { Link, useLoaderData } from "react-router-dom";
import { CiMoneyCheck1, CiCalendarDate } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import GoogleMapReact from "google-map-react";
import { LiaGiftsSolid } from "react-icons/lia";
import { BsPersonBadge } from "react-icons/bs";
import adImg from "../../assets/ad/Screenshot_7.jpg";
import { FaFacebook } from "react-icons/fa";

const JobDetails = () => {
  const {
    _id,
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
        <div className="flex gap-10">
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
                      <Link to={`/jobApply/${_id}`}>
                        <button className="btn btn-info text-white">
                          Apply Now
                        </button>
                      </Link>
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
                  <p className="flex items-center gap-2">
                    <LuBriefcaseBusiness />
                    {status}
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
              <div className="bg-gray-800 text-base-300 text-2xl font-bold p-5 rounded-t-xl">
                <h1>Job Description</h1>
              </div>
              <div className="flex justify-center p-5 border border-blue-100">
                <p>{description}</p>
              </div>
            </div>

            {/* Job details Skill section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-base-300 text-2xl font-bold p-5 rounded-t-xl">
                <h1>Job Skill</h1>
              </div>
              <div className="p-5 border border-blue-100">
                {requirements.map((skill, index) => (
                  <p key={index}>- {skill}</p>
                ))}
              </div>
            </div>

            {/* Job details location section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-base-300 text-2xl font-bold p-5 rounded-t-xl">
                <h1>Location</h1>
              </div>
              <div className="p-5 border border-blue-100 h-[400px] w-full">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: import.meta.env.VITE_mapAPI,
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={22.70292}
                    lng={90.3466}
                  ></AnyReactComponent>
                </GoogleMapReact>
              </div>
            </div>

            {/* Job details requirement section*/}
            <div className="mt-10">
              <div className="bg-gray-800 text-base-300 text-2xl font-bold p-5 rounded-t-xl">
                <h1>Responsibilities</h1>
              </div>
              <div className="p-5 border border-blue-100">
                {responsibilities.map((requirement, index) => (
                  <p key={index}>- {requirement}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Job details right side layOut*/}
          <div className="flex-2">
            {/* Job details facilities section*/}
            <div className="border border-blue-100 p-5 rounded-2xl shadow">
              <div className="flex gap-2 items-center text-2xl font-bold border-b-1 border-blue-100 pb-5">
                <LiaGiftsSolid />
                Facilities
              </div>
              <div className="mt-5">
                <ul className="space-y-2">
                  <li>- 2 festival bonuses per year.</li>
                  <li>- Team tours and remote meals.</li>
                  <li>- Salary review once a year.</li>
                  <li>- Probation period of 3 months.</li>
                  <li>
                    - After the three-month probation period, you will be given
                    2,000 BDT for internet and device bills or transport fees
                    every month.
                  </li>
                </ul>
              </div>
            </div>

            {/* Job details interview section*/}
            <div className="border border-blue-100 p-5 rounded-2xl shadow my-10">
              <div className="flex gap-2 items-center text-2xl font-bold border-b-1 border-blue-100 pb-5">
                <BsPersonBadge />
                Interview Process
              </div>
              <div className="mt-5">
                <ul className="space-y-6">
                  <li>
                    - Round 1 - Skill evaluation: We will mail skill assessment
                    tasks for the candidates who applied in due time.
                  </li>
                  <li>
                    - Round 2 - Team Interview: web team will hold an interview
                    to evaluate the candidates' interpersonal skills.
                  </li>
                  <li>
                    - Round 3 - CEO interview: Our final interview round will be
                    conducted by our CEO.
                  </li>
                </ul>
              </div>
            </div>

            {/* Job details ad section*/}
            <div className="border border-blue-100 p-5 my-10">
              <div className="flex gap-2 items-center">ad</div>
              <div className="mt-5">
                <img src={adImg} alt="" />
                <p className="flex items-center gap-5 mt-3">
                  Click to connect:{" "}
                  <span className="text-blue-500 text-3xl">
                    <a href="https://www.facebook.com/myongadget">
                      <FaFacebook />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
