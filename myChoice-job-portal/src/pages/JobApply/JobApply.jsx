import React from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();


  const handleJobApplyForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const linkedInUrl = form.linkedInUrl.value;
    const githubUrl = form.githubUrl.value;
    const resumeUrl = form.resumeUrl.value;
    const portfolioUrl = form.portfolioUrl.value;
    const coverLetter = form.coverLetter.value;
    const file = form.file.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      firstName,
      lastName,
      email,
      phone,
      linkedInUrl,
      githubUrl,
      resumeUrl,
      portfolioUrl,
      coverLetter,
      file,
    };

    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplication')
        }
      });
  };
  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
      <div className="max-w-7xl mx-auto">
        {/* Page tittle */}
        <div className="my-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold">Job Apply Form</h2>
          <p className="text-xl">
            Please Fill Out the Form Below to Submit Your Job Application!
          </p>
        </div>

        {/* Full form */}
        <form onSubmit={handleJobApplyForm}>
          {/* input data part */}
          <div className="flex gap-10 mb-10">
            {/* Personal information section*/}
            <div className="flex-1 mt-10">
              <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
                <h1>Personal Information</h1>
              </div>
              <div className="flex gap-10 p-5 border border-blue-100">
                <div className="space-y-5">
                  {/* first name */}
                  <div className="">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
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
                      name="lastName"
                      required
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
                      required
                      placeholder={user.email || "info@gmail.com"}
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
                      name="phone"
                      placeholder="Phone"
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
                      name="linkedInUrl"
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
                      name="githubUrl"
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
                      name="resumeUrl"
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
                      name="portfolioUrl"
                      placeholder="Type here..If have"
                      className="input input-info"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional information section*/}
            <div className="flex-1 mt-10">
              <div className="bg-gray-800 text-base-300 text-center text-2xl font-bold p-5 rounded-t-xl">
                <h1>Professional Information</h1>
              </div>
              <div className="p-5 border border-blue-100">
                <div className="space-y-10">
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Cover Letter
                      </span>
                    </label>
                    <textarea
                      placeholder="Type here.."
                      name="coverLetter"
                      required
                      className="textarea textarea-info w-[580px]"
                    ></textarea>
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-x-7">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Other Document
                      </span>
                    </label>
                    <input
                      type="file"
                      name="file"
                      className="file-input file-input-lg"
                    />
                  </div>
                </div>
                <div>
                  <fieldset className="fieldset border-base-300 rounded-box w-64 border p-4">
                    <legend className="fieldset-legend">
                      How you find us?
                    </legend>
                    <div className="flex gap-3">
                      <label className="label">
                        <input type="checkbox" className="checkbox" />
                        Walk-In
                      </label>
                      <label className="label">
                        <input type="checkbox" className="checkbox" />X
                      </label>
                      <label className="label">
                        <input type="checkbox" className="checkbox" />
                        LinkedIn
                      </label>
                      <label className="label">
                        <input type="checkbox" className="checkbox" />
                        Facebook
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          {/* Apply part*/}
          <div>
            <div className="text-center mb-20 ">
              <button className="btn btn-info text-white">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
