import React from "react";

function LatestOpening() {
  let latestJobDesign = (
    <>
      <div className="bg-card p-4 bg-slate-100 rounded-lg shadow-xl shadow-[#8300ff1a]  border border-slate-200 ">
        <h3 className="text-lg font-semibold">Google</h3>
        <p className="text-zinc-600">India</p>
        <h4 className="text-md font-medium">Software engineer</h4>
        <p className="text-sm text-zinc-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aut.
        </p>
        <div className="mt-3 flex items-center justify-between">
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
          <button className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="flex items-center ">
        <div className="px-3 ">
          <h1 className="font-bold text-[30px] capitalize text-slate-700">
            <span className="text-red-500 ">Latest and top</span> job Opening
          </h1>
          <div className=" mt-6 py-5 px-5 " style={{ scrollbarWidth: "none" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <br />
      <br />
    </>
  );
}

export default LatestOpening;
