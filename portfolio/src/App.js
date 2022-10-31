import ParticlesComponent from "./components/ParticlesBG";
import ParticlesComponent2 from "./components/particles2";
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
        <ParticlesComponent id="tsparticles" />
      ) : (
        <ParticlesComponent2 id="tsparticleslight" />
      )}
      <NavBar theme={theme} />
      <Header theme={theme} handleTheme={handleTheme} />
      <div className={`body ${theme}`}>
        <Skills theme={theme} />
        <Projects theme={theme} />
        <footer className={theme}>
          <form action="form.php" method="post">
            <h1>Contact</h1>
            First Name: <input type="text" name="first_name" /><br>
Last Name: <input type="text" name="last_name" /></br>
Email: <input type="text" name="email" /><br></br>
<textarea name="message"></textarea>
<button value="submit" type="submit">Submit</button>
</form>
          <div className="logos">
            <a href="https://github.com/Esther2504" target="_blank">
              <img src={github} />
            </a>
            {/* <a
              href="https://www.linkedin.com/in/esther-schuitemaker-226b35154/"
              target="_blank"
            >
              <img src={linkedin} />
            </a> */}
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
