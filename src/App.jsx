import React from "react";
import Hero from "./components/Hero";
import Cardpage from "./pages/Cardpage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Nav />

      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>

      <section id="movies">
        <Cardpage />
      </section>

      <section id="request">
      </section>
    </div>
  );
};

export default App;
