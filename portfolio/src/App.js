import ParticlesComponent from "./components/ParticlesBG";
import ParticlesComponent2 from "./components/particles2";
import Linking from "react";
import "./scss/style.css";
import html from "./images/html5.svg";
import css from "./images/css3.svg";
import javascript from "./images/javascript.svg";
import react from "./images/react.svg";
import router from "./images/router.svg";
import redux from "./images/redux.svg";
import sass from "./images/sass.svg";
import git from "./images/git.svg";
import github from "./images/github-logo.svg";
import weatherapp from "./images/Weather-App.png";
import webshop from "./images/WebShop.png";
import memory from "./images/Memory.png";
import jsoncards from "./images/jsoncards.PNG";
import theehuisje from "./images/theehuisje.PNG";
import owl from "./images/owl.svg";
import sun from "./images/sun.svg";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { data } from "./projectdata.js";
import linkedin from "./images/linkedin-logo.svg";
import mail from "./images/mail-logo.svg";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    }
    )
  })

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((i) => observer.observe(i))
  }, [observer]);

  let icon = sun;

  window.onclick = () => {
    setOpen(false);
  };

  if (theme === "dark") {
    let icon = sun;
  } else {
    icon = owl;
  }


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
      <nav className={`${theme}`}>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#skills">Skills & Tools</a>
          </li>
          <li>
            <a href="#projects">Projecten</a>
          </li>
        </ul>
      </nav>
      <div className="header" id="header">
        <div className={`intro ${theme}`}>
          <h1>
            Hallo, ik ben <h1 className={`name ${theme}`}>Esther</h1>
          </h1>
          <h2 className="typing">Junior Front End Developer</h2>
          <button onClick={handleTheme}>
            <img src={icon}></img>
          </button>
        </div>
      </div>
      <div className={`body ${theme}`}>
        <div id="skills" className={`container hidden ${theme}`}>
          <h1>SKILLS & TOOLS</h1>
          <div className="skills">
            <div className={`skills-box ${theme}`}>
              <img src={html}></img>
              <p>HTML</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={css}></img>
              <p>CSS</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={javascript}></img>
              <p>JavaScript</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={react}></img>
              <p>React</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={router}></img>
              <p>Router</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={redux}></img>
              <p>Redux</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={sass}></img>
              <p>SASS</p>
            </div>
            <div className={`skills-box ${theme}`}>
              <img src={git}></img>
              <p>Git</p>
            </div>
          </div>
        </div>
        <div id="projects" className="container hidden">
          <h1>PROJECTEN</h1>
          <div className={`projects ${theme}`}>
            {isOpen ? (
              <Modal data={modalData} closeModal={setOpen} theme={theme} />
            ) : null}
            {data.map((project) => {
              return (
                <button
                  className={`project ${theme}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalData(project);
                    setOpen(true);
                  }}
                >
                  {/* <div className="project"> */}
                  <img src={images[project.img]}></img>
                  <p>{project.name}</p>
                  <div className="buttons">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <a target="_blank" href={`${project.codelink}`}>
                        Code
                      </a>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <a target="_blank" href={`${project.demolink}`}>
                        Demo
                      </a>
                    </button>
                    {/* </div> */}
                  </div>
                </button>
              );
            })}

            {/* <div className="project">
            <img src={webshop}></img>
            <p>Webshop</p>
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-webshop">Code</a></button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div> */}
            {/* <div className="project-modal">
            <img src={webshop}></img>
            <p>Webshop</p>
            React || Router || Redux
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-webshop">Code</a></button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div> */}
            {/*         
          <div className="project">
            <img src={weatherapp}></img>
            <p>Weather App</p>
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-weather-app">Code</a></button>
            <button><a target="_blank" href="https://esther2504.github.io/react-weather-app/">Demo</a></button>
            </div>
          </div>
          {isOpen ? <Modal /> : null}
          <div className="project">
            <img src={memory}></img>
            <p>Memory</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://fruitmemory.netlify.app/">Demo</a></button>     
            </div>
          </div>
          <div className="project">
            <img src={theehuisje}></img>
            <p>Theehuisje</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://theehuisje-assessment.netlify.app/">Demo</a></button>     
            </div>
          </div>
          <div className="project">
            <img src={jsoncards}></img>
            <p>JSON Flip Cards</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://js-eindopdracht-esther.netlify.app/json-cards/json.html">Demo</a></button>     
            </div>
          </div>
          <div className="project">
            <img src={jsoncards}></img>
            <p>Clock</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://js-eindopdracht-esther.netlify.app/clock/clock.html">Demo</a></button>     
            </div>
          </div>*/}
          </div>
        </div>

         {/* <div className="container"></div> */}
         <footer className={theme}>
          <div className="logos">
        <a href="https://github.com/Esther2504" target="_blank"><img src={github} /></a>
        <a href="https://www.linkedin.com/in/esther-schuitemaker-226b35154/" target="_blank"><img src={linkedin} /></a>
        <button onClick={() => window.location = 'mailto:esther.e.schuitemaker@gmail.com'}><img src={mail} /></button>
        </div>
      </footer>
      </div> 

    </>
  );
}

export default App;
