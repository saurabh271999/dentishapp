import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import AboutClinic from './AboutClinic';
import OurServices from './OurServices';
import Result from './Result';
import Doctorsec from './Doctorsec';

import video from '../video.mp4';
import Home1 from '../Home1.jpg';
import Home2 from '../Home2.jpg';
import Home3 from '../Home3.jpg';
import Home4 from '../Home4.jpg';

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.707 14.707a1 1 0 010-1.414L9.414 10l3.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z" />
      </svg>
    </div>
  );
}

function Home() {
  const media = [
    { type: "video", src: video },
    { type: "image", src: Home1 },
    { type: "image", src: Home2 },
    { type: "image", src: Home3 },
    { type: "image", src: Home4 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div id="hero" className="w-full">
      <div className="relative w-full px-0 sm:px-4 py-6">
        <Slider {...settings}>
          {media.map((item, index) => (
            <div key={index} data-aos="fade-up" className="relative">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      {/* Other Sections */}
      <AboutClinic />
      <Doctorsec />
      <OurServices />
      <Result />
    </div>
  );
}

export default Home;

