import React from "react";
import logo from "../../public/vite.svg";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
function JobDetails() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center gap-4">
        <div className="w-[60%] py-3 px-3 rounded bg-white rounded-md shadow-xl shadow-blue-100">
          <h1 className="font-semibold text-[30px] pb-3">Software Developer</h1>
          <hr />
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            illum nostrum voluptates minima nihil quae sequi, quaerat molestias,
            accusantium sed, ipsum quidem minus ut ipsa facilis totam rerum a.
          </p>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Requirement</h1>
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
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Job Type</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              hybrid
            </span>
          </div>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Experence Level</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              1-10
            </span>
          </div>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">No of Position</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              10
            </span>
          </div>
          <br />
        </div>
        <div className="w-[23%] shadow-xl rounded-md shadow-blue-100 h-fit px-4 py-4 rounded border-slate-300 bg-white">
          <div className="flex flex-col items-center ">
            <img src={logo} alt="" className="h-[100px]  w-[100px]" />
            <h1 className="mt-3 font-semibold text-[23px]">Compnay Name</h1>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-4">
              <BsCalendarDateFill size={"22px"} className="text-slate-600" />
              <p>24 August, 2024</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot size={"22px"} className="text-slate-600" />
              <p>London, UK / Remote friendly</p>
            </div>
            <div className="flex items-center gap-4">
              <FaRupeeSign size={"22px"} className="text-slate-600" />
              <p>$75K - $100K</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 w-full rounded py-1 mt-3 text-white font-semibold">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
