import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaTooth, FaPlus } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Scrolling Header */}
      <div className="h-17 p-4 w-full bg-blue-900 text-white text-center text-sm md:text-2xl font-semibold px-4 whitespace-nowrap overflow-hidden overflow-x-auto">
        Welcome to Agarwal Super Speciality Dental Clinic
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md z-50 relative">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <FaTooth className="text-blue-800 text-5xl md:text-6xl" />
              <FaPlus className="text-blue-800 text-xs absolute top-1 left-1" />
            </div>
            <div className="text-blue-900 font-semibold leading-tight">
              <div className="text-lg md:text-2xl italic">Agarwal Super</div>
              <div className="text-sm md:text-xl italic">Speciality</div>
              <div className="text-xs md:text-base font-sans">Dental Clinic</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium items-center">
            <Link to="/" className="text-blue-900 text-lg hover:text-sky-700">Home</Link>
            <Link to="/About" className="text-blue-900 text-lg hover:text-sky-700">About</Link>
            <Link to="/Services" className="text-blue-900 text-lg hover:text-sky-700">Services</Link>

            {/* Treatment Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-blue-900 text-lg hover:text-sky-700 focus:outline-none"
              >
                Treatment
              </button>
              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 bg-white border border-blue-200 rounded-md shadow-xl z-50 min-w-[240px]"
                >
                  {[
                    { label: "Treatment of Painful Teething", path: "/Painfulteething" },
                    { label: "Treatment of Stained Teeth", path: "/treatments/stained-teeth" },
                    { label: "Treatment of Toothache", path: "/treatments/toothache" },
                    { label: "Myomectomy Treatment", path: "/treatments/myomectomy" },
                    { label: "Treatment of Cavities", path: "/treatments/cavities" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-800 transition"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/Contact" className="text-blue-900 text-lg hover:text-sky-700">Contact</Link>
            <Link
              to="/Appointment"
              className="bg-blue-800 text-white px-4 py-2 text-lg rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-50">
            <Link to="/" className="block text-blue-900 text-lg hover:text-sky-700">Home</Link>
            <Link to="/About" className="block text-blue-900 text-lg hover:text-sky-700">About</Link>
            <Link to="/Services" className="block text-blue-900 text-lg hover:text-sky-700">Services</Link>

            {/* Mobile Treatment Dropdown (Accordion-style) */}
            <details className="text-blue-900">
              <summary className="text-lg cursor-pointer">Treatment</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link to="/treatments/teething" className="block hover:text-sky-700">Painful Teething</Link>
                <Link to="/treatments/stained-teeth" className="block hover:text-sky-700">Stained Teeth</Link>
                <Link to="/treatments/toothache" className="block hover:text-sky-700">Toothache</Link>
                <Link to="/treatments/myomectomy" className="block hover:text-sky-700">Myomectomy</Link>
                <Link to="/treatments/cavities" className="block hover:text-sky-700">Cavities</Link>
              </div>
            </details>

            <Link to="/Contact" className="block text-blue-900 text-lg hover:text-sky-700">Contact</Link>
            <Link
              to="/Appointment"
              className="block bg-blue-800 text-white text-center px-3 py-2 rounded-md text-lg hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;



