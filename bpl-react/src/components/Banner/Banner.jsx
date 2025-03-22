import React from "react";
import BannerLogo from "../../assets/image 1.png";

const Banner = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div
        className="hero rounded-3xl"
        style={{
          backgroundImage: "url(https://i.postimg.cc/m24jgHc2/Group-3.png)",
        }}
      >
        <div className="hero-overlay rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <div className="grid justify-center my-3">
              <img src={BannerLogo} alt="" />
            </div>
            <h3 className="mb-5 text-3xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h3>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button className="btn btn-warning">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
