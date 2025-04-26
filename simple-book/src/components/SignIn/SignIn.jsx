import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import auth from "../firebase/firebase.init";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const provider = new GoogleAuthProvider();

  const { signInUser } = useContext(AuthContext);

  const handleWithGoogleInfo = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div className="my-20 ">
          <div className="hero-content">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="password"
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
                  <p className="text-center">
                    Don't have an account? <a href="/signUp">SignUp</a>
                  </p>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
