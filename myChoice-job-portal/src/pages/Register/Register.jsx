import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerAnimation from "../../assets/register-lottie/register-lottie.json";
import BannerRegister from "./BannerRegister";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <BannerRegister></BannerRegister>
      <div className="hero my-20 max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-96">
            <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form onSubmit={handleRegister} className="card-body">
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

export default Register;
