import React from 'react';
import about from '../About.png';

function AboutClinic() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-8 ">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={about}
          alt="About our dental clinic"
          className="w-full max-w-md rounded-2xl "
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-blue-900 text-xl md:text-2xl font-semibold uppercase tracking-wide">
          About Our Dental Clinic
        </p>
        <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Your Comfort, Our Priority
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We are excited to introduce you to <strong>Agarwal Super Speciality Dental Clinic</strong>, a one-stop solution for complete dental care. What makes our clinic truly distinctive is our high level of service, clinical skills, and unique environment. Our modern clinic has been designed to provide maximum comfort for both patients and staff.
        </p>
      </div>
    </div>
  );
}

export default AboutClinic;
