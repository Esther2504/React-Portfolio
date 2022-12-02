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
        <p>{data.name}</p>
        <p className="description">{data.description}</p>
        <div className="buttons">
          <a target="_blank" href={`${data.codelink}`}>
            <button className="project-button">Code</button>
          </a>
          <a target="_blank" href={`${data.demolink}`}>
            <button className="project-button">Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
