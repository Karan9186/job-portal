import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function UpdateCompnay() {
  const [compnayData, setCompnayData] = useState({
    companyName: "",
    description: "",
    location: "",
    file: "", // Assuming file will be a string URL
  });
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null); // This will store the selected file (for update)

  const Logo = useRef(""); // Ref for file input

  // Handle form submission for updating company
  const handleupdate = async (e) => {
    e.preventDefault();

    const newData = {
      companyName: compnayData.companyName,
      description: compnayData.description,
      location: compnayData.location,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/company/update/${id}`,
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "multipart/form-data", // For file upload
          },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log("Error updating company:", err);
    }
  };

  // Fetch company data from API when the component mounts
  useEffect(() => {
    const fetchCompnayData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/company/get/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const result = await response.json();
      setCompnayData(result.compnay);
      setImagePreview(result.compnay.file); // Set the file URL for preview
    };
    fetchCompnayData();
  }, [id]); // Ensure to fetch on component mount and when `id` changes

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile.name);

      // Generate image preview using FileReader (for images)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompnayData({
      ...compnayData,
      [name]: value, // Dynamically update the specific field
    });
  };

  return (
    <>
      <br />
      <br />
      <section className="flex mt-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[64vw]">
          <div className="w-full bg-white rounded-lg shadow ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Update Company
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleupdate}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="name"
                    value={compnayData.companyName || ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Company Name"
                    required
                    onChange={handleInputChange} // Handle change for controlled input
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={compnayData.description || ""}
                    placeholder="Description of the company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    onChange={handleInputChange} // Handle change for controlled input
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={compnayData.location || ""}
                    placeholder="Location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    onChange={handleInputChange} // Handle change for controlled input
                  />
                </div>
                <div>
                  <label
                    htmlFor="logo"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Logo
                  </label>
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleFileChange} // Handle file change
                    ref={Logo}
                  />

                  {/* Display the file name if selected */}
                  {file && (
                    <div className="mt-2 text-sm text-gray-600">
                      <strong>File Name:</strong> {file}
                    </div>
                  )}

                  {/* Display image preview if available */}
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-[100px] h-[100px] rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <button className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Update Company
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
