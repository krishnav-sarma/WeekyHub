import React from "react";

const movies = [
  {
    title: "Kimi no Na wa ",
    img: "/movies/your.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/ec1THoR8TREEnUFQd5cv",
  },
  {
    title: "Tumbbad",
    img: "/movies/Tumbbad.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/EaGILAKUCX94SWFybiD9",
  },
  {
    title: "Warm Bodies",
    img: "/movies/warm.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/JG1YlhlQ6ss8pqlxdtOz",
  },
  {
    title: "A Thursday",
    img: "/movies/thursday.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/q2hJomtAaqFxO3yLUh17",
  },
  {
    title: "Thar",
    img: "/movies/thar.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/uBBzfshnBkXSOiMvemah",
  },
  {
    title: "Kingsman",
    img: "/movies/Kingsman.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/9sCyMr9HJFR1WhY89RmC",
  },
  {
    title: "Happy New Year",
    img: "/movies/Happy New Year.jpg",
    buttonText: "Download",
    link: "https://driveleech.net/file/WKt3nrxB4hfqFfijeRys",
  },
  {
    title: "Shutter Island",
    img: "/movies/Shutter Island.jpg",
    buttonText: "Download",
    link: "https://driveseed.org/file/cSqDv1JNNfWHGwltF3pm",
  },
  {
    title: "Movie 9",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 10",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 11",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 12",
    img: "/movies/1.jpg",
    buttonText: "Download",
    link: "#",
  },

];

const Requestmovies = () => {
  return (
    <div className="p-4 max-w-screen mx-auto bg-[#18181b]  ">
      <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-f2 mt-10 ml-2">Requested Movies</h1>
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
              <h3 className="text-xl font-f2 text-white mb-4">
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

export default Requestmovies;
