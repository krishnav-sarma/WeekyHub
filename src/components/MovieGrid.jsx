import React from "react";

const movies = [
  {
    title: "Coolie",
    img: "/movies/coolie.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/rJ9yJvamTNRj8VaxHbqo",
  },
  {
    title: "Detective Ujjwalan",
    img: "/movies/detective.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/3GtMFAainA6lELnNdP57",
  },
  {
    title: "Inspector Zende",
    img: "/movies/zende.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/K5dGNYFDemGGxdtkZPTv",
  },
  {
    title: "Maargan",
    img: "/movies/maargan.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/wHvrfDnBivEAXzsWFUHP",
  },
  {
    title: "Maareesan",
    img: "/movies/maareesan.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/Ovj10qcGuIoRm7Hsbgzq",
  },
  {
    title: "Saiyaara",
    img: "/movies/saiyaara.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/GL88rcPnv0",
  },
  {
    title: "Nobody 2",
    img: "/movies/Nobody2.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/M2Y57VWKnGSrz3yfJR14",
  },
  {
    title: "Locked",
    img: "/movies/locked.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/AXa6vh18hUZPfBppWdUV",
  },
  {
    title: "Lilo and Stitch",
    img: "/movies/lilo.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/80t5ovNfpOdjijGGz3RJ",
  },
  {
    title: "The Naked Gun",
    img: "/movies/The-Naked-Gun-2025-MoviesMod.caf.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/pP0LQJCqbFHMAiO55c6j",
  },
  {
    title: "Weapons",
    img: "/movies/weapons.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/GG8MstxrUNpAclG7gd3x",
  },
  {
    title: "Movie 12",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 13",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 14",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 15",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 16",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 17",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 18",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 19",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 20",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 21",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 22",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 23",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 24",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
];

const MovieGrid = () => {
  return (
    <div className="p-4 max-w-screen mx-auto bg-[#18181b] ">
      <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-f2 mt-15 ml-2">Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-5.5 md:mt-10">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-[#27272a] rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Movie Image */}
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />

            {/* Movie Name & Button */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-xl  font-f2  text-white mb-4">
                {movie.title}
              </h3>
              <a
                href={movie.link}
                className="mt-auto px-4 py-2 bg-[#dad7d5] text-[#141c20] rounded text-center transition-transform duration-200 transform hover:scale-105 "
              >
                {movie.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
