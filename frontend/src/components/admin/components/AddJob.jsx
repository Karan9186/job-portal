import React, { useEffect, useState } from "react";
import axios from "axios";

function AddJob() {
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
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };
  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/company/get", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  }, []);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/job/postjob", // Replace with your API endpoint
        jobData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // If needed for authentication
        }
      );
      console.log("Job added successfully:", response.data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <>
      <section className="flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
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
                        value={jobData.title}
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
                        value={jobData.requirements}
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
                        value={jobData.location}
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
                        type="text"
                        name="experience"
                        id="experience"
                        value={jobData.experience}
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
                        value={jobData.description}
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
                        type="text"
                        name="salary"
                        id="salary"
                        value={jobData.salary}
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
                        value={jobData.jobType}
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
                        type="text"
                        name="positions"
                        id="positions"
                        value={jobData.positions}
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
                    className="w-full outline-none border-2 p-1 rounded"
                  >
                    <option value="id1">google</option>
                    <option value="id1">google</option>
                    <option value="id1">google</option>
                    <option value="id1">google</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5"
                >
                  Add Job
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddJob;
