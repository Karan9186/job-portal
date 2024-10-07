import React from "react";
import h1 from "../../../../public/h1.jpg";
function ShowAllJob() {
  return (
    <>
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
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold">
                  edit
                </button>
                <button className="bg-blue-400 px-7 rounded py-2 mt-4 text-white font-semibold">
                  applicant
                </button>
              </div>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold">
                  edit
                </button>
                <button className="bg-blue-400 px-7 rounded py-2 mt-4 text-white font-semibold">
                  applicant
                </button>
              </div>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <div className="flex items-center gap-4 w-[100px]">
                <button className="bg-yellow-400 px-7 rounded py-2 mt-4 text-black font-semibold">
                  edit
                </button>
                <button className="bg-blue-400 px-7 rounded py-2 mt-4 text-white font-semibold">
                  applicant
                </button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowAllJob;
