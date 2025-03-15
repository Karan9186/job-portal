import React, { useEffect, useState } from "react";
import logo from "../../public/vite.svg";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import Alltoast from "./toast/Alltoast";
import { BACKEND_URL } from "../utils/constant";

function JobDetails() {
  const [jobData, setJobData] = useState();
  const { id } = useParams();
  const [checkApp, setCheckApp] = useState(false);
  const currentUserId = id;
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setLoader(true);
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/v1/job/get/${id}`);
        const result = await response.json();
        console.log(result.job.application);
        setJobData(result.job);

        const fetchData = async () => {
          try {
            const reponse = await fetch(
              `${BACKEND_URL}/api/v1/application/get`,
              {
                headers: {
                  "Content-Type": "Application/json",
                  Authorization: `Bearer ${token}`,
                },
                // credentials: "include",
              }
            );
            const result = await reponse.json();
            // if (!result.succsess) {
            //   Alltoast(result.message, result.succsess);
            // }
            const applyJob = result.application;
            applyJob.forEach((v) => {
              if (v.job._id === currentUserId) {
                setCheckApp(true);
              }
            });
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, location]);

  // Function to format the date
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 24-hour format
    };

    const formattedDate = new Date(date).toLocaleString("en-GB", options);
    return formattedDate.replace(",", ""); // Remove comma
  }

  // Function to apply for the job
  const applyJobByUser = async (jobId) => {
    try {
      console.log("tokensd", token);
      const response = await fetch(
        `${BACKEND_URL}/api/v1/application/apply/${jobId}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // credentials: "include",
        }
      );
      const result = await response.json();
      console.log("the resjfsd=", result);
      if (!result.success) {
        Alltoast(result.message, false);
      } else {
        Alltoast(result.message, true);
        setCheckApp(true);
      }

      // checking the applicant matchat the id
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
      <div className="flex justify-center flex-wrap gap-4">
        <div className="w-[80%] lg:w-[60%] md:w-[50%] py-3 px-3 rounded bg-white rounded-md shadow-xl shadow-blue-100">
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <h1 className="font-semibold text-[30px] pb-3">{jobData?.title}</h1>
          )}
          <hr />
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <p className="mt-3">{jobData?.description}</p>
          )}
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Requirement</h1>
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {jobData?.requirements?.map((v, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                >
                  {v}
                </span>
              ))}
            </div>
          )}

          <br />
          <h1 className="font-semibold text-[20px] pb-2">Job Type</h1>
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {jobData?.jobType}
              </span>
            </div>
          )}
          <br />
          <h1 className="font-semibold text-[20px] pb-2">Experience Level</h1>
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {jobData?.experienceLevel}
              </span>
            </div>
          )}
          <br />
          <h1 className="font-semibold text-[20px] pb-2">No of Positions</h1>
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {jobData?.position}
              </span>
            </div>
          )}
          <br />
        </div>
        <div className="w-[80%] lg:w-[23%] md:w-[30%] shadow-xl rounded-md shadow-blue-100 h-fit px-4 py-4 rounded border-slate-300 bg-white">
          <div className="flex flex-col items-center">
            {loader ? (
              <div
                role="status"
                class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
              >
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-60">
                  <svg
                    class="w-10 h-10 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                src={`${BACKEND_URL}/uploads/${jobData?.company?.file}`}
                alt=""
                className="h-[100px] w-[100px]"
              />
            )}

            {loader ? (
              <div role="status" class="max-w-sm animate-pulse">
                <br />
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <h1 className="mt-3 font-semibold text-[23px]">
                {jobData?.company?.companyName}
              </h1>
            )}
          </div>
          {loader ? (
            <div role="status" class="max-w-sm animate-pulse">
              <br />
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
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
                <p>{jobData?.salary} LPA</p>
              </div>
            </div>
          )}
          {loader ? (
            <button
              disabled
              className="bg-gray-500 w-full rounded py-1 mt-3 text-white font-semibold"
            >
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          ) : checkApp ? (
            <button
              disabled
              className="bg-gray-500 w-full rounded py-1 mt-3 text-white font-semibold"
            >
              Already Applied
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 w-full rounded py-1 mt-3 text-white font-semibold"
              onClick={() => applyJobByUser(id)}
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default JobDetails;
