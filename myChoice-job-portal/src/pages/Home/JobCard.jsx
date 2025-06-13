import React from "react";

const JobCard = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm px-5 py-5">
        <div className="flex items-center gap-6">
          <figure className="flex-1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="flex-auto">
            <h3>title</h3>
            <p>location</p>
          </div>
        </div>
        <div className="py-5">
          <h2 className="card-title">Position Name</h2>
          <div className="flex items-center gap-5">
            <p>Shift</p>
            <p>Time</p>
          </div>
        </div>
        <div className="pb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            ipsam!
          </p>
        </div>
        <div className="pb-5">
          <p>technologies</p>
        </div>
        <div className="flex justify-between items-center">
                  <h2>Amount</h2>
                  <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */
}

export default JobCard;
