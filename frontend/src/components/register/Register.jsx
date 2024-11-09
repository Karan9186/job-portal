import React, { useContext, useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Alltoast from "../toast/Alltoast.jsx";
function Register() {
  const [select, setSelect] = useState("Recuiter");
  // const userInfo = useContext(store);
  // const token = Cookies.get("token");
  const navigate = useNavigate();
  const [userObj, setObj] = useState();
  useEffect(() => {
    let userData = localStorage.getItem("userdata");
    setObj(JSON.parse(userData));
    if (userObj?.success == true) {
      navigate("/");
    }
  }, userObj);
  const nextBtn = () => {
    if (select == "") {
      // alert("no any selection");
      Alltoast("no any selection", false);
    } else if (select == "Recuiter") {
      Alltoast("You Select Recuiter", true);
      setTimeout(() => {
        navigate("/recruiter");
      }, 800);
    } else {
      Alltoast("You Select jobseeker", true);
      setTimeout(() => {
        navigate("/jobseeker");
      }, 800);
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Toaster richColors />
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
