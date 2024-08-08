import React from "react";

function LatestOpening() {
  let latestJobDesign = (
    <>
      <div className="bg-slate-100 drop-shadow-xl p-3 rounded-md min-w-[400px] max-w-[400px] border border-red-100">
        <h1 className="font-bold text-[18px] text-slate-800">Google</h1>
        <p className="text-slate-600">India</p>
        <h1 className="font-bold text-[20px] pt-1 text-slate-800">
          Software engineer
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              2 position
            </span>

            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Full Time
            </span>

            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
              45LPA
            </span>
          </div>
          <button className="bg-red-500 py-1 px-3 rounded-md text-white font-semibold hover:bg-red-600">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="flex items-center ">
        <div className="px-20 ">
          <h1 className="font-bold text-[30px] capitalize text-slate-700">
            <span className="text-red-500 ">Latest and top</span> job Opening
          </h1>
          <div
            className="  w-[88vw] mt-6 py-5"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex flex-wrap align-center gap-5 ">
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
              {latestJobDesign}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default LatestOpening;
