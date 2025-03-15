import React, { useRef, useState } from "react";
import forgotPassImg from "../../../../public/forgotPassImg.png";
import Alltoast from "../../toast/Alltoast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../utils/constant";
function ForgetPassUser() {
  const email = useRef("");
  const pass = useRef("");
  const code = useRef("");
  const [Reset, setReset] = useState();
  const [pinEmail, setPinEmail] = useState();
  let [securityCode, setsecurityCode] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleFordata = async (e) => {
    e.preventDefault();
    try {
      const email2 = email.current.value;
      console.log(email);
      const user = {
        email: email2,
      };
      const response = await fetch(`${BACKEND_URL}/api/v1/user/forgotpass`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setReset(true);
        // localStorage.setItem("forgotemail",result.user.email)
        setPinEmail(result.user.email);
        setsecurityCode(result.securityCode);
      } else {
        setReset(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const finalPasswordChanged = async (e) => {
    e.preventDefault();
    const password = code.current.value;
    console.log(password, "=and=", securityCode);
    if (securityCode == password) {
      const newUser = {
        email: pinEmail,
        password: pass.current.value,
      };
      console.log(newUser);
      const response = await fetch(
        `${BACKEND_URL}/api/v1/user/forgotpassfinal`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newUser),
        }
      );
      const result = await response.json();
      console.log("the final re=", result.success);
      if (result?.success) {
        Alltoast(result.message, true);
        navigate("/jobseeker");
      } else {
        Alltoast(result.message, false);
      }
    } else {
      Alltoast("Invalid Security Code", false);
    }
    console.log("called");
  };
  return (
    <>
      <div className="w-[100%] flex flex-wrap">
        <section className=" w-[50%]">
          <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="font-semibold text-[40px]">
              <span className="text-red-700">Hire</span>Link
            </h1>
            <br />
            <div className="w-full p-6 bg-red-50 shadow-md shadow-blue-200 rounded-lg shadow ">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Change Password
              </h2>
              {Reset ? (
                <form
                  className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                  onSubmit={finalPasswordChanged}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      readOnly
                      value={pinEmail}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Security Code
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      ref={code}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="New password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      New password
                    </label>
                    <input
                      type="password"
                      name="New password"
                      id="New password"
                      ref={pass}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Reset Password
                  </button>
                </form>
              ) : (
                <form
                  className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                  onSubmit={handleFordata}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      ref={email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Confim OTP
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>{" "}
        <img
          src={forgotPassImg}
          className="w-[50%] "
          alt="img for forgot pass"
        />
      </div>
    </>
  );
}

export default ForgetPassUser;
