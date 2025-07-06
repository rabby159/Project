import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-lottie/login-lottie.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerSignIn from "./BannerSignIn";
import AuthContext from "../../context/AuthContext/AuthContext";
import NavbarForAuth from "../Shared/NavbarForAuth";
import SocialLogin from "../Shared/SocialLogin";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user.email);
        const user = { email: email };
        axios.post(`http://localhost:3000/jwt`, user).then((data) => {
          console.log(data);
        });
        // navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>
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
                <button className="btn btn-info mt-4 text-white">
                  Sign In
                </button>
              </fieldset>
            </form>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
