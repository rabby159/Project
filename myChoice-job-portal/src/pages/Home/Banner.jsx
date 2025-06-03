import React from "react";

const Banner = () => {
  return (
    <div
      className="hero mb-20 bg-top p-80"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/Jh0jdRMw/blonde-young-businesswoman-sitting-workplace-looking-digital-tablet-office.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
