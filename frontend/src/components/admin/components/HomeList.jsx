import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../../../../public/h1.jpg";
import axios from "axios";
function HomeList() {
  const navigate = useNavigate();
  const getcompanydata = async () => {
    try {
      const companydata = await axios.get('http://localhost:3000/api/v1/get', {
        headers: {
          'Content-Type':'application/json',
        }
      });
      if (companydata) {
        console.log(companydata.data);
      }
      else {
        console.log('data not get from backend');
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getcompanydata();
  },[])
  
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="relative  p-4  ">
        <button
          className="bg-red-500 px-5 py-2 rounded-xl absolute right-5 mt-[-55px]  text-white font-semibold"
          onClick={() => navigate("/recruiter/add/company")}
        >
          Add Compnay
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
                description
              </th>
              <th scope="col" className="px-6 py-3">
                location
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <td className="flex items-center justify-around mt-5">
                <button
                  className="bg-blue-700 px-5 py-2 rounded text-white font-semibold"
                  onClick={() => navigate("/recruiter/company/update/:id")}
                >
                  Update
                </button>

                <button className="bg-red-500 px-5 py-2 rounded text-white font-semibold">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <td className="flex items-center justify-around mt-5">
                <button
                  className="bg-blue-700 px-5 py-2 rounded text-white font-semibold"
                  onClick={() => navigate("/recruiter/company/update/:id")}
                >
                  Update
                </button>

                <button className="bg-red-500 px-5 py-2 rounded text-white font-semibold">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                <img
                  src={h1}
                  alt="company"
                  className="h-[50px] w-[50px] rounded-md"
                />
              </th>
              <td className="px-6 py-4">google</td>
              <td className="px-6 py-4">hiring</td>
              <td className="px-6 py-4">gujarat</td>
              <td className="flex items-center justify-around mt-5">
                <button
                  className="bg-blue-700 px-5 py-2 rounded text-white font-semibold"
                  onClick={() => navigate("/recruiter/company/update/:id")}
                >
                  Update
                </button>

                <button className="bg-red-500 px-5 py-2 rounded text-white font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeList;
