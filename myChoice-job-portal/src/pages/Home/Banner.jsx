import React from "react";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <div
      className="mb-20 p-80"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/Jh0jdRMw/blonde-young-businesswoman-sitting-workplace-looking-digital-tablet-office.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
      <div className="text-left  isolation: isolate">
        <div>
          <h1 className="mb-5 text-6xl font-bold text-white">
            Search Between More <br /> Then{" "}
            <span className="text-blue-400 bg-blue-100 py-1 px-2 rounded-2xl text-5xl">
              <CountUp duration={7} end={50000} />
            </span>{" "}
            Open Jobs.
          </h1>
          <p className="mb-5 text-xl text-white my-8">
            Trending Jobs Keywords:
            <span className="text-blue-400 mr-1"> Web Designer </span>
            <span className="text-blue-400 mr-1"> Web Developer </span>
            <span className="text-blue-400 mr-1"> IOS Developer </span>
            <span className="text-blue-400 mr-1"> Android Developer </span>
          </p>
          <div className="join bg-blue-50 p-2 rounded-3xl">
            <div className="w-60 flex items-center border-r-1 border-r-blue-200 ml-4 mr-1">
              <label>
                <input
                  className="p-2"
                  type="text"
                  placeholder="Search Keywords.."
                />
              </label>
            </div>
            <select className="join-item w-40 border-r-1 border-r-blue-200 mr-1">
              <option disabled selected>
                Location
              </option>
              <option>Dhaka</option>
              <option>Barisal</option>
              <option>Khulna</option>
            </select>
            <select className="join-item w-40 mr-1">
              <option disabled selected>
                Category
              </option>
              <option>Software Developer</option>
              <option>React Developer</option>
              <option>Java Developer</option>
              <option>PHP Developer</option>
            </select>
            <div>
              <button className="btn btn-info rounded-br-3xl rounded-tr-3xl text-white join-item w-32 text-xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
