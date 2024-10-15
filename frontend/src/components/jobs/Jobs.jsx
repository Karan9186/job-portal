

import { useState } from "react";
import JobsLeftRight from "../JobsLeftRight";
import { CiSaveDown2 } from "react-icons/ci"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBriefcase,
  faIndianRupeeSign,
  faLocationDot,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function Jobs() {

  const [toggleSections, setToggleSections] = useState({
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
    setToggleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };


  const jobsPanel = (
    <>
      <div className="h-auto w-[auto] bg-white shadow-lg rounded-2xl border-1 border-gray-200 p-4 mb-6 shadow-blue-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Openings For Freshers(Java with Spring Boot and Microservices, AWS)
        </h2>
        <h3 className="text-md font-semibold text-gray-500">
          First Quad Tech Solutions
        </h3>

        <div className="mt-3 flex gap-2">
          <p className="text-md text-gray-700">
            <FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1" />
            0-4 Yrs |{" "}
          </p>
          <p className="text-md text-gray-700">
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              className="h-[13px] text-gray-600"
            />{" "}
            0-4 Yrs |{" "}
          </p>
          <p className="text-md text-gray-700">
            <FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1" />
            Pune (Baner)
          </p>
        </div>

        <div className="mt-2">
          <h4 className="text-sm font-semibold text-gray-600">
            Role & Responsibilities AWS DevOps Engineer (Freshers with 0-3 years
            experience). Java w...
          </h4>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-[12px] text-gray-500">5 Days Ago</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button className="bg-red-500 text-white font-semibold hover:bg-red-600 mt-3 py-2 px-4 rounded">
              Apply Now
            </button>
            <button className="bg-slate-200 text-black font-semibold hover:bg-slate-300 mt-3 py-2 px-4 rounded">
              See Details
            </button>
          </div>
          <button className="text-indigo-500 text-sm font-medium">
            <CiSaveDown2 size={30} />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-10 mt-32 ml-0">
            {/* ----------left side box all category----------- */}
            <div className="h-auto w-[300px] bg-[#ffffff] flex flex-col rounded-xl border-2 border-gray-200">
              <div className="gap-x-[20px] p-5">
                <div className="border-b-2 border-gray-400 flex flex-row">
                  <div>
                    <p className="mt-3 text-[20px] font-semibold mb-6">
                      All Filter
                    </p>
                  </div>

                  <div className="relative left-28 p-2">
                    <button
                      className="px-4 py-1 font-semibold bg-red-100 border border-red-500 rounded hover:bg-red-200 "
                     
                    >
                      Login
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    Work mode
                  </p>
                  {toggleSections.workMode ? (
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
                {toggleSections.workMode && (
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

                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg "></div>

                {/* Experience Toggle */}
                <div className=" flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    Experience
                  </p>
                  {toggleSections.experience ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("experience")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("experience")}
                    />
                  )}
                </div>
                {toggleSections.experience && (
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
                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg "></div>

                {/* Department Toggle */}
                <div className=" flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    Department
                  </p>
                  {toggleSections.department ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("department")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="mt-5 cursor-pointer"
                      onClick={() => handleToggle("department")}
                    />
                  )}
                </div>
                {toggleSections.department && (
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
                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg "></div>

                {/* Add similar structure for the remaining sections */}
                <div className=" flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">Salary</p>
                  <FontAwesomeIcon
                    icon={toggleSections.salary ? faChevronUp : faChevronDown}
                    className="mt-5 cursor-pointer"
                    onClick={() => handleToggle("salary")}
                  />
                </div>
                {toggleSections.salary && (
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

                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg "></div>
                {/* Repeat for other sections */}
                <div className=" flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">
                    Company type
                  </p>
                  <FontAwesomeIcon
                    icon={
                      toggleSections.companyType ? faChevronUp : faChevronDown
                    }
                    className="mt-5 cursor-pointer"
                    onClick={() => handleToggle("companyType")}
                  />
                </div>
                {toggleSections.companyType && (
                  <div>
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
                  </div>
                )}
                <div className="w-full h-[1.5px] bg-slate-500 rounded-lg "></div>
                {/* Add for other sections like Role Category, Stipend, etc. */}
              </div>
            </div>

            {/* ----------right side box----------- */}
            <div className="h-auto w-auto flex flex-col">
              <div className="flex flex-row justify-center mb-[10px] gap-12">
                <p className="font-semibold text-gray-500 text-[13px]">
                  1 - 20 of 13193 Spring Boot Jobs
                </p>
                <a href="" className="font-semibold text-blue-500 text-[13px]">
                  Send me jobs like these
                </a>
                <p className="font-semibold text-gray-500 text-[13px]">
                  Sort by: Recommended
                </p>
              </div>

              {/* Jobs Listings */}
              {jobsPanel}

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
