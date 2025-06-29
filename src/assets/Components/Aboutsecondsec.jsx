import React from "react";
import pic8 from '../pic8.avif';

function Aboutsecondsec() {
    return (
        <div className="bg-white px-4 py-12">
            {/* Top Image (smaller) */}
           

            {/* Text and Features */}
            <div className="max-w-5xl mx-auto mt-8 space-y-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
                    Committed to Delivering Exceptional Care with Our Best Features
                </h2>

                <p className="text-gray-700 text-base sm:text-lg text-justify px-2 sm:px-6">
                    At <strong className="text-blue-900">Agarwal's Super Speciality Dental Clinic</strong>, our goal is to provide outstanding dental care with a focus on comfort, innovation, and personalized attention. From your first consultation to your final treatment, we strive to create a calm and relaxing environment tailored to your individual needs.
                </p>

                 <div className="w-full flex justify-center">
                <img
                    src={pic8}
                    alt="Dental Clinic"
                    className="w-full max-w-3xl h-[280px] sm:h-[350px] object-cover rounded-lg shadow-md"
                />
            </div>

                {/* Features Grid (1 per row on small screens, 2 on medium) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                        {
                            title: "🧘‍♂️ Reduced Anxiety",
                            desc: "Soothing atmosphere, gentle techniques, and friendly communication to ease dental fear."
                        },
                        {
                            title: "🪑 Enhanced Comfort",
                            desc: "Modern ergonomic chairs, painless procedures, and compassionate care for all ages."
                        },
                        {
                            title: "🧍 Personalized Care",
                            desc: "Tailored treatment plans designed around your specific goals, lifestyle, and dental history."
                        },
                        {
                            title: "🦷 Advanced Technology",
                            desc: "We utilize the latest dental tools and digital equipment to deliver precision care and faster results."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-md shadow-sm hover:shadow-md transition-all text-left">
                            <h4 className="text-blue-800 font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Aboutsecondsec;


