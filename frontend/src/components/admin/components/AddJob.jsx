import React, { useEffect, useState } from "react";
import axios from "axios";
import Alltoast from "../../toast/Alltoast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../../utils/constant";

function AddJob() {
  const navigate = useNavigate();
  const [companies, setCompany] = useState([]); // Fixed typo from "companise" to "companies"
  const token=localStorage.getItem("token")
  const [login, setLoading] = useState(false);
  const [companyError, setCompanyError] = useState(false); // State to manage error
  // State for each input field
  const [jobData, setJobData] = useState({
    title: "",
    requirements: "",
    location: "",
    experienceLevel: "",
    description: "",
    salary: "",
    jobType: "",
    position: "",
    company: "", // Default companyName is empty
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/v1/company/get`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            },
            credentials: "include", // for cookies
          }
        );
        const result = await response.json();
        console.log("the dsa=", result.companise); // Fixed the typo in the response key

        setCompany(result.companise); // Ensure companies is always an array
      } catch (error) {
        console.error("Error fetching company data:", error);
        setCompany([]); // In case of an error, set companies to an empty array
      }
    };
    fetchData(); // Fetch company data on component mount
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  // Handle company selection
  const handleCompanyChange = (e) => {
    setJobData({
      ...jobData,
      company: e.target.value,
    });
    setCompanyError(false); // Reset the error when the company is selected
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Check if company is selected, show error if not
    if (jobData.company === "") {
      setCompanyError(true);
      setLoading(false);
      return; // Prevent form submission if company is not selected
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/job/postjob`, // Replace with your API endpoint
        jobData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

          },
          withCredentials: true, // If needed for authentication
        }
      );
      const data = response.data;
      Alltoast(data.message, true);

      setLoading(false);
      // You can redirect or show a success message here
    } catch (error) {
      Alltoast(err.response.data.message || "Error while creating job", false);
    }
  };

  return (
    <>
      <section className="flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="absolute ml-2 mt-3 mb-10">
              <button
                className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 relative bottom-3 right-1 ring-1 ring-inset ring-pink-700/10"
                onClick={() => navigate("/recruiter/show/job")}
              >
                Go back
              </button>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add Job
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-5">
                  <div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Title"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="requirements"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Requirements
                      </label>
                      <input
                        type="text"
                        name="requirements"
                        id="requirements"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Skills required"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Location"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="experienceLevel"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Experience Level
                      </label>
                      <input
                        type="number"
                        name="experienceLevel"
                        id="experience"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Experience Level"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Description"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="salary"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Salary
                      </label>
                      <input
                        type="number"
                        name="salary"
                        id="salary"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Salary Range"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="jobType"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Job Type
                      </label>
                      <input
                        type="text"
                        name="jobType"
                        id="jobType"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Type (e.g., Full-time, Part-time)"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="position"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Number of Positions
                      </label>
                      <input
                        type="number"
                        name="position"
                        id="positions"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Number of positions"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <select
                    name="company"
                    id="company"
                    onChange={handleCompanyChange}
                    className="w-full outline-none border-2 rounded p-1 border-red-100"
                    value={jobData.company} // Bind value to companyName in state
                  >
                    <option value="">Select company</option>
                    {companies && companies.length > 0 ? (
                      companies.map((company) => (
                        <option key={company._id} value={company._id}>
                          {company.companyName}
                        </option>
                      ))
                    ) : (
                      <option value="">Loading companies...</option>
                    )}
                  </select>
                  {companyError && (
                    <div className="text-red-500 text-sm mt-2">
                      Please select a company
                    </div>
                  )}
                </div>

                <div className="mt-3">
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
                      Add Job
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddJob;
