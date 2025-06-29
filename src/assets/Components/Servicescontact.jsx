import React from 'react';
import teeth12 from '../teeth12.avif';

function Servicescontact() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Need a Dental Consultation?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            We're here to help you achieve the healthy, confident smile you deserve. Whether it's a regular check-up or an urgent issue, our expert team is ready to assist.
          </p>
          
          {/* Contact Info */}
          <div className="bg-blue-50 p-6 rounded-md shadow-md inline-block">
            <p className="text-xl font-semibold text-blue-800 mb-2">Contact Us:</p>
            <p className="text-lg text-gray-800">
              📞 +91 11111 11111<br />
              📞 +91 12343 21234
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Available: Mon – Sat, 10:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={teeth12}
            alt="Consultation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Servicescontact;
