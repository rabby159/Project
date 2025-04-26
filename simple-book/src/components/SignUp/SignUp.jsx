import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log("404 Error!", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="my-20">
          <div className="hero-content">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your Name"
                  />
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
                  <button className="btn btn-neutral">
                    SignUp with Google
                  </button>
                  <button className="btn btn-info text-white mt-4">
                    Sign Up
                  </button>
                  <p className="text-center">
                    Already have an account? <a href="/signIn">SignIn</a>
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

export default SignUp;
