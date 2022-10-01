import ParticlesComponent from "./components/ParticlesBG";
import ParticlesComponent2 from "./components/particles2";
import './style.css'
import html from './images/html5.svg'
import css from './images/css3.svg'
import javascript from './images/javascript.svg'
import react from './images/react.svg'
import router from './images/router.svg'
import redux from './images/redux.svg'
import sass from './images/sass.svg'
import git from './images/git.svg'
import weatherapp from './images/Weather-App.png'
import webshop from './images/WebShop.png'
import memory from './images/Memory.png'
import jsoncards from './images/jsoncards.PNG'
import theehuisje from './images/theehuisje.PNG'
import owl from './images/owl.svg'
import sun from './images/sun.svg'
import { useState } from "react";

function App() {
const [theme, setTheme] = useState("dark")

let icon = sun

if (theme === "dark") {
  let icon = sun
} else {
  icon = owl
}

const handleTheme = () => {
  if (theme === "dark") {
    setTheme("light")
  } else {
    setTheme("dark")
  }
}

  return (
    <>
    {theme === "dark" ? <ParticlesComponent id="tsparticles" /> : <ParticlesComponent2 id="tsparticleslight" /> }
      <nav className={`${theme}`}>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#skills">Skills & Tools</a></li>
          <li><a href="#projects">Projecten</a></li>
        </ul>
      </nav>
      <div className="header" id="header">
        <div className={`intro ${theme}`}>
        <h1>Hallo, ik ben <h1 style={{ display: "inline", fontSize: "3.7rem", color: "#54b3d6" }}>Esther</h1></h1>
        <h2>Junior Front End Developer</h2>
        <button onClick={handleTheme}><img src={icon}></img></button>
        </div>
      </div>
      <div className={`body ${theme}`}>
      <div id="skills" className={`container ${theme}`}>
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
      <div id="projects" className="container">
        <h1>PROJECTEN</h1>
        <div className="projects">
        
          <div className="project">
            <img src={webshop}></img>
            <p>Webshop</p>
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-webshop">Code</a></button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div>
          {/* <div className="project-modal">
            <img src={webshop}></img>
            <p>Webshop</p>
            React || Router || Redux
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-webshop">Code</a></button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div> */}
        
          <div className="project">
            <img src={weatherapp}></img>
            <p>Weather App</p>
            <div className="buttons">
            <button><a target="_blank" href="https://github.com/Esther2504/react-weather-app">Code</a></button>
            <button><a target="_blank" href="https://esther2504.github.io/react-weather-app/">Demo</a></button>
            </div>
          </div>
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
          </div>

        </div>
      </div>
      <div className="container">
        {/* <h1>Contact</h1> */}
      </div>
      </div>
    </>
  );
}

export default App;