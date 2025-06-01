import React from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/register-lottie/register-lottie.json";

const SignIn = () => {
  return (
    <div>
      <div className="hero my-20 max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-96">
            <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
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

export default SignIn;
