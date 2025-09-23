import React from "react";

const movies = [
  {
    title: "Kimi no Na wa ",
    img: "/movies/your.jpg",
    buttonText: "Watch Now",
    link: "https://www.crunchyroll.com/series/G9VHN9PK3/your-name?srsltid=AfmBOoosWRbW6dYKgQG6Va6k7RYHB3fc-4lxcczOK3zXN1IhD2CPKJoH",
  },
  {
    title: "Tumbbad",
    img: "/movies/Tumbbad.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Tumbbad/0JP2YUWYYUI1Q2NN73XBXXXC2T",
  },
  {
    title: "Warm Bodies",
    img: "/movies/warm.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.70a9f728-7d57-0b95-7c78-d37ffe2958d3?autoplay=0&ref_=atv_cf_strg_wb",
  },
  {
    title: "A Thursday",
    img: "/movies/thursday.jpg",
    buttonText: "Watch Now",
    link: "https://www.hotstar.com/in/movies/a-thursday/1260082828",
  },
  {
    title: "Thar",
    img: "/movies/thar.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81225175?source=35&fromWatch=true",
  },
  {
    title: "Kingsman",
    img: "/movies/Kingsman.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/80013870",
  },
  {
    title: "Happy New Year",
    img: "/movies/Happy New Year.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/80017528",
  },
  {
    title: "Shutter Island",
    img: "/movies/Shutter Island.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Shutter-Island/0O2PTYZIO373XRM80BFH7PMODL",
  },
  {
    title: "Nosferatu",
    img: "/movies/Nosferatu.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Nosferatu/0F7TWFQK7RKDWLFNLUG9GBV2XD",
  },
  {
    title: "Jawan",
    img: "/movies/Jawan.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81493411?source=35&fromWatch=true",
  },
  {
    title: "Dune",
    img: "/movies/Dune.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.a8025548-3908-4562-8896-8fffd945cfb6?autoplay=0&ref_=atv_cf_strg_wb",
  },
  {
    title: "How to Train Your Dragon",
    img: "/movies/How to Train Your Dragon.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.ce54af1d-6523-4ae3-8857-c8b8fb991309?autoplay=0&ref_=atv_cf_strg_wb",
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
                className="mt-auto px-4 py-2 bg-[#dad7d5] text-[#141c20] rounded text-center transition-transform duration-200 transform hover:scale-105 font-semibold"
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
