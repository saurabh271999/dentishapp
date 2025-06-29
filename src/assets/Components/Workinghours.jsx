import React from "react";

function Workinghours() {
    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <p className="text-xl font-semibold text-blue-900">Working Hour</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Dental Clinic Working Hours
                </h2>
            </div>

            {/* Hours Box */}
            <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-sm text-center">
                    <p className="text-lg font-medium text-gray-800">Monday to Saturday</p>
                    <p className="text-2xl font-bold text-blue-900 mt-1">5:00 PM – 9:00 PM</p>
                </div>

                <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-sm text-center">
                    <p className="text-lg font-medium text-gray-800">Sunday</p>
                    <p className="text-xl font-semibold text-red-600 mt-1">Closed</p>
                </div>
            </div>
        </div>
    );
}

export default Workinghours;
