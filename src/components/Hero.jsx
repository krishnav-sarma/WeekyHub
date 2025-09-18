import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const slides = [
  {
    id: 1,
    title: "F1",
    text: "Sonny Hayes was the most promising phenom in the 1990s in FORMULA 1® until an accident on the track. Thirty years later, his former teammate Ruben Cervantes convinces him to come back and drive alongside hotshot rookie Joshua Pearce for one last chance to be the best in the world. Sonny’s past catches up with him, and he finds that the road to redemption is not something you can travel alone.",
    img: "/slide/bg.jpg",
    mobileImg: "/slide/bg.jpg",
  },
  {
    id: 2,
    title: "Maareesan",
    text: "An Alzheimer's patient sets out on a journey with a thief, a journey that will alter both their lives in ways they never imagined. What unfolds becomes the heart of the story.",
    img: "/slide/bg2.jpg",
    mobileImg: "/movies/maareesan.jpg",
  },
  {
    id: 3,
    title: "Nosferatu",
    text: "Robert Eggers’ NOSFERATU is a gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
    img: "/slide/Nosferatu2.jpg",
    mobileImg: "/movies/Nosferatu.jpg",
  },
  {
    id: 4,
    title: "Ballerina",
    text: "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
    img: "/slide/bg4.jpg",
    mobileImg: "/movies/zende.jpg",
  },
  {
    id: 5,
    title: "Nobody 2",
    text: "Bob Odenkirk returns as Hutch, an overworked assassin who just needs a break, in this bare-knuckle action-thriller. After deciding to take his family to a tourist town for some fun in the sun, a minor encounter with local bullies yanks the family into the crosshairs of an unhinged, blood-thirsty crime boss who is determined to derail his relaxation.",
    img: "/slide/bg5.jpg",
    mobileImg: "/movies/Nobody2.jpg",
  },
  {
    id: 6,
    title: "How to Train Your Dragon",
    text: "From New Line Cinema and Zach Cregger, the wholly original mind behind Barbarian, comes a new horror/thriller: Weapons. When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
    img: "/slide/bg6.jpg",
    mobileImg: "/movies/How to Train Your Dragon.jpg",
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
          <div key={index} className="h-screen w-full flex-shrink-0 relative">
            {/* Desktop Image */}
            <img
              src={slide.img} // desktop photo
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover hidden sm:block"
            />

            {/* Mobile Image */}
            <img
              src={slide.mobileImg} // mobile photo
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover sm:hidden"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Text & Button */}
            <div className="absolute bottom-20 sm:bottom-20 ml-2 md:ml-10 text-left text-white max-w-[550px]">
              <h2 className="text-6xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-f2">
                {slide.title}
              </h2>
              <p className="text-[16px] sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-6 font-semibold ">
                {slide.text}
              </p>
              {/* <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded-lg shadow-lg hover:scale-105 transition-transform text-[15px] md:text-base font-f2 font-semibold">
                Watch Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
