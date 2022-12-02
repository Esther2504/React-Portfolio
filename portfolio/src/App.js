import ParticlesDark from "./components/ParticlesDark";
import ParticlesLight from "./components/ParticlesLight";
import "./scss/style.css";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((i) => observer.observe(i));
  }, [observer]);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <ParticlesDark id="tsparticles" />
      ) : (
        <ParticlesLight id="tsparticleslight" />
      )}
      <NavBar theme={theme} />
      <Header theme={theme} handleTheme={handleTheme} />
      <div className={`body ${theme}`}>
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
