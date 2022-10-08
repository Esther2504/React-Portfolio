import React from "react";

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

export default function Modal({ data, closeModal, theme }) {
  return (
    <div className="modal-background">
   
      <div className={`modal project ${theme}`}>
        
        <a target="_blank" href={`${data.demolink}`}>
          <img src={images[data.img]}></img>
        </a>
        <button className={`close ${theme}`} onClick={() => closeModal(false)}>
        X
      </button>
        <p>{data.name}</p>
        <p className="description">{data.description}</p>
        <div className="buttons">
          <button className="project-button">
            <a target="_blank" href={`${data.codelink}`}>
              Code
            </a>
          </button>
          <button className="project-button">
            <a target="_blank" href={`${data.demolink}`}>
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
