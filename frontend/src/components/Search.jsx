import React from "react";

function Search() {
  return (
    <>
      <div className="flex items-center justify-center mt-24">
        <h1 className="font-bold text-[35px] text-center text-slate-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br /> Quasi, magni?
        </h1>
      </div>
      <form className="max-w-md mx-auto mt-10">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="location-search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-red-50 border-s-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 rounded-lg outline-none"
              placeholder="Search for city or address"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-red-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <div className="mt-8 flex items-center justify-center">
        <div className="px-22 w-[800px]">
          <h1 className="text-center font-semibold text-slate-500">
            Lorem ipsum dolor sit amet cdfdsf onsectezcsdfsdtur adipisicing elit. Quia optio
            iusto fuga sunt molestiae exercitationem ut similique 
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="flex gap-4 items-center justify-center flex-wrap px-20">
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
          <div className="border border-slate-400 bg-slate-100 rounded-3xl py-[2px] px-2">
            <h1>frontend developer</h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Search;
