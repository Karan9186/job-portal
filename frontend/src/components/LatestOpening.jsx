import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alltoast from "./toast/Alltoast";

function LatestOpening() {
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
        Alltoast(
          result.message + ", please login or signup account",
          result.success
        );
      }
      Alltoast(result.message, result.success);
    } catch (err) {
      console.log(err);
    }
  };
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/job/getalljobs",
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const result = await response.json();

      setJobData(result.jobs);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const showAllJob = jobData.map((v, i) => {
    return (
      <>
        <div
          className="bg-card p-4 bg-slate-100 rounded-lg shadow-xl shadow-[#8300ff1a]  border border-slate-200 "
          key={i}
        >
          <h3 className="text-lg font-semibold">{v.company.companyName}</h3>
          <p className="text-zinc-600">{v.location}</p>
          <h4 className="text-md font-medium">{v.title}</h4>
          <p className="text-sm text-zinc-500">{v.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3 ">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {v.position} position
              </span>

              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                {v.jobType}
              </span>

              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                {v.salary}LPA
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded"
              onClick={() => applyJobByUser(v._id)}
            >
              Apply Now
            </button>
            <button
              className="bg-slate-300 text-black font-semibold hover:bg-slate-400 mt-3 py-2 px-4 rounded"
              onClick={() => navigate(`/jobinfo/${v._id}`)}
            >
              Show details
            </button>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="">
        <div className="px-3 ">
          <h1 className="font-bold text-[30px] capitalize text-slate-700">
            <span className="text-red-500 ">Latest and top</span> job Opening
          </h1>
          <div className=" mt-6 py-5 px-5 " style={{ scrollbarWidth: "none" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {showAllJob}
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
