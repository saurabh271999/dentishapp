import React from "react";
import pic7 from '../pic-7.jpg';

function Aboutfirstsec() {
    return (
        <div className="px-6 py-12 bg-white ">
            <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
                
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src={pic7}
                        alt="Dentist Clinic"
                        className="w-full h-72 md:h-full object-cover "
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 w-full space-y-4">
                    <p className="text-lg text-blue-700 font-semibold">About Our Dental Clinic</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                        Advanced, Compassionate & Comfortable Dental Care
                    </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Welcome to <strong>Dr. Abhinay Agarwal's Super Speciality Dental Clinic</strong> — your trusted destination for complete oral healthcare. Our clinic is designed to offer not only the highest quality of treatment, but also a calm and comfortable environment for patients of all ages.
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        From routine checkups and preventive care to cosmetic enhancements and advanced restorative procedures, our expert team delivers personalized care using the latest dental technology. Every visit is focused on your comfort, your smile, and your long-term dental health.
                    </p>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        Whether you're looking to brighten your smile, replace missing teeth, or just need a reliable family dentist — we are here to help you every step of the way. Experience dental care that’s modern, gentle, and truly patient-centered at Agarwal's Super Speciality Dental Clinic.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Aboutfirstsec;
