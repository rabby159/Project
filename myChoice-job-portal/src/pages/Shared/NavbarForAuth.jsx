import React, { useContext } from "react";
import logo from "../../assets/logos/new-logo.png";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const NavbarForAuth = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log("SignOut");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <details>
          <summary>Employee</summary>
          <ul className="bg-blue-50 w-[140px]">
            <li className="text-sm text-black">
              <NavLink to="/addJob">Add Job</NavLink>
            </li>
            <li className="text-sm text-black">
              <NavLink to="/myPostedJob">My Posted Job</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Candidate</summary>
          <ul className="bg-blue-50 w-[140px]">
            <li className="text-sm text-black">
              <NavLink to="/myApplication">Profile</NavLink>
            </li>
            <li className="text-sm">
              <NavLink to="/myApplication">My Application</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  const Buttons = (
    <div className="space-x-2">
      <Link to="/signIn" className="btn btn-soft btn-info">
        Sign In
      </Link>

      <Link to="/register" className="btn btn-info text-white">
        Register
      </Link>
    </div>
  );

  return (
    <div className="w-full z-50 bg-blue-50 ">
      <div className="navbar max-w-7xl mx-auto">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
              {user ? (
                <>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-soft btn-info"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>{Buttons}</>
              )}
            </ul>
          </div>
        </div>
        <div className="flex items-center md:navbar-start ">
          <img className="w-16 lg:w-24" src={logo} alt="logo" />
          <p className="text-xl lg:text-2xl font-semibold italic">
            myChoice Job Portal
          </p>
        </div>
        <div className="md:navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal z-20 px-1 text-xl">
              {NavLinks}
            </ul>
          </div>
          <div className="hidden md:flex">
            {user ? (
              <>
                <button
                  onClick={handleSignOut}
                  className="btn btn-soft btn-info"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>{Buttons}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForAuth;
