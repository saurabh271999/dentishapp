import React from "react";
import pic1 from '../pic-1.png';
import pic2 from '../pic-2.png';
import pic3 from '../pic-3.png';
import pic4 from '../pic-4.png';


function OurServices() {
  const services = [
    {
      img: pic1,
      title: "Restorative Care",
      desc: "When tooth decay or damage occurs, our restorative dentistry services can help restore your smile’s function and aesthetics."
    },
    {
      img: pic2,
      title: "Dental Implant",
      desc: "Dental implants are artificial tooth roots that are surgically placed into the jawbone. They function as anchors for artificial teeth."
    },
    {
      img: pic3,
      title: "Orthodontics",
      desc: "Orthodontics can correct misaligned teeth and jaws, improving your smile’s appearance and oral health."
    },
    {
      img: pic4,
      title: "Gum Health",
      desc: "Healthy gums can save you from serious oral health problems as well as reduce the risk of diabetes, stroke, and heart disease."
    }
  ];

  return (
    <div className="px-6 py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-blue-900 text-lg font-semibold uppercase">Our Services</p>
        <p className="text-4xl md:text-5xl font-bold mt-2">Our Procedures</p>
        <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
          At Agarwal Super Speciality Dental Clinic, we offer a wide range of dental services designed to make your experience as comfortable as possible.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center flex flex-col items-center">
            <img src={service.img} alt={service.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
