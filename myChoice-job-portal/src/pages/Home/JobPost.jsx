import React from "react";

const JobPost = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center my-20">
      <div className="join join-vertical lg:join-horizontal bg-blue-200 py-4 px-5 rounded">
        <input
          className="join-item btn text-xl"
          type="radio"
          name="options"
          aria-label="Latest Job"
        />
        <input
          className="join-item btn text-xl"
          type="radio"
          name="options"
          aria-label="Recent Job"
        />
      </div>
    </div>
  );
};

export default JobPost;
