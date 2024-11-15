import React, { useEffect, useState } from "react";
import logo from "../../public/vite.svg";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Alltoast from "./toast/Alltoast";
function JobDetails() {
  const [jobData, setJobData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/job/get/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const result = await response.json();
        console.log(result.job);
        setJobData(result.job);
      } catch (err) {
        console.log(err);
      }
    };
    fetData();
  }, []);
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
  const applyJobByUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/application/apply/${id}`,
        {
          method: "get",
          headers: {
            "Content-Type": "Application/json",
          },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result);
      if (!result.success) {
        Alltoast(result.message, result.success);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center gap-4">
        <div className="w-[60%] py-3 px-3 rounded bg-white rounded-md shadow-xl shadow-blue-100">
          <h1 className="font-semibold text-[30px] pb-3">{jobData?.title}</h1>
          <hr />
          <p className="mt-3">{jobData?.description}</p>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Requirement</h1>
          <div className="flex items-center gap-3 ">
            {jobData?.requirements?.map((v, i) => {
              return (
                <>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {v}
                  </span>
                </>
              );
            })}
          </div>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Job Type</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {jobData?.jobType}
            </span>
          </div>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Experence Level</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {jobData?.experienceLevel}
            </span>
          </div>
          <br />
          <h1 className="font-semibold text-[20px] pb-2">No of Position</h1>
          <div className="flex items-center gap-3 ">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {jobData?.position}
            </span>
          </div>
          <br />
        </div>
        <div className="w-[23%] shadow-xl rounded-md shadow-blue-100 h-fit px-4 py-4 rounded border-slate-300 bg-white">
          <div className="flex flex-col items-center ">
            <img src={logo} alt="" className="h-[100px]  w-[100px]" />
            <h1 className="mt-3 font-semibold text-[23px]">
              {jobData?.company?.companyName}
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-4">
              <BsCalendarDateFill size={"22px"} className="text-slate-600" />
              <p>{formatDate(jobData?.company?.createdAt)}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot size={"22px"} className="text-slate-600" />
              <p>
                {jobData?.location} / {jobData?.jobType}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaRupeeSign size={"22px"} className="text-slate-600" />
              <p>Rs.{jobData?.salary}</p>
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 w-full rounded py-1 mt-3 text-white font-semibold"
            onClick={() => applyJobByUser(id)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
