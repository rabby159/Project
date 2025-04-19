import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import auth from "../firebase/firebase.init";

const SignIn = () => {
  const provider = new GoogleAuthProvider();

  const handleWithGoogleInfo = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div>
      <div className="my-20 ">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  onClick={handleWithGoogleInfo}
                  className="btn btn-neutral"
                >
                  SignIn with Google
                </button>
                <button className="btn btn-info text-white mt-4">
                  Sign In
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
