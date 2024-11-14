import React from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function UpdateCompnay() {
  const { id } = useParams();
 
  const name = useRef("");
  const Description = useRef("");
  const Location = useRef("");
   const Logo = useRef("");

  const handleupdate = async (e) => {
    e.preventDefault();
    const fetchdata = {
      companyName: name.current.value,
      description: Description.current.value,
      location: Location.current.value,
      logo: Logo.current.files[0],  
    };
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/company/update/${id}`
        , fetchdata,
        {
          headers: {
            'Content-Type':'Application/json'
          }
        }
      );
      if (response) {
        console.log(response.data);
        console.log(response);
      } else {
        console.log("response not get");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <br />
      <br />
      <section className="flex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Update Company
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleupdate}>
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                    ref={name}
                  />
                </div>
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
                    placeholder="description of the compnay"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                    ref={Description}
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
                    ref={Location}
                  />
                </div>
                <div>
                  <label
                    for="logo"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Logo
                  </label>
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    ref={Logo}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Update Compnay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateCompnay;
