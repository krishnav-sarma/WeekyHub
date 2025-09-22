import React from "react";

const movies = [
  {
    title: "Coolie",
    img: "/movies/coolie.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.9396f1e8-0550-4727-bfb0-33668c2a6b9a?autoplay=0&ref_=atv_cf_strg_wb",
  },
  {
    title: "Detective Ujjwalan",
    img: "/movies/detective.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/82095949?source=35&fromWatch=true",
  },
  {
    title: "Inspector Zende",
    img: "/movies/zende.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81778084?source=35&fromWatch=true",
  },
  {
    title: "Maargan",
    img: "/movies/maargan.jpg",
    buttonText: "Watch Now",
    link: "https://www.hotstar.com/in/movies/maargan/1271443031",
  },
  {
    title: "Maareesan",
    img: "/movies/maareesan.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81781839?source=35&fromWatch=true",
  },
  {
    title: "Saiyaara",
    img: "/movies/saiyaara.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/82024663",
  },
  {
    title: "Nobody 2",
    img: "/movies/Nobody2.jpg",
    buttonText: "Watch Now",
    link: "https://tv.apple.com/us/movie/nobody-2/umc.cmc.70ynjs10thb3tk5tg78g9rnp6",
  },
  {
    title: "Locked",
    img: "/movies/locked.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Locked/0RJQ0KLH5XCXGTT63K5VBUVOC7",
  },
  {
    title: "Lilo and Stitch",
    img: "/movies/lilo.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Lilo-Stitch-2025/0RIK82RI02E0638IH1I0YIKADR",
  },
  {
    title: "The Naked Gun",
    img: "/movies/The-Naked-Gun-2025-MoviesMod.caf.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/The-Naked-Gun/0RNE5NZR0ZRBFZQ4UUIIG6XYFL",
  },
  {
    title: "Weapons",
    img: "/movies/weapons.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/dp/amzn1.dv.gti.930793f1-4a5c-4998-b335-7150770e5fe0?autoplay=0&ref_=atv_cf_strg_wb",
  },
  {
    title: "777 Charlie",
    img: "/movies/777.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/777-Charlie-Hindi/0IVI12HKR929M9BRHUUTBLE34Z",
  },
  {
    title: "A classic horror story",
    img: "/movies/A classic horror story.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81248435?source=35&fromWatch=true",
  },
  {
    title: "Airlift",
    img: "/movies/Airlift.jpg",
    buttonText: "Watch Now",
    link: "https://www.hotstar.com/in/movies/airlift/1971011111",
  },
  {
    title: "Badla",
    img: "/movies/badla.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81112446?source=35&fromWatch=true",
  },
  {
    title: "The call",
    img: "/movies/call.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81342505?source=35&fromWatch=true",
  },
  {
    title: "Fight Club",
    img: "/movies/Fight Club.jpg",
    buttonText: "Watch Now",
    link: "https://www.hotstar.com/in/movies/fight-club/1971007972",
  },
  {
    title: "Flow",
    img: "/movies/flow.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Flow/0OKFGAYBUC741J3E8GHJTTFNQU",
  },
  {
    title: "Forensic",
    img: "/movies/Forensic.jpg",
    buttonText: "Watch Now",
    link: "https://www.zee5.com/movies/details/forensic/0-0-1z5149852",
  },
  {
    title: "Game Over",
    img: "/movies/game.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81151878?source=35&fromWatch=true",
  },
  {
    title: "Ghosted",
    img: "/movies/Ghosted.jpg",
    buttonText: "Watch Now",
    link: "https://tv.apple.com/in/movie/ghosted/umc.cmc.6nodv9rf3ltfk2ar3pfc8hced?action=play",
  },
  {
    title: "Hush",
    img: "/movies/hush.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Hush-2016/0RUQ1PAHGH71MLHXGXX1T4AY1O",
  },
  {
    title: "Kill",
    img: "/movies/Kill.jpg",
    buttonText: "Watch Now",
    link: "https://www.primevideo.com/detail/Kill/0JMFNIW8UW7PIC4EZBTY7ZVJ42",
  },
  {
    title: "Laapataa Ladies",
    img: "/movies/lapata.jpg",
    buttonText: "Watch Now",
    link: "https://www.netflix.com/in/title/81760391?source=35&fromWatch=true",
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
                className="mt-auto px-4 py-2 bg-[#dad7d5] text-[#141c20] rounded text-center transition-transform duration-200 transform hover:scale-105 font-semibold "
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


