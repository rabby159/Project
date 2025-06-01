import Lottie from "lottie-react";
import React from "react";
import registerAnimation from "../../assets/register-lottie/register-lottie.json";
import BannerRegister from "./BannerRegister";

const Register = () => {
  return (
    <div>
      <BannerRegister></BannerRegister>
      <div className="hero mt-20 max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="name" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-info mt-4 text-white">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
