import React from "react";
import Hero from "./components/Hero";
import Cardpage from "./pages/Cardpage";
import Nav from "./components/Nav";
import Requestpage from "./pages/Requestpage";
import Footer from "./pages/Footer";
import ProgressBar from "./components/ProgressBar"; // ✅ import it

const App = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Nav />

      <ProgressBar />

      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>

      <section id="movies">
        <Cardpage/>
      </section>

      <section id="request">
        <Requestpage />
      </section>

      <Footer />
    </div>
  );
};

export default App;
