import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import g1 from '../g1.avif';
import g2 from '../g2.webp';
import g3 from '../g3.avif';
import g4 from '../g4.avif';
import g5 from '../g5.avif';
import g6 from '../g6.webp';
import g7 from '../g7.avif';
import g8 from '../g8.avif';
import g9 from '../g9.webp';
import g10 from '../g10.avif';
import g11 from '../g11.avif';
import g12 from '../g12.avif';

// Modal accessibility setup
Modal.setAppElement('#root');

function AboutGallery() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sliderSettings = {
    initialSlide: currentIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
          Our Dental Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore the transformation of smiles, state-of-the-art facilities, and a glimpse into the world of exceptional dental care at our clinic.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal with Slider */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Gallery Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70"
      >
        <div className="relative w-full max-w-3xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
          >
            &times;
          </button>
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-[75vh] object-contain rounded-xl" />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </div>
  );
}

export default AboutGallery;


