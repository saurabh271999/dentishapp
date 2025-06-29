import React from 'react';
import teeth from '../teeth.jpeg';
import root from '../Root-Canals_.jpeg';
import white from '../Teeth-Whitening.jpeg';
import xray from '../intraoral-x-rays-periapical.jpg';
import Pediatric from '../Pediatric-Dentistry.jpeg';
import Gum from '../Gum-Disease-1024x682.jpeg';
import implant from '../dental-implant.jpeg';
import braces from '../Braces-and-Clear-Aligners.jpeg';
import download from '../download.jpeg';

function Services2() {
  const services = [
    {
      img: teeth,
      title: "Cosmetic Dentistry",
      desc: "We provide cost-effective solutions for any tooth discoloration or misalignment. Our procedures include veneers, bonding, and contouring, designed to enhance your smile and boost confidence."
    },
    {
      img: root,
      title: "Root Canal Treatment",
      desc: "Painless and quick root canal therapy to save infected teeth and relieve pain. We use the latest equipment for cleaning, shaping, and filling to ensure long-term protection."
    },
    {
      img: white,
      title: "Teeth Whitening",
      desc: "Brighten your smile with in-office or at-home teeth whitening kits. Our professional-grade treatments remove stubborn stains and restore the natural shine of your teeth safely."
    },
    {
      img: xray,
      title: "Dental X-Rays",
      desc: "Advanced digital X-rays help us diagnose hidden issues with precision. We capture high-quality images with minimal radiation, ensuring your safety and effective treatment planning."
    },
    {
      img: Pediatric,
      title: "Pediatric Dentistry",
      desc: "Child-friendly care from first teeth to teens. We offer fluoride treatments, dental sealants, and education on oral hygiene in a calming, friendly environment for your little ones."
    },
    {
      img: Gum,
      title: "Gum Disease Treatment",
      desc: "Treatment for gingivitis and periodontitis to prevent tooth loss. Services include deep cleaning (scaling & root planing), medication, and ongoing maintenance therapy."
    },
    {
      img: implant,
      title: "Dental Implants",
      desc: "Permanent tooth replacement using biocompatible titanium implants. Whether one tooth or full-mouth restoration, our solutions are stable, aesthetic, and long-lasting."
    },
    {
      img: braces,
      title: "Braces & Clear Aligners",
      desc: "Straighten crooked teeth with modern options like metal braces or nearly invisible clear aligners. Ideal for teens and adults seeking a confident, aligned smile."
    },
    {
      img: download,
      title: "Tooth Restoration",
      desc: "Crowns, bridges, and tooth-colored fillings to repair damaged or decayed teeth. Restorations improve both functionality and appearance, ensuring long-term dental health."
    }
  ];

  return (
    <div className="w-full  py-30 px-4">
      {/* Section Heading */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Comprehensive Dental Treatments for All Ages
        </h2>
        <p className="text-lg text-blue-800 mt-4">
          Explore our full range of services designed to address your dental concerns with advanced care, personal attention, and long-term oral health goals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services2;

