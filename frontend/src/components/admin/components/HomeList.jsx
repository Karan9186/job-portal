import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../../../../public/h1.jpg";
import axios from "axios";
function HomeList() {
  const navigate = useNavigate();
  let [data, setData] = useState([]);
  const getcompanydata = async () => {
    try {
      const companydata = await axios.get(
        "http://localhost:3000/api/v1/company/get",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (companydata) {
        console.log("the data=", companydata.data.companise);
        setData(companydata.data.companise);
      } else {
        console.log("data not get from backend");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcompanydata();
  }, []);
  const allCompanyDetails = data.map((v, i) => {
    return (
      <>
        <tr className="bg-white border-b" key={i}>
          <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
            <img
              src={v.file}
              alt="company"
              className="h-[50px] w-[50px] rounded-md"
            />
          </th>
          <td className="px-6 py-4">{v.companyName}</td>
          <td className="px-6 py-4">{v.description}</td>
          <td className="px-6 py-4">{v.location}</td>
          <td className="flex items-center justify-around mt-5">
            <button
              className="bg-blue-700 px-5 py-2 rounded text-white font-semibold"
              onClick={() => navigate(`/recruiter/company/update/${v._id}`)}
            >
              Update
            </button>

            <button className="bg-red-500 px-5 py-2 rounded text-white font-semibold">
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });
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
          <tbody>{data.length == 0 ? "not compnay" : allCompanyDetails}</tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeList;
