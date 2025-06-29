import React, { useState } from "react";
import img1 from '../dr.abhinay.jpeg';
import img2 from '../dr.megha.jpeg';

function AboutDoctor() {
  const [showFullAbhinay, setShowFullAbhinay] = useState(false);
  const [showFullMegha, setShowFullMegha] = useState(false);

  // ✅ Toggle function for Dr. Abhinay
  const toggleAbhinay = () => {
    setShowFullAbhinay(!showFullAbhinay);
  };

  // ✅ Toggle function for Dr. Megha
  const toggleMegha = () => {
    setShowFullMegha(!showFullMegha);
  };

  return (
    <div className="py-12 px-6 bg-blue-100">
      <h2 className="text-center text-4xl font-bold text-blue-800 mb-10">Meet Our Doctors</h2>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">

        {/* ✅ Dr. Abhinay Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-between">
          <div>
            <img
              src={img1}
              alt="Dr. Abhinay Agarwal"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
            />
            <h3 className="text-xl font-semibold text-gray-900 text-center">Dr. Abhinay Agarwal</h3>
            <p className="text-sm text-gray-600 text-center">BDS, MDS (Conservative Dentistry & Endodontics)</p>

            {showFullAbhinay && (
              <div className="text-gray-700 text-sm mt-4 space-y-2 text-left">
                <p>Dr. Abhinay Agarwal is a highly respected and experienced dental professional, known for his commitment to excellence in patient care and academic leadership...</p>
                {/* More details here */}
              </div>
            )}
            <div className="w-full flex justify-center items-center">
             <button
            className="mt-4 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition mx-auto"
            onClick={toggleAbhinay}
          >
            {showFullAbhinay ? "Show Less" : "Read More"}
          </button>
          </div>
        </div>
          </div>

         

        {/* ✅ Dr. Megha Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-between">
          <div>
            <img
              src={img2}
              alt="Dr. Megha Agarwal"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
            />
            <h3 className="text-xl font-semibold text-gray-900 text-center">Dr. Megha Agarwal</h3>
            <p className="text-sm text-gray-600 text-center">BDS, Dental Surgeon</p>

            {showFullMegha && (
              <div className="text-gray-700 text-sm mt-4 space-y-2 text-left">
                <p>Dr. Megha Agarwal is a passionate dental surgeon committed to gentle and effective care...</p>
                {/* More details here */}
              </div>
              
            )}
            <div className="w-full flex justify-center items-center">
              <button
            className="mt-4 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition mx-auto"
            onClick={toggleMegha}
          >
            {showFullMegha ? "Show Less" : "Read More"}
          </button>
</div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default AboutDoctor;
