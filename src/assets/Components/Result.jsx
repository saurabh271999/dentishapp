import React from "react";
import pic5 from '../pic5.jpg';
import pic6 from '../pic6.png';

function Result() {
  return (
    <div className="px-6 py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-blue-900 text-lg font-semibold uppercase">Professional Results</p>
        <p className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">The Best Possible Results</p>
      </div>

      {/* Image Section - No space between */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <img
            src={pic5}
            alt="Result Before"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={pic6}
            alt="Result After"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Result;
