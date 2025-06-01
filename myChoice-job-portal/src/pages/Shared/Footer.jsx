import React from "react";
import logo from "../../assets/logos/new-logo.png";
import { FaChevronRight, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-200">
      <footer className="footer sm:footer-horizontal max-w-7xl mx-auto text-base-content p-10">
        <aside>
          <img src={logo} alt="logo" />
          <p className="italic">
            myChoice Job Portal
            <br />
            Providing reliable tech since 2024
          </p>
          <div className="flex items-center justify-center text-3xl gap-5 mt-2">
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
        </aside>
        <nav>
          <h6 className="font-bold text-xl">Job Categories</h6>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Work from Home</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Internship Job</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Freelancer Job</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Part Time Job</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Full Time Job</a>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Job Type</h6>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Create Account</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Career Counseling</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">My Oficiona</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Report a Problem</a>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Resources</h6>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">My Account</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Support</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">How It Works</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Employers</a>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Legal</h6>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Terms of use</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Privacy policy</a>
          </div>
          <div className="flex items-center">
            <FaChevronRight />
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
