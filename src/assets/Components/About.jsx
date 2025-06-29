import React from "react";
import pic10 from '../about.png';
import Aboutfirstsec from "./AboutfirstSec";
import AboutDoctor from "./AboutDoctor";
import Aboutsecondsec from './Aboutsecondsec';
import Aboutthirdsec from './Aboutthirdsec';
import Workinghours from './Workinghours';
import AboutReview from './AboutReview';
import Result from './Result';
import AboutGallery from './AboutGallery';

function About() {
    return (
        <div className="px-0 py-0">
            {/* Hero Section: Text Left, Image Right with Gradient Background */}
            <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 px-6 md:px-16 lg:px-24 py-10 md:py-16 gap-10">
                
                {/* Left Text Content */}
                <div className="w-full md:w-1/2 text-blue-900 space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        About Agarwal's 
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                        With over 17 years of excellence in dental care, we are committed to creating beautiful, healthy smiles using advanced technology and personalized treatment in a calm, patient-friendly environment.
                    </p>
                    <p className="sm:block text-sm sm:text-lg md:text-base">
                        Discover who we are, meet our expert team, explore our services, and see how we’re making a difference — one smile at a time.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={pic10}
                        alt="About Banner"
                        className="w-full h-auto max-h-[500px] object-contain"
                    />
                </div>
            </div>

            {/* Remaining Sections */}
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
                <Aboutfirstsec />
                <AboutDoctor />
                <Result />
                <Aboutsecondsec />
                <Workinghours />
                <AboutGallery />
                <AboutReview />
                <Aboutthirdsec />
            </div>
        </div>
    );
}

export default About;





