import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); 
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 pointer-events-auto bg-transparent">
      {/* Logo */}
      <h1 className="text-2xl font-Pixel  text-black bg-[#bed3d6]  p-1.5 rounded-2xl">WeekyHub</h1>

      {/* Desktop  */}
      <nav className="space-x-6 hidden md:flex text-xl">
        <button
          className="hover:text-gray-300 text-white "
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>
        <button
          className="hover:text-gray-300 text-white"
          onClick={() => scrollToSection("movies")}
        >
          Movies
        </button>
        <button
          className="hover:text-gray-300 text-white"
          onClick={() => scrollToSection("request")}
        >
          Request_Movie
        </button>
      </nav>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="relative w-13 h-12 flex flex-col justify-between md:hidden focus:outline-none z-50 bg-[#18181b] hover:bg-[#d6d3d0]  rounded-full px-3 py-4 transition-transform duration-500 transform hover:scale-120 group "
      >
        <span
          className={`block h-0.5 bg-white group-hover:bg-black transition-transform duration-300  ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-white group-hover:bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-white group-hover:bg-black transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#131313] text-[#e3e3e3] flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden ${
          isOpen
            ? "h-[100vh] opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="text-4xl hover:scale-110 transition-transform font-f2 "
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>
        <button
          className="text-4xl hover:scale-110 transition-transform font-f2"
          onClick={() => scrollToSection("movies")}
        >
          Movies
        </button>
        <button
          className="text-4xl hover:scale-110 transition-transform font-f2"
          onClick={() => scrollToSection("request")}
        >
          Request_Movie
        </button>
      </div>
    </div>
  );
};

export default Nav;
