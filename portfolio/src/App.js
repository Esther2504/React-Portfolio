import ParticlesComponent from "./components/ParticlesBG";
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

function App() {
  return (
    <>
      <ParticlesComponent id="tsparticles" />
      <nav>
        <ul>
          <li><a href="#skills">Skills & Tools</a></li>
          <li><a href="#projects">Projecten</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
      <div className="header">
        <h1>Hallo, ik ben <h1 style={{ display: "inline", fontSize: "3.7rem", color: "#54b3d6" }}>Esther</h1></h1>
        <h2>Junior Front End Developer</h2>
      </div>
      <div className="body">
      <div id="skills" className="container">
        <h1>SKILLS & TOOLS</h1>
        <div className="skills">
        <div className="skills-box">
            <img src={html}></img>
            <p>HTML</p>
          </div>
          <div className="skills-box">
            <img src={css}></img>
            <p>CSS</p>
          </div>
          <div className="skills-box">
            <img src={javascript}></img>
            <p>JavaScript</p>
          </div>
          <div className="skills-box">
            <img src={react}></img>
            <p>React</p>
          </div>
          <div className="skills-box">
            <img src={router}></img>
            <p>Router</p>
          </div>
          <div className="skills-box">
            <img src={redux}></img>
            <p>Redux</p>
          </div>
          <div className="skills-box">
            <img src={sass}></img>
            <p>SASS</p>
          </div>
          <div className="skills-box">
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
            <button>Code</button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div>
          <div className="project">
            <img src={weatherapp}></img>
            <p>Weather App</p>
            <div className="buttons">
            <button>Code</button>
            <button><a target="_blank" href="https://esther2504.github.io/react-weather-app/">Demo</a></button>
            </div>
          </div>
          <div className="project">
            <img src={memory}></img>
            <p>Memory</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div>
          <div className="project">
            <img src={theehuisje}></img>
            <p>Theehuisje</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
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
            <img src={memory}></img>
            <p>Quotes Generator</p>
            <div className="buttons">
            <button>Code</button> 
            <button><a target="_blank" href="https://esther2504.github.io/react-webshop/">Demo</a></button>     
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Contact</h1>
      </div>
      </div>
    </>
  );
}

export default App;