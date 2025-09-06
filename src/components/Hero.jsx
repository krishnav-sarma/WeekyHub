import React, { useState, useEffect } from "react";
import Nav from "./Nav";



const slides = [
  {
    id: 1,
    title: "The Batman",
    text: "When a sadistic killer begins murdering key political figures in Gotham, Batman is forced to investigate the city’s hidden corruption and question his family’s involvement.",
    img: "/slide/bg.jpg",
  },
  {
    id: 2,
    title: "Second Slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://picsum.photos/id/1015/1920/1080",
  },
  {
    id: 3,
    title: "Third Slide",
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    img: "https://picsum.photos/id/1019/1920/1080",
  },
];

// clone first & last slides
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }
    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 700);
    }
  }, [current]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav />

      {/* Slides */}
      <div
        className={`flex h-full w-full ${
          transition ? "transition-transform duration-700" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="h-screen w-full flex-shrink-0 relative"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text & Button */}
            <div className="absolute bottom-20 sm:bottom-20 ml-2 md:ml-10 text-left text-white max-w-[550px]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-6">
                {slide.text}
              </p>
              <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-lg shadow-lg hover:scale-105 transition-transform text-sm md:text-base">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
