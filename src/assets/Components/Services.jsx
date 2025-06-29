import React from "react";
import teeth6 from "../about.png";
import Services1 from "./Services1";
import Services2 from "./Services2";
import Servicescontact from "./Servicescontact";

function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient and Image on Right */}
      <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 px-6 md:px-20 py-10 md:py-16 gap-10">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-blue-900 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Dental Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            At Agarwal's Super Speciality Dental Clinic, we are dedicated to
            providing a full range of dental treatments to help you maintain a
            healthy and confident smile.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>General Dentistry & Preventive Care</li>
            <li>Cosmetic Dentistry (Teeth Whitening, Veneers)</li>
            <li>Orthodontics (Braces & Invisalign)</li>
            <li>Root Canal Treatment (RCT)</li>
            <li>Dental Implants & Bridges</li>
            <li>Child Dental Care</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={teeth6}
            alt="Dental Services"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="px-4 sm:px-6 md:px-20 py-12 space-y-10">
        <Services1 />
        <Services2 />
        <Servicescontact />
      </div>
    </div>
  );
}

export default Services;


