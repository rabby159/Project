import React from "react";
import coverImg from "../../assets/pngwing 1.png";

const Home = () => {
  return (
    <div className="hero bg-base-200 my-10 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse px-40">
        <img src={coverImg} alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-success mt-10 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
