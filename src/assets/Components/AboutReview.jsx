import React, { useEffect, useState } from "react";
import rating from '../rating.png'; // Star image

function AboutReview() {
    const [patients, setPatients] = useState(0);
    const [years, setYears] = useState(0);
    const [reviews, setReviews] = useState(0);

    useEffect(() => {
        const animateCounter = (setter, target, duration = 1000) => {
            let start = 0;
            const step = Math.ceil(target / (duration / 10));
            const interval = setInterval(() => {
                start += step;
                if (start >= target) {
                    start = target;
                    clearInterval(interval);
                }
                setter(start);
            }, 10);
        };

        animateCounter(setPatients, 10000);
        animateCounter(setYears, 12);
        animateCounter(setReviews, 500);
    }, []);

    return (
        <div className="bg-blue-400 py-10 mb-10 px-4 sm:px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center items-center">
                {/* Patients */}
                <div>
                    <p className="text-4xl sm:text-5xl font-bold text-white">{(patients / 1000).toFixed(0)}K+</p>
                    <p className="text-white font-semibold mt-1">Patients Treated</p>
                </div>

                {/* Years */}
                <div>
                    <p className="text-4xl sm:text-5xl font-bold text-white">{years}+</p>
                    <p className="text-white font-semibold mt-1">Clinic Years</p>
                </div>

                {/* Reviews */}
                <div>
                    <p className="text-4xl sm:text-5xl font-bold text-white">{reviews}+</p>
                    <p className="text-white font-semibold mt-1">Practo Reviews</p>
                </div>

                {/* Rating Image */}
                <div className="flex flex-col items-center justify-center">
                    <img src={rating} alt="Rating" className="w-32 sm:w-36 h-auto mb-1" />
                    <p className="text-white font-semibold text-sm sm:text-base">5 Star Ratings on Practo</p>
                </div>
            </div>
        </div>
    );
}

export default AboutReview;

