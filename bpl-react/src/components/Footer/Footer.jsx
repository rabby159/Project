import React from "react";
import logo from "../../assets/football.png";

const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div className="flex justify-center pt-40">
        <img className="w-60" src={logo} alt="img" />
      </div>
      <footer className="footer sm:footer-horizontal p-10 max-w-7xl m-auto text-white">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-info join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
