import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiSaveDown2 } from "react-icons/ci";
import {
  faIndianRupeeSign,
  faBriefcase,
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function JobsLeftRight({ v }) {
  const truncateDescription = (description, limit) => {
    if (description.length > limit) {
      return description.slice(0, limit) + "......"; // Truncate and add "......"
    }
    return description;
  };
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // For 24-hour format
    };

    const formattedDate = new Date(date).toLocaleString("en-GB", options);
    return formattedDate.replace(",", ""); // Remove comma
  }
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* here */}

        <div className="h-auto w-[40vw] bg-white shadow-lg rounded-2xl border-1 border-gray-200 p-4 mb-6 shadow-blue-200">
          <h2 className="text-lg font-semibold text-gray-800">{v?.title}</h2>
          <h3 className="text-md font-semibold text-gray-500">
            {v?.company?.companyName}
          </h3>

          <div className="mt-3 flex gap-2">
            <p className="text-md text-gray-700">
              <FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1" />
              {v?.experienceLevel} Yrs |{" "}
            </p>
            <p className="text-md text-gray-700">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="h-[13px] text-gray-600"
              />{" "}
              {v?.salary} {" LPA "}
            </p>
            <p className="text-md text-gray-700">
              <FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1" />
              {v?.location}
            </p>
          </div>

          <div className="mt-2">
            <h4 className="text-sm font-semibold text-gray-600">
              {truncateDescription(v?.description, 90)}
            </h4>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-[12px] text-gray-500">
              {formatDate(v?.updatedAt)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              {/* <button className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded">
                Apply Now
              </button> */}
              <button
                className="bg-slate-200 text-black font-semibold hover:bg-slate-300 mt-3 py-2 px-4 rounded"
                onClick={() => navigate(`/jobinfo/${v?._id}`)}
              >
                See Details
              </button>
            </div>
            {/* <button className="text-indigo-500 text-sm font-medium">
              <CiSaveDown2 size={30} />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsLeftRight;
