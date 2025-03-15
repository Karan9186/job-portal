import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import AllToast from "../../toast/Alltoast.jsx";
import { BACKEND_URL } from "../../../utils/constant.js";
function UpdateCompnay() {
  const [login, setLoading] = useState(false);
  const [compnayData, setCompnayData] = useState({
    companyName: "",
    description: "",
    location: "",
    file: "", // Assuming file will be a string URL
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null); // This will store the selected file (for update)
  const [fileupd, setupdFile] = useState();
  const Logo = useRef(""); // Ref for file input

  // Handle form submission for updating company
  const handleupdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newData = {
      companyName: compnayData.companyName,
      description: compnayData.description,
      location: compnayData.location,
      file: fileupd,
    };

    try {
      const formData = new FormData();
      // Append regular form data
      formData.append("companyName", newData.companyName);
      formData.append("description", newData.description);
      formData.append("location", newData.location);
      if (file) {
        formData.append("file", fileupd); // 'logo' is the field name that the backend expects
      }

      console.log(file);
      const response = await fetch(
        `${BACKEND_URL}/api/v1/company/update/${id}`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result.message);

      if (!result.success) {
        AllToast(result.message, result.success);
      } else {
        AllToast(result.message, result.success);
        navigate("/recruiter/home");
      }
      setLoading(false);
    } catch (err) {
      console.log("Error updating company:", err);
      AllToast(result.message, result.success);
    }
  };

  // Fetch company data from API when the component mounts
  useEffect(() => {
    const fetchCompnayData = async () => {
      const response = await fetch(
        `${BACKEND_URL}/api/v1/company/get/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,

          },
          credentials: "include",
        }
      );
      const result = await response.json();
      setCompnayData(result.compnay);
      setImagePreview(`${BACKEND_URL}/uploads/${result.compnay.file}`); // Set the file URL for preview
    };
    fetchCompnayData();
  }, [id]); // Ensure to fetch on component mount and when `id` changes

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile.name);
      setupdFile(selectedFile);
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
            <button
              class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 relative bottom-3 right-1 ring-1 ring-inset ring-pink-700/10 "
              onClick={() => navigate("/recruiter/home")}
            >
              Go Back
            </button>
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

                <div>
                  {login == true ? (
                    <button
                      disabled
                      type="button"
                      className="py-2.5 px-5 me-2 text-sm w-full font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-gray-200 animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Update Compnay
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateCompnay;
