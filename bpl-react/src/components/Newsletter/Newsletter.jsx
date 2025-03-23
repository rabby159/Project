import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-7xl m-auto bg-gradient-to-r from-indigo-200 from-10% via-sky-50 via-50% to-emerald-200 to-90% text-center p-20 my-8 rounded-3xl">
      <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
      <p className="text-sm font-light">
        Get the latest updates and news right in your inbox!
      </p>

      <div className="join mt-5">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-info text-white join-item">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
