import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="text-xl font-bold">Simple Book</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success text-white">Sign In</a>
        <a className="btn btn-info ml-3 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
