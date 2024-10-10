import React from "react";

function UpdateJob() {
  return (
    <>
      <div className="min-h-screen">
        <section className="flex">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Update Job Details
                </h1>
                <form className="" action="#">
                  <div className="flex items-center gap-5">
                    <div>
                      <div>
                        <label
                          for="title"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          placeholder="title"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="requirements"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Requirements
                        </label>
                        <input
                          type="text"
                          name="requirements"
                          id="requirements"
                          placeholder="skils of the job role"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="location"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Location
                        </label>
                        <input
                          type="location"
                          name="location"
                          id="location"
                          placeholder="location"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="ex"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Experience Level
                        </label>
                        <input
                          type="text"
                          name="ex"
                          id="ex"
                          placeholder="location"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label
                          for="description"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          placeholder="description"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>

                      <div>
                        <label
                          for="salary"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Salary
                        </label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="salary"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="type"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Job type
                        </label>
                        <input
                          type="text"
                          name="type"
                          id="type"
                          placeholder="job type"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="position"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          No of position
                        </label>
                        <input
                          type="text"
                          name="position"
                          id="position"
                          placeholder="no of position"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full  text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 "
                  >
                    Update Job
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UpdateJob;
