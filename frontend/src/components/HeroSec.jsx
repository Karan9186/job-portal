import React from "react";
import img1 from "/h8.jpg";
import img3 from "/h3.jpg";
import img2 from "/h1.jpg";
import img4 from "/h4.jpg";
import img5 from "/h5.jpg";
import img6 from "/h6.jpg";
import img7 from "/h7.jpg";

function HeroSec() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 mt-6">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <span className="inline-flex items-center rounded-md bg-pink-100 px-0 py-[2px] text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 mb-2">
                {/* stat */}
                <button
                  type="button"
                  className="relative inline-flex justify-center items-center text-sm font-semibold rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none w-[200px]"
                >
                  <span className="flex absolute top-0 left-0 size-3 -mt-1.5 -me-1.5">
                    <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-3 bg-red-500"></span>
                  </span>
                  No. 1 Websites For Job Hunt
                </button>

                {/* end */}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Search, Apply & Get Your{" "}
                <span className="text-red-500">Dream Jobs</span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Your dream job is just a search away. Start today!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={img1}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img2}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img4}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img3}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img5}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img6}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={img7}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="inline-block rounded-md border border-transparent bg-red-500 px-8 py-3 text-center font-medium text-white hover:bg-red-700 w-[200px]">
                  Get Your First Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSec;
