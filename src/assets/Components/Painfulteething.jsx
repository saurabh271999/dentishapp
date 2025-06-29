import React from "react";
import Treatment from "../About.png";
// import TeethingImg from "../teething.png"; // Optional additional image

function Painfulteething() {
  return (
    <div className="bg-blue-50 py-12 px-4 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Managing Teething & Tooth Pain Across All Ages</h2>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto">
          Teething and dental discomfort aren’t limited to babies. Children, teens, and adults—especially during wisdom tooth eruption—can all experience tooth pain. Learn about the causes, symptoms, and solutions suitable for every age group.
        </p>
      </div>

      {/* Image + Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1">
          <img src={Treatment} alt="Tooth Pain Treatment" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Common Causes of Dental Discomfort</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Baby and permanent tooth eruption in children</li>
            <li>Wisdom teeth eruption in teens and adults</li>
            <li>Gum inflammation or infection</li>
            <li>Tooth decay or cavities</li>
            <li>Bruxism (teeth grinding)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Relief & Treatment Options</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Cold compresses or cold teething rings (for all ages)</li>
            <li>Gentle gum massage or saltwater rinses</li>
            <li>Over-the-counter pain relief (only after dentist consultation)</li>
            <li>Good oral hygiene to prevent infections</li>
            <li>Wisdom tooth extraction if required</li>
          </ul>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 flex flex-col md:flex-row gap-8 items-center">
        {/* Optional image block (uncomment if you have another image) */}
        {/* <div className="flex-1">
          <img src={TeethingImg} alt="Teething Info" className="w-full rounded-xl shadow-md" />
        </div> */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">When to Visit a Dentist</h3>
          <p className="text-gray-700 text-base md:text-lg">
            If you or your child is experiencing prolonged tooth pain, swelling, fever, or difficulty chewing, it's important to consult a dentist. Early diagnosis and treatment can prevent further complications and ensure lifelong oral health for all age groups.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Painfulteething;

