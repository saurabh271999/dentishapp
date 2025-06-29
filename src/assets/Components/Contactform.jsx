import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactmap from "../contactmap.png";

function ContactSection() {
  return (
    <div>
      {/* Contact Form and Info Section */}
      <div className="bg-blue-200 py-8 px-4 sm:px-6 md:px-16 lg:px-32 mt-20 text-gray-900 relative overflow-hidden rounded-xl">
        {/* Decorative angled background */}
        <div className="absolute top-0 left-0 w-full h-full  rotate-2 origin-top -z-10 rounded-xl"></div>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          {/* Left: Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-auto md:mx-0">
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="mb-6 text-sm">
                Fields marked with an <span className="text-blue-600">*</span> are required
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block font-semibold mb-1">
                    Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Phone <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <textarea className="border black-2 h-40 w-full p-3" placeholder="Message"/>
                </div>
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-6 py-2 font-semibold hover:bg-black transition rounded-md w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-extrabold mb-6">Get In Touch with Us!</h3>

            <div className="flex items-start gap-4 mb-6">
              <div className="text-white bg-cyan-600 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold text-lg">Clinic Phone</p>
                <p className="text-blue-900">+91 9555524592 / 0120-4294949</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-white bg-cyan-600 p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-lg">Dental Clinic</p>
                <p className="text-blue-900">
                  A-87/1, Dr. Abhinay Agarwal's Super Speciality Dental Clinic,
                  Chaddha Cinema Road, Prince Road, Gandhi Nagar-244001
                </p>
                <div>
                  <h4 className="text-xl font-semibold mt-5 text-black mb-2">
                    Google Maps
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/Agarwal+Superspeciality+Dental+Clinic/@28.8289498,78.7700004,17z/data=!3m1!4b1!4m6!3m5!1s0x390afb09aa1336b1:0xe967c96865a05141!8m2!3d28.8289451!4d78.7725753!16s%2Fg%2F11ny_3jtlh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clickable Map Image */}
      <div className="mt-10 px-4 sm:px-6 md:px-16 lg:px-32 pb-16">
        <a
          href="https://www.google.com/maps/place/Agarwal+Superspeciality+Dental+Clinic/@28.8289498,78.7700004,17z/data=!3m1!4b1!4m6!3m5!1s0x390afb09aa1336b1:0xe967c96865a05141!8m2!3d28.8289451!4d78.7725753!16s%2Fg%2F11ny_3jtlh?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={contactmap}
            alt="Map location"
            className="w-full max-h-[300px] object-cover rounded-lg shadow-md cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;





