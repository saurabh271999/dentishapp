import React from "react";
import abhinay from '../dr.abhinay.jpeg';

function Doctorsec() {
  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-800">Our Dental Specialist</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Meet Dr. Abhinay Agarwal – blending decades of experience with a commitment to patient-first care and advanced dental solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={abhinay}
            alt="Dr. Abhinay Agarwal"
            className="w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-md shadow-md border-2 border-amber-50 "
          />
        </div>

        {/* Doctor Info */}
        <div className="text-gray-800 space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-blue-800">Dr. Abhinay Agarwal</h3>
          <p className="text-lg font-medium text-gray-700">
            BDS, MDS (Conservative Dentistry & Endodontics)
          </p>

          <p className="text-sm text-gray-600">
            Dr. Abhinay Agarwal is a highly respected and experienced dental professional, known for his dedication to delivering the highest standard of patient care. With over 17 years of clinical and academic experience, he combines precision, compassion, and integrity in every treatment.
          </p>

          <div>
            <h4 className="text-md font-semibold text-blue-700">Qualification & Experience</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>17+ years of clinical & academic experience</li>
              <li>Subharti Dental College, Meerut (2008)</li>
              <li>Former Reader at TMU</li>
              <li>Member: IACDE</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            Known for his expertise in root canal treatments, cosmetic restorations, and complex endodontic procedures, Dr. Agarwal ensures each patient receives a personalized, compassionate approach for long-term oral health.
          </p>

          <div className="bg-blue-100 px-4 py-2 inline-block rounded-md shadow text-blue-900 font-semibold mt-4">
            Consulting Fee: ₹300
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorsec;


