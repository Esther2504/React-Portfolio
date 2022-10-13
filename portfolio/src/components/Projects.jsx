import React, { useState } from "react";
import Modal from "../components/Modal";
import { data } from "../projectdata.js";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./../images", false, /\.(png|jpe?g|svg)$/)
);

export default function Projects({ theme }) {
  const [isOpen, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  window.onclick = () => {
    setOpen(false);
  };

  return (
    <div id="projects" className="container">
      <h1>PROJECTEN</h1>
      <div className={`projects ${theme}`}>
        {isOpen ? (
          <Modal data={modalData} closeModal={setOpen} theme={theme} />
        ) : null}
        {data.map((project) => {
          return (
            <button
              className={`project ${theme} hidden`}
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
  );
}
