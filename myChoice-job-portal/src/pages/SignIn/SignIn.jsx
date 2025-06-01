import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-lottie/login-lottie.json";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import BannerSignIn from "./BannerSignIn";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {

  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
      console.log(error.message);
    })
  };

  return (
    <div>
      <BannerSignIn></BannerSignIn>
      <div className="hero my-20 max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-96">
            <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form onSubmit={handleSignIn} className="card-body">
              <fieldset className="fieldset">
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
                <div className="flex items-center justify-center text-2xl gap-5">
                  <Link>
                    <FaGithub></FaGithub>
                  </Link>
                  <Link className="text-blue-500">
                    <FaFacebook></FaFacebook>
                  </Link>
                  <Link className="text-rose-500">
                    <FaGoogle></FaGoogle>
                  </Link>
                </div>
                <button className="btn btn-info mt-4 text-white">
                  Sign In
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
