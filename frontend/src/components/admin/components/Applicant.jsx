import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
function Applicant() {
  const [res, setRes] = useState(false);
  return (
    <>
      <div
        className={`${
          res == false ? "hidden" : ""
        } absolute backdrop-blur-sm w-[100%]  z-10  flex items-center justify-center h-[100%]`}
      >
        <ul className="bg-white shadow-xl shadow-red-300/50  px-4 py-4 rounded w-[300px]">
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
            className="bg-red-200 w-full p-2 rounded "
          >
            <option value="null">No selection</option>
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
        <button className="bg-red-500 px-5 py-2 rounded-xl absolute right-5 mt-[-55px]  text-white font-semibold">
          Add Job
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
                action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <h1>Software engineering</h1>
              </th>
              <td className="px-6 py-4">karan</td>
              <td className="px-6 py-4">panding</td>
              <td className="px-6 py-4">01-2-2024</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button
                  className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold"
                  onClick={() => setRes(!res)}
                >
                  <BsThreeDots />
                </button>
              </div>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <h1>Software engineering</h1>
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button
                  className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold"
                  onClick={() => setRes(!res)}
                >
                  <BsThreeDots />
                </button>
              </div>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <h1>Software engineering</h1>
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button
                  className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold"
                  onClick={() => setRes(!res)}
                >
                  <BsThreeDots />
                </button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Applicant;
