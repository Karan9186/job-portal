import { useEffect, useState } from "react";
import JobsLeftRight from "../JobsLeftRight";
import Alltoast from "../toast/Alltoast";
import Loading from "../Loading";
import { useLocation, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../utils/constant";

function Jobs() {
  const [jobData, setJobData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: "",
    experience: "",
    salary: "",
    roleCategory: "",
  });
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `${BACKEND_URL}/api/v1/job/getalljobs`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const result = await response.json();
      console.log("the re=", result);
      if (!result.success) {
        Alltoast(result.message, result.success);
      } else {
        setJobData(result.jobs);
        console.log(result.jobs);
        setLoading(false);
      }
    };
    fetchData();
  }, [location]);
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      [category]: value,
    }));
  };

  const jobPanels = jobData.map((v, i) => {
    return <JobsLeftRight key={i} v={v} />;
  });

  const handleSumit = async () => {
    const fetchData = async () => {
      let queryParams = {};
      setLoading(true);
      // Add selected filters to the query parameters
      Object.entries(selectedFilters).forEach(([key, value]) => {
        if (value) {
          queryParams = {
            key: key,
            value: value,
          };
        }
      });
      console.log("query=", JSON.stringify(queryParams));
      const stringQuery = JSON.stringify(queryParams);
      const response = await fetch(
        `${BACKEND_URL}/api/v1/job/getalljobs?keyword=${stringQuery}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const result = await response.json();
      console.log("the re=", result);
      if (!result.success) {
        Alltoast(result.message, result.success);
      } else {
        setJobData(result.jobs);
        console.log(result.jobs);
      }
      setLoading(false);
    };

    fetchData();
  };
  // Define filter sections with their respective content
  const filterSections = [
    {
      label: "Work Mode",
      key: "jobType",
      options: ["Work from Office", "hybrid", "Remote"],
    },
    {
      label: "Experience",
      key: "experienceLevel",
      options: ["3", "6", "9", "15", "20", "25", "30", "35"],
    },
    {
      label: "Salary",
      key: "salary",
      options: ["4", "7", "12", "15", "19", "25", "33"],
    },
  ];

  return (
    <>
      <div className="flex justify-center items-start mb-6">
        <div className="flex gap-10 mt-32 ml-0 flex-wrap justify-center">
          {/* ----------Left Side: All Categories Filter----------- */}
          <div className="h-[100%] w-[300px] bg-[#ffffff] flex flex-col rounded-xl border-1 border-red-200 shadow-2xl shadow-blue-200 sticky top-[100px] max-h-screen overflow-auto scrollbar-hidden">
            <div className="p-5">
              {/* Header */}
              <div className="border-b-2 flex items-center justify-between border-gray-400 pb-3">
                <p className="text-[20px] font-semibold">All Filters</p>
                <button
                  className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded"
                  onClick={handleSumit}
                >
                  Show Result
                </button>
              </div>

              {/* Filter Sections */}
              <div className="mt-4">
                {filterSections.map((item) => (
                  <div key={item.key} className="mb-4">
                    {/* Section Header */}
                    <div className="flex justify-between items-center">
                      <p className="text-[18px] font-medium">{item.label}</p>
                    </div>

                    {/* Section Content */}
                    <div className="mt-2 pl-2">
                      <ul className="text-[18px] flex flex-col gap-1">
                        {item.options.map((option, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-[17px] text-gray-700"
                          >
                            <input
                              type="radio"
                              name={item.key}
                              id={option}
                              checked={selectedFilters[item.key] === option}
                              onChange={() =>
                                handleFilterChange(item.key, option)
                              }
                            />
                            <label htmlFor={option}>{option}</label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ----------Right Side: Job Listings----------- */}
          <div className="h-auto w-auto flex flex-col">
            <div className="flex flex-row justify-center mb-[10px] gap-12">
              <p className="font-semibold text-gray-500 text-[13px]">
                {jobData.length} Jobs
              </p>
              <p className="font-semibold text-gray-500 text-[13px]">
                Sort by: Recommended
              </p>
            </div>

            <div>
              {/* Display selected filters */}
              <div className="mb-4">
                <ul className="text-lg">
                  {Object.entries(selectedFilters).map(
                    ([key, value]) =>
                      value && (
                        <li key={key} className="text-gray-700">
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {value}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            {loading ? <Loading /> : jobPanels}
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
