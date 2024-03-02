import Header from "./myComponents/1-header/Header";
import Hero from "./myComponents/2-hero/Hero";
import Education from "./myComponents/Education/Education";
import Skills from "./myComponents/Skills/Skill";
import Main from "./myComponents/3-main/Main";
import Contact from "./myComponents/4-contact/Contact";
import Footer from "./myComponents/5-footer/Footer";

import { useState, useEffect } from "react";

function App() {
  const [showBtn, setShowtbn] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowtbn(true);
      } else {
        setShowtbn(false);
      }
    });
  }, []);

  return (
    <>
      <div id="up" className="container">
        <Header />
        <Hero />
        <div className="divider"></div>
        <Education />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Main />
        <div className="divider"></div>
        <Contact />
        <div className="divider"></div>
        <Footer />
      </div>
      <a href="#up" style={{ opacity: showBtn ? 1 : 0, transition: "2s" }}>
        <button className="scroll">
          <img src="/animations/rocet.gif" alt="rocket btn" />
        </button>
      </a>
    </>
  );
}

export default App;
