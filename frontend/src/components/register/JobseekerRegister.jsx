import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alltoast from "../toast/Alltoast";

export default function JobseekerRegister() {
  const navigate = useNavigate();
  const [login, setLoading] = useState(false);
  const role = "jobseeker";
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: role,
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handlelogindata = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", role);

    // Only append file if one is selected
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            withCredentials: true,
          },
        }
      );

      const data = response.data;
      if (data.success) {
        // Handle successful registration
        setLoading(false);
        Alltoast(data.message, true);
        navigate("/jobseeker");
      } else {
        Alltoast(data.message, false);
      }
    } catch (err) {
      if (err.response) {
        Alltoast(
          err.response.data.message || "Error while creating account",
          false
        );
        setLoading(false);
      } else {
        Alltoast("Network error while creating account", false);
        setLoading(false);
      }
    }
    //  finally {
    //   dispatch(setLoading(false));
    // }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-md mt-24">
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <button
              className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 relative bottom-7 right-4 ring-1 ring-inset ring-pink-700/10"
              onClick={() => navigate("/register")}
            >
              Go back
            </button>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up As A Jobseeker
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handlelogindata}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <input
                  id="name"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  name="fullname"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <input
                  id="number"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="8080808080"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  id="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  type="password"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Profile Photo
                </label>
                <input
                  id="photo"
                  name="file"
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                {login == true ? (
                  <button
                    disabled
                    type="button"
                    className="py-2.5 px-5 me-2 text-sm w-full font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-gray-200 animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
