import React, { useContext, useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";
import Cookies from "js-cookie";
function Register() {
  const [select, setSelect] = useState("Recuiter");
  // const userInfo = useContext(store);
  // const token = Cookies.get("token");
  const navigate = useNavigate();
  // useEffect(
  //   () => {
  //     if (userInfo[0].success == true && token) {
  //       navigate("/");
  //     }
  //   },
  //   token,
  //   userInfo[0]
  // );
  const nextBtn = () => {
    if (select == "") {
      alert("no any selection");
    } else if (select == "Recuiter") {
      navigate("/recruiter");
    } else {
      navigate("/jobseeker");
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="">
        <div className="flex justify-center px-4">
          <div className="bg-white shadow-xl shadow-blue-200 rounded-md gap-12 p-5 border border-red-100">
            <button
              className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 relative bottom-3 right-1 ring-1 ring-inset ring-pink-700/10"
              onClick={() => navigate("/")}
            >
              Go back
            </button>
            <div className="flex gap-12 flex-wrap justify-center ">
              <button
                className={`flex flex-col items-center border border-slate-200 p-2 ${
                  select == "Recuiter" ? "bg-red-400 text-white rounded-md" : ""
                }`}
                onClick={() => setSelect("Recuiter")}
              >
                <RiAdminFill size={"200px"} />
                <h1 className="font-semibold">Recuiter</h1>
              </button>
              <button
                className={`flex flex-col items-center border border-slate-200 p-2 ${
                  select == "Jobseeker"
                    ? "bg-red-400 text-white rounded-md"
                    : ""
                }`}
                onClick={() => setSelect("Jobseeker")}
              >
                <RiAdminFill size={"200px"} />
                <h1 className="font-semibold">Jobseeker</h1>
              </button>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 mt-4 px-6 rounded font-semibold text-white py-1"
                onClick={nextBtn}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Register;
