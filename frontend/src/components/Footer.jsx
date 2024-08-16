import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 shadow-lg shadow-red-200/50 border border-red-100 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1 className="text-black text-[30px] font-bold">
              <span className="text-red-800 font-bold">Hire</span>Link
            </h1>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <button
                  href="#"
                  className="hover:underline"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              <h1 className="text-black text-[15px] font-bold">
                <span className="text-red-800 font-bold">Hire</span>Link
              </h1>
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
