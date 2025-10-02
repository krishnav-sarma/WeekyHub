import React, { useState } from "react";

const movies = [
  { title: "Coolie", img: "/movies/coolie.jpg" },
  { title: "Detective Ujjwalan", img: "/movies/detective.jpg" },
  { title: "Inspector Zende", img: "/movies/zende.jpg" },
  { title: "Maargan", img: "/movies/maargan.jpg" },
  { title: "Maareesan", img: "/movies/maareesan.jpg" },
  { title: "Saiyaara", img: "/movies/saiyaara.jpg" },
  { title: "Nobody 2", img: "/movies/Nobody2.jpg" },
  { title: "Locked", img: "/movies/locked.jpg" },
  { title: "Lilo and Stitch", img: "/movies/lilo.jpg" },
  { title: "The Naked Gun", img: "/movies/The-Naked-Gun-2025-MoviesMod.caf.jpg" },
  { title: "Weapons", img: "/movies/weapons.jpg" },
  { title: "777 Charlie", img: "/movies/777.jpg" },
  { title: "A Classic Horror Story", img: "/movies/A classic horror story.jpg" },
  { title: "Airlift", img: "/movies/Airlift.jpg" },
  { title: "Badla", img: "/movies/badla.jpg" },
  { title: "The Call", img: "/movies/call.jpg" },
  { title: "Fight Club", img: "/movies/Fight Club.jpg" },
  { title: "Flow", img: "/movies/flow.jpg" },
  { title: "Forensic", img: "/movies/Forensic.jpg" },
  { title: "Game Over", img: "/movies/game.jpg" },
  { title: "Ghosted", img: "/movies/Ghosted.jpg" },
  { title: "Hush", img: "/movies/hush.jpg" },
  { title: "Kill", img: "/movies/Kill.jpg" },
  { title: "Laapataa Ladies", img: "/movies/lapata.jpg" },
];

const Requestmovies = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="p-4 max-w-screen mx-auto bg-[#18181b]">
      <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-f2 mt-10 ml-2">
        Movies
      </h1>

      {/* Video Overlay */}
      {play && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src="/slide/tt.mp4" 
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            />
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
