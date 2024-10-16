import { useState } from "react";
import JobsLeftRight from "../JobsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Jobs() {
  const [toggleState, setToggleState] = useState({
    workMode: false,
    experience: false,
    department: false,
    salary: false,
    companyType: false,
    roleCategory: false,
    stipend: false,
    duration: false,
    education: false,
    postedBy: false,
    industry: false,
    topCompanies: false,
  });

  const handleToggle = (section) => {
    setToggleState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Define filter sections with their respective content
  const filterSections = [
    {
      label: "Work Mode",
      key: "workMode",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Work from Office (12,307)
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Hybrid (831)
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Remote (377)
          </li>
        </ul>
      ),
    },
    {
      label: "Experience",
      key: "experience",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            0-1 years
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            1-3 years
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            3-5 years
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            5+ years
          </li>
        </ul>
      ),
    },
    {
      label: "Department",
      key: "department",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Engineering
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Marketing
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Sales
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Human Resources
          </li>
        </ul>
      ),
    },
    {
      label: "Salary",
      key: "salary",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹20,000 - ₹30,000
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹30,000 - ₹50,000
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹50,000 - ₹70,000
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹70,000+
          </li>
        </ul>
      ),
    },
    {
      label: "Company Type",
      key: "companyType",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Startup
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            SME
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            MNC
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Government
          </li>
        </ul>
      ),
    },
    {
      label: "Role Category",
      key: "roleCategory",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Full-Time
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Part-Time
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Contract
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Internship
          </li>
        </ul>
      ),
    },
    {
      label: "Stipend",
      key: "stipend",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹5,000 - ₹10,000
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹10,000 - ₹15,000
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            ₹15,000+
          </li>
        </ul>
      ),
    },
    {
      label: "Duration",
      key: "duration",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />3 months
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />6 months
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />1 year
          </li>
        </ul>
      ),
    },
    {
      label: "Education",
      key: "education",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            High School
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Bachelor's Degree
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Master's Degree
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Ph.D.
          </li>
        </ul>
      ),
    },
    {
      label: "Posted By",
      key: "postedBy",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Employers
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Recruiters
          </li>
        </ul>
      ),
    },
    {
      label: "Industry",
      key: "industry",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Information Technology
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Finance
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Healthcare
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Education
          </li>
        </ul>
      ),
    },
    {
      label: "Top Companies",
      key: "topCompanies",
      content: (
        <ul className="text-[18px] flex flex-col gap-1">
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Google
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Microsoft
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Amazon
          </li>
          <li className="flex gap-3 text-[17px] text-gray-700">
            <input type="checkbox" />
            Facebook
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-center items-start mb-6">
        <div className="flex gap-10 mt-32 ml-0">
          {/* ----------Left Side: All Categories Filter----------- */}
          <div className="h-[100%] w-[300px] bg-[#ffffff] flex flex-col rounded-xl  border-1 border-red-200 shadow-2xl shadow-blue-200 ">
            <div className="p-5">
              {/* Header */}
              <div className="border-b-2 flex items-center justify-between border-gray-400 pb-3">
                <p className="text-[20px] font-semibold">All Filters</p>
                <button className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded">
                  Show Result
                </button>
              </div>

              {/* Filter Sections */}
              <div className="mt-4">
                {filterSections.map((item) => (
                  <div key={item.key} className="mb-4">
                    {/* Section Header */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleToggle(item.key)}
                    >
                      <p className="text-[18px] font-medium">{item.label}</p>
                      <FontAwesomeIcon
                        icon={
                          toggleState[item.key] ? faChevronUp : faChevronDown
                        }
                        className="text-gray-600"
                      />
                    </div>

                    {/* Section Content */}
                    {toggleState[item.key] && (
                      <div className="mt-2 pl-2">{item.content}</div>
                    )}

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ----------Right Side: Job Listings----------- */}
          <div className="h-auto w-auto flex flex-col">
            <JobsLeftRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
