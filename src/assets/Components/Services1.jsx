import React from 'react';
import pic2 from '../pic-2.png';
import pic3 from '../pic-3.png';
import pic4 from '../pic-4.png';
import pic1 from '../pic-1.png';

function Services1() {
  return (
    <div className="w-full bg-gradient-to-b from-[#d6eaff] to-[#87bfff] py-20">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Patient-Centric Excellence at Our Dental Clinic
        </h2>
        <p className="text-lg mt-4 text-blue-800 max-w-3xl mx-auto">
          We provide a variety of dental services that prioritize comfort, advanced care, and long-term oral health for every patient.
        </p>
      </div>

      {/* White Background for Cards Section */}
      <div className="w-full bg-white py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Restorative Care */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img src={pic2} alt="Restorative Care" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Restorative Care</h3>
            <p className="text-sm text-gray-700 mt-2">
              Repair decayed or damaged teeth with fillings, crowns, and bridges — restoring both function and beauty to your smile.
            </p>
          </div>

          {/* Gum Health */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img src={pic3} alt="Gum Health" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Gum Health</h3>
            <p className="text-sm text-gray-700 mt-2">
              Prevent and treat gum diseases to protect against tooth loss and improve your overall health and immunity.
            </p>
          </div>

          {/* Orthodontics */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img src={pic4} alt="Orthodontics" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Orthodontics</h3>
            <p className="text-sm text-gray-700 mt-2">
              Correct misaligned teeth and bites using braces or clear aligners for a confident and healthy smile.
            </p>
          </div>

          {/* Pediatric Dentistry */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img src={pic1} alt="Pediatric Dentistry" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700">Pediatric Dentistry</h3>
            <p className="text-sm text-gray-700 mt-2">
              Gentle dental care for kids — from the first tooth to adolescence — ensuring lifelong oral hygiene habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;

