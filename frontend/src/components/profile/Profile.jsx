import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineLocalPhone } from "react-icons/md";
import { json, Navigate, useNavigate } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import Alltoast from "../toast/Alltoast";
import axios from "axios";
import { FaWindowClose } from "react-icons/fa";
import { BACKEND_URL } from "../../utils/constant";
function Profile() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = localStorage.getItem("userdata");
  const userData = JSON.parse(user);
  const [upd, serUpd] = useState(false);
  // update
  const [loading, setLoading] = useState(false);
  // const { user } = useSelector(store => store.auth);
  const [loadData, setLoad] = useState(false);
  const [applicationData, setAppData] = useState();
  const [input, setInput] = useState({
    fullname: userData?.user?.fullname || "",
    email: userData?.user?.email || "",
    phoneNumber: userData?.user?.phoneNumber || "",
    bio: userData?.user?.profile?.bio || "",
    skills: userData?.user?.profile?.skills?.map((skill) => skill) || "",
    resume: userData?.user?.profile?.resume || "",
  });
  const userSkilss = userData?.user?.profile?.skills;

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // Create formData and append fields
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    console.log(input);

    if (input.file) {
      formData.append("file", input.file); // Append file if it exists
    }

    console.log(input.file);

    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/api/v1/user/profile/update`, {
        method: "POST",
        body: formData, // No need to set Content-Type header, FormData will handle it
        credentials: "include", // Ensure cookies are sent if needed
      });
      const result = await res.json();
      console.log(result);
      setLoading(false);
      // Assuming you want to store the updated user data in local storage
      localStorage.setItem("userdata", JSON.stringify(result));
      Alltoast(result.message, result.success);
    } catch (error) {
      // Handle fetch errors or other issues
      Alltoast("An error occurred while updating the profile.", false);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  //
  const [showContact, setShowContact] = useState(false);
  const model = (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <button
                type="button"
                className="rounded bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-red-600 absolute hover:text-white"
                onClick={() => setShowContact(false)}
              >
                <RxCross1 />
              </button>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Contact Information
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      <div className="">
                        <div className="font-semibold flex items-center gap-2">
                          <MdOutlineMail size={"26px"} />
                          <p>Email</p>
                        </div>
                        <p className="mx-9 text-[17px]">
                          {userData?.user?.email}
                        </p>
                      </div>
                      <div className="">
                        <div className="font-semibold flex items-center gap-2">
                          <MdOutlineLocalPhone size={"26px"} />
                          <p>Number</p>
                        </div>
                        <p className="mx-9 text-[17px]">
                          {userData.user.phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const reponse = await fetch(`${BACKEND_URL}/api/v1/application/get`, {
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`,
          },
          // credentials: "include",
        });
        const result = await reponse.json();
        setAppData(result.application);
        setLoad(false);
        console.log(result);

        console.log(result.application);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const resumeAlert = () => {
    if (!userData?.user?.profile?.resume)
      Alltoast("please upload resume", false);
    else {
      const fileUrl = `${BACKEND_URL}/uploads/${userData?.user?.profile?.resume}`;
      window.open(fileUrl, "_blank");
    }
  };
  const updateProfile = (
    <div className="fixed top-0 backdrop-blur-sm flex items-center justify-center h-[100%] w-[100%]">
      <div className="   top-[20vh]  ">
        <div className="relative bg-white shadow-md shadow-red-100  p-5 rounded sm:max-w-[425px]">
          <button
            className="bg-red-600 text-white p-1 absolute top-0 left-0 rounded"
            onClick={() => serUpd(false)}
          >
            <FaWindowClose />
          </button>
          <div className="mt-5 text-center bg-slate-200 rounded text-black font-semibold p-1">
            <h1>Update Profile</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <input
                  id="name"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3 outline-none border-b-2 border-b-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  readOnly
                  value={input?.email}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-red-50 p-1 rounded outline-none border-b-2 border-b-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="number" className="text-right">
                  Number
                </label>
                <input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3 outline-none border-b-2 border-b-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="bio" className="text-right">
                  Bio
                </label>
                <input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 outline-none border-b-2 border-b-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="skills" className="text-right">
                  Skills
                </label>
                <input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 outline-none border-b-2 border-b-black"
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <label htmlFor="file" className="text-right">
                  Resume
                </label>
                {!userData?.user?.profile?.resume ? (
                  <button
                    type="button"
                    onClick={resumeAlert}
                    className="font-bold text-blue-900"
                  >
                    <p className="w-[220px] ">no resume uploaded</p>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resumeAlert}
                    className="font-bold text-blue-900"
                  >
                    <p className="w-[220px] ">
                      {userData?.user?.fullname}'s resume
                    </p>
                  </button>
                )}

                <input
                  id="file"
                  name="resume"
                  type="file"
                  onChange={fileChangeHandler}
                  className="col-span-3 border-2 w-[100px]"
                />
              </div>
            </div>

            <div>
              {loading ? (
                <button className="w-full my-4">
                  {" "}
                  <div className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full my-4 bg-red-500 p-1 rounded text-white hover:bg-red-600"
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
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
  const datasForApplicant = applicationData?.map((v, i) => {
    return (
      <>
        <tr key={i}>
          <th scope="col" className="px-6 py-3 ">
            <img
              src={`${BACKEND_URL}/uploads/${v.job.company.file}`}
              alt=""
              className="h-[30px] w-[30px] "
            />
          </th>
          <th scope="col" className="px-6 py-3">
            {v.job.company.companyName}
          </th>
          <th scope="col" className="px-6 py-3">
            {v.job.title}
          </th>
          <th scope="col" className="px-6 py-3">
            {formatDate(v.job.updatedAt)}
          </th>{" "}
          <th scope="col" className="px-6 py-3">
            <div className="flex gap-4 flex-wrap">
              <button
                className="bg-slate-300 rounded p-2 text-black"
                onClick={() => navigate(`/jobinfo/${v.job._id}`)}
              >
                more details
              </button>
            </div>
          </th>
          <th>
            <button
              className={`${
                v.status == "accepted"
                  ? "bg-green-600 text-white"
                  : v.status == "rejected"
                  ? "bg-red-500 text-white"
                  : "bg-yellow-400 text-black"
              } px-7 mb-2 rounded py-2 mt-4  font-semibold `}
            >
              {v.status}
            </button>
          </th>
        </tr>
      </>
    );
  });
  return (
    <>
      <br /> <br /> <br />
      <div className="relative">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-[rgb(255,255,255)] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_2%,_rgba(165,255,207,0.08175770308123254)_17%,_rgba(106,255,206,0.07335434173669464)_42%,_rgba(179,255,151,0.10696778711484589)_60%,_rgba(210,255,140,0.09576330532212884)_72%,_rgba(170,142,235,0.14618347338935578)_100%)] rounded shadow-xl border border-slate-200 shadow-blue-200 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={`${BACKEND_URL}/uploads/${userData?.user?.profile?.profilePhoto}`}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-semibold">
                    {userData.user.fullname}
                  </h1>
                  <p className="text-slate-900">{input.bio}</p>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="text-blue-900 font-semibold underline"
                      onClick={() => setShowContact(true)}
                    >
                      Contact info
                    </button>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      onClick={() => serUpd(true)}
                    >
                      edit
                    </button>
                    {/* <button
                      onClick={resumeAlert}
                      target="_blank"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </button> */}
                    <button
                      href={`${BACKEND_URL}/uploads/${userData?.user?.profile?.resume}`} // Use the filename stored in the database
                      target="_blank"
                      onClick={resumeAlert}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </button>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul className="flex items-center flex-wrap gap-1">
                    {userSkilss.map((v, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-red-100 text-blue-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-slate-400"
                        >
                          {v}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl col-span-4 sm:col-span-9">
              <div className="shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Your Applications</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Logo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Company Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {loadData ? (
                        <tr>
                          <td colSpan="6" className="px-6 py-4 text-center">
                            Loading...
                          </td>
                        </tr>
                      ) : datasForApplicant?.length > 0 ? (
                        datasForApplicant
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-4 text-center">
                            You didn't apply for any job
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* model */}
      {showContact ? model : ""}
      {/* update model */}
      {upd ? updateProfile : ""};
    </>
  );
}

export default Profile;
