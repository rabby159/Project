import React from "react";
import logo from "../../assets/logos/new-logo.png";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  const Buttons = (
    <div className="space-x-2">
      <button className="btn btn-soft btn-info">Sign In</button>
      <button className="btn btn-info text-white">Register</button>
    </div>
  );
  return (
    <div>
      <div className="navbar">
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
              {Buttons}
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
            <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
          </div>
          <div className="hidden md:flex">{Buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
