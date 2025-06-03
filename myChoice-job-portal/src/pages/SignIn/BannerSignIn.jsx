import React from "react";

const BannerSignIn = () => {
  return (
    <div
      className="hero mt-20"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/rwW0ctnZ/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md py-20">
          <h1 className="mb-5 text-5xl font-bold">Welcome Back</h1>
          <p>Have a nice day!</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSignIn;
