import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";
import Cookies from "js-cookie";
function RecLogin() {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const role = "recruiter";
  const userInfo = useContext(store);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email: email.current.value,
        password: password.current.value,
        role: role,
      };
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      if (data.success == false) {
        alert("faied to login");
      } else {
        userInfo[0] = data;
        console.log("the userinfo is " + userInfo[0].message);

        const token = Cookies.get("token");
        console.log("the token is " + token);
        navigate("/recruiter/home");
      }
      // console.log(user);
      // if (user.email == "karan@gmail.com" && user.password == "123") {
      //   navigate("/recruiter/home");
      // } else {
      //   alert("not login");
      // }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <br />
        <br />

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-md mt-10">
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <button
                  className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 relative bottom-7 right-4 ring-1 ring-inset ring-pink-700/10"
                  onClick={() => navigate("/register")}
                >
                  Go back
                </button>
                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Login As A Recruiter
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        ref={email}
                        autoComplete="email"
                        className="block w-full px-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        ref={password}
                        autoComplete="current-password"
                        className="block w-full px-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  No have recruiter account?{" "}
                  <button
                    onClick={() => navigate("/recruiter/register")}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecLogin;
