import React from "react";
import Contactform from "./Contactform";
import teeth5 from "../about.png";

function Contact() {
  return (
    <div>
      {/* Section Heading */}
      

      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-blue-300 via-blue-300 to-blue-900 text-blue-900 w-full min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-0 gap-10 ">
        
        {/* Left Content */}
       
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Your Smile, Our Priority
          </h1>
          <p className="text-base md:text-lg mb-6">
            Looking for expert dental care? Get in touch with us for
            consultations, checkups, or any dental concerns. We're just a call
            away!
          </p>
          
          <a
            href="tel:+911234567890"
            className="inline-block bg-white text-blue-900 font-semibold px-4 py-2 text-sm md:text-base rounded-md shadow hover:bg-blue-100 transition duration-300 w-fit"
          >
            📞 Call Now
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={teeth5}
            alt="Dental Background"
            className="w-full h-auto max-h-[400px] object-contain "
          />
        </div>
      </div>

      {/* Contact Form Below */}
      <Contactform />
    </div>
  );
}

export default Contact;


