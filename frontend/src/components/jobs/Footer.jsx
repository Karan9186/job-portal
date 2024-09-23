import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          const slider = document.querySelector('.slider-imgs');
          if (slider) {
            slider.appendChild(slider.firstElementChild); // Moves the first image to the end
          }
        }, 3000); // Adjust time for 3 or 4 seconds
    
        return () => clearInterval(interval);
      }, []);

  return (
      <footer className="bg-[#c8c8c8] h-auto ">
          {/* first div */}
          <div className="flex space-x-20">
              <div className='px-20 py-5'>
                  <h1 className="text-black text-[30px] font-bold ">
                    <span className="text-red-800 font-bold">Hire</span>Link
                  </h1>
                  <div className='mt-3'>
                      <span className='font-semibold text-black'>Contct Us</span>

                      <div className="flex space-x-4 justify-center items-center mt-3">
      {/* Instagram */}
      <div className="bg-blue-500 rounded-full p-2 text-white hover:bg-blue-600 transition duration-300">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </div>
      {/* Facebook */}
      <div className="bg-blue-700 rounded-full p-2 text-white hover:bg-blue-800 transition duration-300">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </div>
      {/* Twitter */}
      <div className="bg-blue-400 rounded-full p-2 text-white hover:bg-blue-500 transition duration-300">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
         </div>
           
    </div>
                      
                  </div>
              </div>
              
              {/* second div */}
              <div className=''>
                  <div className='px-10 py-6'>
                  <ul className='flex flex-row gap-10 '>
                      <li className='flex flex-col space-y-2'>
                          <a href="#" className="hover:text-blue-900">About Us</a>
                          <a href="#" className="hover:text-blue-900">Careers</a>
                          <a href="#" className="hover:text-blue-900">Employer home</a>
                          <a href="#" className="hover:text-blue-900">Sitemap</a>
                          <a href="#" className="hover:text-blue-900">Credits</a>
                      </li>
                      <li className='flex flex-col space-y-2'>
                          <a href="#" className="hover:text-blue-900">Help center</a>
                          <a href="#" className="hover:text-blue-900">Summons/Notices</a>
                          <a href="#" className="hover:text-blue-900">Report issue</a>
                          <a href="#" className="hover:text-blue-900">Grievances</a>
                            
                      </li >
                      <li className='flex flex-col space-y-2'>
                          <a href="#" className="hover:text-blue-900">Privacy Policy</a>
                          <a href="#" className="hover:text-blue-900">Terms & conditions</a>
                          <a href="#" className="hover:text-blue-900">Fraud alert</a>
                          <a href="#" className="hover:text-blue-900">Trust & safety</a>
                          

                      </li>
                     
                      </ul>
                      </div>
              </div>
          </div>
         
          {/* Gray Line */}
          <div className="w-[98%] h-[2px] bg-gray-800 flex mx-auto mt-12" ></div>
         
          {/* third section */}
          <div className='flex justify-between mt-5 px-10'>
              <div className=''>
                  <p className='font-serif text-lg text-gray-600 '>© 2020 Your Company, Inc. All rights reserved.</p>
              </div>
              <div className="slider-imgs overflow-hidden flex whitespace-nowrap w-96">
          <div className="flex space-x-4 animate-scroll">
            <img src="/tcs.webp" alt="Image 1" className="h-20 w-20 object-cover inline-block"/>
            <img src="/texh.jpg" alt="Image 2" className="h-20 w-20 object-cover inline-block"/>
            <img src="/infosys.png" alt="Image 3" className="h-20 w-20 object-cover inline-block"/>
            <img src="/wipro.webp" alt="Image 4" className="h-20 w-20 object-cover inline-block"/>
            <img src="/wipro.webp" alt="Image 5" className="h-20 w-20 object-cover inline-block"/>
            <img src="/wipro.webp" alt="Image 6" className="h-20 w-20 object-cover inline-block"/>
          </div>
        </div>
          </div>
    </footer>
  );
};

export default Footer;
