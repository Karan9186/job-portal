import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import Alltoast from "../../toast/Alltoast";
function Applicant() {
  const navigate = useNavigate();
  const [appId, setAppId] = useState();
  const [loading, setloading] = useState(false);
  const [res, setRes] = useState(false);
  const { id } = useParams();
  const [jobTitle, setJobTitle] = useState();
  const [appResponse, setAppRespo] = useState();
  const [jobApplicant, setJobApplicant] = useState([]);
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
  const responseSelection = async (e) => {
    const response = e.target.value;
    setAppRespo(response);
    try {
      const re = await fetch(
        `http://localhost:3000/api/v1/application/status/${appId}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: response }), // It's important to send the data as JSON
          credentials: "include",
        }
      );
      const result = await re.json();
      console.log(result);
      Alltoast(result.message, result.success);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/application/${id}/applicants`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result.job);
      setAppId(result.job.application[0]._id);
      setJobTitle(result.job.title);
      setJobApplicant(result.job.application);
      console.log(result);

      setloading(false);
    };
    fetchData();
  }, [appResponse]);

  const ApplicantData = jobApplicant.map((v, i) => {
    const resumeUser =
      `http://localhost:3000/uploads/${v.applicant.profile.resume}` ||
      "not resume";
    console.log(resumeUser);
    console.log(v.applicant.profile.resume);

    return (
      <>
        <tr className="bg-white border-b " key={i}>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <h1>{jobTitle}</h1>
          </th>
          <td className="px-6 py-4">{v.applicant.fullname}</td>
          <td className="px-6 py-4">{v.status}</td>
          <td className="px-6 py-4">{formatDate(v.createdAt)}</td>
          <td className="px-6 py-4">
            {resumeUser ? (
              <a
                href={resumeUser}
                target="_blank"
                className="text-blue-900 font-bold"
              >
                {v.applicant.fullname} 's resume
              </a>
            ) : (
              "no resume"
            )}
          </td>
          <div className="flex items-center gap-4 w-[100px]">
            <button
              className={`${
                v.status == "accepted"
                  ? "bg-green-600 text-white"
                  : v.status == "rejected"
                  ? "bg-red-500 text-white"
                  : "bg-yellow-400 text-black"
              } px-7 mb-2 rounded py-2 mt-4  font-semibold `}
              onClick={() => setRes(!res)}
            >
              <div className="flex  items-center gap-2">
                <BsThreeDots />
                {v.status}
              </div>
            </button>
          </div>
        </tr>
      </>
    );
  });
  return (
    <>
      <div
        className={`${
          res == false ? "hidden" : ""
        } absolute backdrop-blur-sm w-[100%]  z-10  flex items-center justify-center h-[100%]`}
      >
        <ul className="bg-white shadow-xl  shadow-red-300/50  px-4 py-4 rounded w-[300px]">
          <button
            className="bg-red-500 rounded-md p-2 text-white"
            onClick={() => setRes(!res)}
          >
            <ImCross />
          </button>
          <br />

          <h1 className="mt-3 font-semibold text-[18px]  mb-2">
            Select The Option
          </h1>
          <select
            name="response"
            id="res"
            onChange={responseSelection}
            className="bg-red-200 w-full p-2 rounded "
          >
            <option value="pending">pending</option>
            <option value="rejected">rejected</option>
            <option value="accepted">accepted</option>
          </select>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="relative  p-4  min-h-screen">
        <button
          class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 bottom-3 right-1 ring-1 ring-inset ring-pink-700/10 "
          onClick={() => navigate("/recruiter/show/job")}
        >
          Go Back
        </button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Job role
              </th>
              <th scope="col" className="px-6 py-3">
                Applicant Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                resume
              </th>
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? "no response by user"
              : ApplicantData.length > 0
              ? ApplicantData
              : "no response by user"}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Applicant;
