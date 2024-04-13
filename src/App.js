import React from "react";
import Navbar from "./Components/NavBar/Navbar.js";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Service from "./Components/Service/Service";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";

function App() {

  return (
      <div className="wrapper">
        <ScrollToTop/>
        <Navbar />
        <Hero />
        <Features />
        <Service  />
        <Contact />
      </div>
  );
}

export default App;

