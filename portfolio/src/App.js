import ParticlesDark from "./components/ParticlesDark";
import ParticlesLight from "./components/ParticlesLight";
import "./scss/style.css";
import github from "./images/github-logo.svg";
import { useState, useEffect } from "react";

import linkedin from "./images/linkedin-logo.svg";
import mail from "./images/mail-logo.svg";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
        <footer className={theme}>
          <div className="logos">
            <a href="https://github.com/Esther2504" target="_blank">
              <img src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/esther-schuitemaker-226b35154"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <button
              onClick={() =>
                (window.location = "mailto:esther.e.schuitemaker@gmail.com")
              }
            >
              <img src={mail} />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
