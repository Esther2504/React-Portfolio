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
  require.context("./../images", false, /\.(png|jpe?g|svg|PNG)$/)
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
              <img src={images[project.img]}></img>
              <p>{project.name}</p>
              <div className="buttons">
                <a target="_blank" href={`${project.codelink}`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="demo-btn"
                  >
                    Code
                  </button>
                </a>
                <a target="_blank" href={`${project.demolink}`}>
                  <button
                    className="demo-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Demo
                  </button>
                </a>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
