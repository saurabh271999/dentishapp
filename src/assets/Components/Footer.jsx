import React from "react";
import { Link } from "react-router-dom";
import {
  FaTooth,
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import map from '../map1.png';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left - Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3 relative">
            <FaTooth className="text-white text-5xl md:text-6xl" />
            <FaPlus className="text-white text-xs absolute top-1 left-1" />
            <div className="leading-tight">
              <div className="text-lg md:text-2xl italic font-bold">Agarwal Super</div>
              <div className="text-sm md:text-xl italic">Speciality</div>
              <div className="text-xs md:text-base">Dental Clinic</div>
            </div>
          </div>
          <p className="text-md text-blue-100 leading-relaxed">
            Your Smile, Our Priority – <br className="md:hidden"/> Providing Trusted Dental Care for Every Patient.
          </p>
          <p className="text-sm text-blue-200 italic">
               Excellence in Modern Dentistry Since 2008
          </p>
          <p className="text-sm text-blue-200">
              100% Sterilized Instruments • Trusted by 10,000+ Patients
          </p>
          <div className="text-xs text-blue-100">
                NABH Accredited | MDS Specialists | Pain-Free Treatments
          </div>
        </div>

        {/* Center - Clinic & Quick Links */}
        <div className="flex flex-col items-center md:items-center gap-6">
          {/* Top Flex Row for Clinic + Quick Links */}
          <div className="flex flex-col sm:flex-row gap-25">
            
            {/* Clinic Section */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-lg font-semibold text-blue-200 mb-1">Clinic</p>
              <p className="text-sm">Advanced Equipment</p>
              <p className="text-sm">Sterilization Protocols</p>
              <p className="text-sm">Patient Testimonials</p>
              <p className="text-sm">Meet Our Doctors</p>
              <p className="text-sm">Why Choose Us</p>
              <p className="text-sm">Our Facilities</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-lg font-semibold text-blue-200 mb-1">Quick Links</p>
              <Link to="/" className="hover:text-sky-300 transition text-sm">Home</Link>
              <Link to="/About" className="hover:text-sky-300 transition text-sm">About</Link>
              <Link to="/Services" className="hover:text-sky-300 transition text-sm">Services</Link>
              <Link to="/Treatment" className="hover:text-sky-300 transition text-sm">Treatment</Link>
              <Link to="/Contact" className="hover:text-sky-300 transition text-sm">Contact</Link>
            </div>

          </div>
        </div>

        {/* Right - Contact Info + Map */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-lg font-semibold text-blue-200">Contact Us</p>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              A-87/1, Dr. Abhinay Agarwal's Super Speciality Dental Clinic, <br />
              Chaddha Cinema Road, Prince Road, Gandhi Nagar-244001
            </p>
          </div>

          {/* Phone + Social */}
          <div className="flex items-center justify-start gap-6 w-full mt-2">
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt />
              <span>9557345251</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1C3ZAHYE2A/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinay-agarwal-7223866"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-4">
            <a
              href="https://www.google.com/maps/place/Agarwal+Superspeciality+Dental+Clinic/@28.8289498,78.7700004,17z/data=!3m1!4b1!4m6!3m5!1s0x390afb09aa1336b1:0xe967c96865a05141!8m2!3d28.8289451!4d78.7725753!16s%2Fg%2F11ny_3jtlh?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={map}
                alt="Google Map"
                className="h-34 w-53 object-cover rounded-md shadow"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white opacity-30 w-full mt-10 mb-4"></div>

      {/* Copyright */}
      <div className="text-center text-sm sm:text-base">
        © 2025 Dr. Abhinay Agarwal Super Speciality Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;




