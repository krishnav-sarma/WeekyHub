import React from "react";

const movies = [
  {
    title: "F1",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "https://react-bootstrap.netlify.app/docs/components/cards",
  },
  {
    title: "Movie 2",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 3",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 4",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 5",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 6",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 7",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 8",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 9",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 10",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 11",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 12",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 13",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 14",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 15",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 16",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 17",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 18",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 19",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 20",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 21",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 22",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 23",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
  {
    title: "Movie 24",
    img: "./public/slide/bg.jpg",
    buttonText: "Download",
    link: "#",
  },
];

const MovieGrid = () => {
  return (
    <div className="p-4 max-w-screen mx-auto bg-[#18181b] ">
      <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-10 ml-2">Movies</h1>
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
              <h3 className="text-xl font-semibold text-white mb-4">
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
