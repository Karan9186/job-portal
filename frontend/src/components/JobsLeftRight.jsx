import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiSaveDown2 } from "react-icons/ci";
import {
  faIndianRupeeSign,
  faBriefcase,
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function JobsLeftRight() {
  const navigate = useNavigate();
  const jobsPanel = (
    <>
      <div className="h-auto w-[auto] bg-white shadow-lg rounded-2xl border-1 border-gray-200 p-4 mb-6 shadow-blue-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Openings For Freshers(Java with Spring Boot and Microservices, AWS)
        </h2>
        <h3 className="text-md font-semibold text-gray-500">
          First Quad Tech Solutions
        </h3>

        <div className="mt-3 flex gap-2">
          <p className="text-md text-gray-700">
            <FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1" />
            0-4 Yrs |{" "}
          </p>
          <p className="text-md text-gray-700">
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              className="h-[13px] text-gray-600"
            />{" "}
            0-4 Yrs |{" "}
          </p>
          <p className="text-md text-gray-700">
            <FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1" />
            Pune (Baner)
          </p>
        </div>

        <div className="mt-2">
          <h4 className="text-sm font-semibold text-gray-600">
            Role & Responsibilities AWS DevOps Engineer (Freshers with 0-3 years
            experience). Java w...
          </h4>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-[12px] text-gray-500">5 Days Ago</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded">
              Apply Now
            </button>
            <button
              className="bg-slate-200 text-black font-semibold hover:bg-slate-300 mt-3 py-2 px-4 rounded"
              onClick={() => navigate("/jobinfo/1")}
            >
              See Details
            </button>
          </div>
          <button className="text-indigo-500 text-sm font-medium">
            <CiSaveDown2 size={30} />
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div>
        <div className="flex flex-row justify-center mb-[10px] gap-12">
          <p className="font-semibold text-gray-500 text-[13px]">
            1 - 20 of 13193 Spring Boot Jobs
          </p>
          <a href="" className="font-semibold text-blue-500 text-[13px]">
            Send me jobs like these
          </a>
          <p className="font-semibold text-gray-500 text-[13px]">
            Sort by: Recommended
          </p>
        </div>

        {/* here */}
        {jobsPanel}
        {jobsPanel}
        {jobsPanel}
        {jobsPanel}
      </div>
    </>
  );
}

export default JobsLeftRight;
