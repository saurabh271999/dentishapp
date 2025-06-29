import React from "react";
import { Phone } from 'lucide-react'; // Make sure it's installed
import pic13 from '../pic-13.png';

function Aboutthirdsec() {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-blue-100 px-6 py-10 lg:py-12 lg:px-40">
            
            {/* Left Content */}
            <div className="lg:w-1/2 w-full space-y-4 lg:pr-10">
                <p className="text-5xl font-extrabold text-blue-900">New Patient?</p>
                <p className="text-2xl font-semibold text-gray-800">
                    Contact us now and get over your problem
                </p>
                <p className="text-gray-700 text-lg">Our Clinic Contact Number:</p>
                <div className="flex items-center gap-2 text-blue-900 text-lg font-medium">
                    <Phone className="w-5 h-5 text-blue-600" />
                    +91 9555524592 / 0120-4294949
                </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                <img
                    src={pic13}
                    alt="Dental Clinic"
                    className="w-full max-w-sm rounded-md  object-cover"
                />
            </div>
        </div>
    );
}

export default Aboutthirdsec;

