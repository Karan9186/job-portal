import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoading from "./AdminLoading";
import { BACKEND_URL } from "../../../utils/constant";
function ShowAllJob() {
  const navigate = useNavigate();
  const [Jobs, setJobs] = useState([]);
  const [loading, setLoad] = useState(false);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const response = await fetch(
          `${BACKEND_URL}/api/v1/job/adminjob`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // for cookies
          }
        );
        const result = await response.json();
        setJobs(result.jobs);
        console.log(result.jobs);

        setLoad(false); // Ensure companies is always an array
      } catch (error) {
        console.error("Error fetching company data:", error);
        setCompany([]); // In case of an error, set companies to an empty array
      }
    };
    fetchData(); // Fetch company data on component mount
  }, []);

  const allJobs = Jobs.map((v, i) => {
    return (
      <>
        <tr className="bg-white border-b " key={i}>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <img
              // src={v.company.file}
              src={`${BACKEND_URL}/uploads/${v.company.file}`}
              alt="company"
              className="h-[50px] w-[50px] rounded-md"
            />
          </th>
          <td className="px-6 py-4">{v.company.companyName}</td>
          <td className="px-6 py-4">{v.title}</td>
          <td className="px-6 py-4">{formatDate(v.createdAt)}</td>
          <div className=" items-center gap-4 mb-4 w-[100px]">
            <button
              className="bg-yellow-400 w-[100px] px-7 rounded py-2 mt-4 text-black font-semibold"
              onClick={() => navigate(`/recruiter/job/update/${v._id}`)}
            >
              edit
            </button>
            <button
              className="bg-blue-400 px-7 w-[100px] rounded py-2 mt-4 text-white font-semibold"
              onClick={() => navigate(`/recruiter/applicant/job/${v._id}`)}
            >
              applicant
            </button>
          </div>
        </tr>
      </>
    );
  });
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="relative  p-4  min-h-screen">
        <button
          className="bg-red-500 px-5 py-2 rounded-xl absolute right-5 mt-[-55px]  text-white font-semibold"
          onClick={() => navigate("/recruiter/add/job")}
        >
          Add Job
        </button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                logo
              </th>
              <th scope="col" className="px-6 py-3">
                compnay name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <AdminLoading />
            ) : allJobs.length > 0 ? (
              allJobs
            ) : (
              "no job posted by you"
            )}
          </tbody>
        </table>
        {/* {loading ? <AdminLoading /> : "No Job posted by You"} */}
      </div>
    </>
  );
}

export default ShowAllJob;
