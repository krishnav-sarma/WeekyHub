import React from "react";
import Requestmovies from "../components/Requestmovies";

const Requestpage = () => {


  const hundleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbwMuzS7JMmIZrbKvyYgIbM1AuGWh6fdQWcC6PEOp7I_KCm42Qsc4NeStbBVCJ3UL9ow/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Movies=${encodeURIComponent(e.target.name.value)}`, 
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        e.target.reset();
      })
      .catch((error) => console.error(error));
  };


  
  return (
    <div>
      <div className="p-4 max-w-screen mx-auto bg-[#18181b] ">
        <h1 className="text-[#d7d2cf] text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-f2 mt-15 ml-2">
          Sent Request{" "}
        </h1>
        <form onSubmit={hundleSubmit}>
          <input name="name" placeholder="Movie name" className="w-full px-4 py-3 rounded-xl bg-[#2a2a2d] text-[#d7d2cf] placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-[#d7d2cf] transition mt-4.5"  /> <br />
          <button className="w-full py-3 bg-[#d7d2cf] text-[#18181b]  rounded-xl text-xl
                 hover:bg-[#bdb9b6] transition shadow-md mt-4.5 font-f2">Sent</button>
        </form>
      </div>
      <Requestmovies />
    </div>
  );
};

export default Requestpage;




