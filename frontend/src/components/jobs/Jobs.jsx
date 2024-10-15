import { useState } from "react";
import JobsLeftRight from "../JobsLeftRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBriefcase,
  faIndianRupeeSign,
  faLocationDot,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-10 mt-32 ml-0">
            {/* ----------left side box all category----------- */}
            <div className="h-auto w-[300px] bg-[#ffffff] flex flex-col rounded-xl  border-2 border-gray-200 ">
              <div className=" gap-x-[20px] p-5 ">
                <div className="border-b-2 border-gray-400 ">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    All Filter
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    Work mode
                  </p>
                  {toggleState.workMode ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("workMode")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("workMode")}
                    />
                  )}
                </div>

                {toggleState.workMode && (
                  <div className="mt-[-20px]">
                    <ul className="text-[18px] flex flex-col gap-1">
                      <li className="flex gap-3 text-[17px] text-gray-700">
                        <input type="checkbox" />
                        Work from office (12307)
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
                  </div>
                )}

                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg mt-5"></div>

                {/* Repeat similar structure for other sections */}
                {[
                  { label: "Experience", key: "experience" },
                  { label: "Department", key: "department" },
                  { label: "Salary", key: "salary" },
                  { label: "Company type", key: "companyType" },
                  { label: "Role category", key: "roleCategory" },
                  { label: "Stipend", key: "stipend" },
                  { label: "Duration", key: "duration" },
                  { label: "Education", key: "education" },
                  { label: "Posted by", key: "postedBy" },
                  { label: "Industry", key: "industry" },
                  { label: "Top companies", key: "topCompanies" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="border-b-2 border-gray-400 flex justify-between"
                  >
                    <p className="mt-3 text-[20px] font-semibold mb-6">
                      {item.label}
                    </p>
                    {toggleState[item.key] ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="mt-5 cursor-pointer"
                        onClick={() => handleToggle(item.key)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="mt-5 cursor-pointer"
                        onClick={() => handleToggle(item.key)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ----------right side box----------- */}
            <div className="h-auto w-auto flex flex-col">
              {/* Your job listings here */}
            </div>
          </div>
        </div>
      </div>

      <JobsLeftRight />
    </>
  );
}

export default Jobs;
