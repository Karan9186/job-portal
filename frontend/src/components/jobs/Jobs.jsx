import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign,faBriefcase,faLocationDot ,faChevronDown} from '@fortawesome/free-solid-svg-icons';

// Example icon

function Jobs() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center ">
          <div className="flex gap-10 mt-32 ml-0">

            {/* ----------left side box all category----------- */}
            <div className="h-auto w-[300px] bg-[#ffffff] flex flex-col rounded-xl  border-2 border-gray-200 ">
              <div className=" gap-x-[20px] p-5 ">
              <div className="border-b-2 border-gray-400 ">
                 <p className="mt-3 text-[20px] font-semibold mb-6">All Filter</p>
              </div>
              <div className="border-b-2 border-gray-400 flex justify-between">
                  <p className="mt-3 text-[20px] font-semibold mb-6">Work mode</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5"/>
              </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                    <p className="mt-3 text-[20px] font-semibold mb-6">Experience</p>
                     <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
              </div>
              <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Department</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Salary</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Company type</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Role category</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Stipend</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Duration</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Education</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Posted by</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Industry</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>
                <div className="border-b-2 border-gray-400  flex justify-between">
                 <p className="mt-3 text-[20px] font-semibold mb-6">Top companies</p>
                  <FontAwesomeIcon icon={faChevronDown} className="mt-5" />
                </div>

                </div>
            </div>

            
            
             {/* ----------right side box----------- */}    
            <div className="h-auto w-auto flex flex-col">

              <div className="flex flex-row justify-center mb-[10px] gap-12">
                <p className="font-semibold text-gray-500 text-[13px]">1 - 20 of 13193 Spring Boot Jobs</p>
                <a href="" className="font-semibold text-blue-500 text-[13px]">Send me jobs like these</a>
                <p className="font-semibold text-gray-500 text-[13px]">Sort by: Recommended</p>
              </div>
              
            <div className="h-auto w-[auto] bg-white shadow-lg rounded-2xl border-2 border-gray-200 p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Openings For Freshers(Java with Spring Boot and Microservices, AWS)</h2>
                <h3 className="text-md font-semibold text-gray-500">First Quad Tech Solutions</h3>
  
    <div className="mt-3 flex gap-2">
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1"/>0-4 Yrs | </p>
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faIndianRupeeSign} className="h-[13px] text-gray-600"/> 0-4 Yrs | </p>
                   <p className="text-md text-gray-700"><FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1"/>Pune (Baner)</p>
    </div>

    <div className="mt-2">
        <h4 className="text-sm font-semibold text-gray-600">Role & Responsibilities AWS DevOps Engineer (Freshers with 0-3 years experience). Java w...</h4>
    </div>

    <div className="mt-3">
        <p className="text-sm text-gray-500 font-semibold">Skills: java, Microservices, AWS DevOps, OOPS, Data Structures, Fresher, Developer, Spring Boot</p>
    </div>

    <div className="mt-4 flex justify-between items-center">
        <p className="text-[12px] text-gray-500">5 Days Ago</p>
        <button className="text-indigo-500 text-sm font-medium">Save</button>
    </div>
              </div>

              <div className="h-auto w-[auto] bg-white shadow-lg rounded-2xl border-2 border-gray-200 p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Openings For Freshers(Java with Spring Boot and Microservices, AWS)</h2>
                <h3 className="text-md font-semibold text-gray-500">First Quad Tech Solutions</h3>
  
    <div className="mt-3 flex gap-2">
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1"/>0-4 Yrs | </p>
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faIndianRupeeSign} className="h-[13px] text-gray-600"/> 0-4 Yrs | </p>
                   <p className="text-md text-gray-700"><FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1"/>Pune (Baner)</p>
    </div>

    <div className="mt-2">
        <h4 className="text-sm font-semibold text-gray-600">Role & Responsibilities AWS DevOps Engineer (Freshers with 0-3 years experience). Java w...</h4>
    </div>

    <div className="mt-3">
        <p className="text-sm text-gray-500 font-semibold">Skills: java, Microservices, AWS DevOps, OOPS, Data Structures, Fresher, Developer, Spring Boot</p>
    </div>

    <div className="mt-4 flex justify-between items-center">
        <p className="text-[12px] text-gray-500">5 Days Ago</p>
        <button className="text-indigo-500 text-sm font-medium">Save</button>
    </div>
              </div>
              
               <div className="h-auto w-[auto] bg-white shadow-lg rounded-2xl border-2 border-gray-200 p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Openings For Freshers(Java with Spring Boot and Microservices, AWS)</h2>
                <h3 className="text-md font-semibold text-gray-500">First Quad Tech Solutions</h3>
  
    <div className="mt-3 flex gap-2">
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faBriefcase} className="h-[14px] mr-1"/>0-4 Yrs | </p>
                  <p className="text-md text-gray-700"><FontAwesomeIcon icon={faIndianRupeeSign} className="h-[13px] text-gray-600"/> 0-4 Yrs | </p>
                   <p className="text-md text-gray-700"><FontAwesomeIcon icon={faLocationDot} className="h-[14px] mr-1"/>Pune (Baner)</p>
    </div>

    <div className="mt-2">
        <h4 className="text-sm font-semibold text-gray-600">Role & Responsibilities AWS DevOps Engineer (Freshers with 0-3 years experience). Java w...</h4>
    </div>

    <div className="mt-3">
        <p className="text-sm text-gray-500 font-semibold">Skills: java, Microservices, AWS DevOps, OOPS, Data Structures, Fresher, Developer, Spring Boot</p>
    </div>

    <div className="mt-4 flex justify-between items-center">
        <p className="text-[12px] text-gray-500">5 Days Ago</p>
        <button className="text-indigo-500 text-sm font-medium">Save</button>
    </div>
             </div>

            
              
                   
              </div>
            


     </div>
  </div>      
</div>
    </>
  );
}

export default Jobs;
