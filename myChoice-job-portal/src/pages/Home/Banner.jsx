import React from "react";

const Banner = () => {
  return (
    <div
      className="mb-20 bg-top p-80"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/Jh0jdRMw/blonde-young-businesswoman-sitting-workplace-looking-digital-tablet-office.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
      <div className="text-left text-white isolation: isolate">
        <div className="">
          <h1 className="mb-5 text-6xl font-bold">
            Search Between More <br /> Then{" "}
            <span className="text-blue-400 bg-blue-100 py-1 px-2 rounded-2xl text-5xl">
              50,000
            </span>{" "}
            Open Jobs.
          </h1>
          <p className="mb-5 text-xl">
            Trending Jobs Keywords:
            <span className="text-blue-400 mr-1">
              {" "}
              Web Designer{" "}
            </span>
            <span className="text-blue-400 mr-1">
              {" "}
              Web Developer{" "}
            </span>
            <span className="text-blue-400 mr-1">
              {" "}
              IOS Developer{" "}
            </span>
            <span className="text-blue-400 mr-1">
              {" "}
              Android Developer{" "}
            </span>
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
