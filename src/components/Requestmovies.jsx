import React, { useState } from "react";

const movies = [
  { title: "Kimi no Na wa", img: "/movies/your.jpg" },
  { title: "Tumbbad", img: "/movies/Tumbbad.jpg" },
  { title: "Warm Bodies", img: "/movies/warm.jpg" },
  { title: "A Thursday", img: "/movies/thursday.jpg" },
  { title: "Thar", img: "/movies/thar.jpg" },
  { title: "Kingsman", img: "/movies/Kingsman.jpg" },
  { title: "Happy New Year", img: "/movies/Happy New Year.jpg" },
  { title: "Shutter Island", img: "/movies/Shutter Island.jpg" },
  { title: "Nosferatu", img: "/movies/Nosferatu.jpg" },
  { title: "Jawan", img: "/movies/Jawan.jpg" },
  { title: "Dune", img: "/movies/Dune.jpg" },
  { title: "How to Train Your Dragon", img: "/movies/How to Train Your Dragon.jpg" },
];

const Requestmovies = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="p-4 max-w-screen mx-auto bg-[#18181b]">
      <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-f2 mt-10 ml-2">
        Requested Movies
      </h1>

      
      {play && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Video */}
            <video
              src="/slide/tt.mp4" 
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            />

            {/* Close Button */}
            <button
              onClick={() => setPlay(false)}
              className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-[#27272a] rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-f2 text-white mb-4">{movie.title}</h3>
              <button
                onClick={() => setPlay(true)}
                className="mt-auto px-4 py-2 bg-[#dad7d5] text-[#141c20] rounded text-center transition-transform duration-200 transform hover:scale-105 font-semibold"
              >
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requestmovies;
