import React from "react";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import router from "../images/router.svg";
import redux from "../images/redux.svg";
import sass from "../images/sass.svg";
import git from "../images/git.svg";

export default function Skills({ theme }) {
  return (
    <div id="skills" className={`container ${theme}`}>
      <h1>SKILLS & TOOLS</h1>
      <div className="skills">
        <div className={`skills-box ${theme} hidden`}>
          <img src={html}></img>
          <p>HTML</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={css}></img>
          <p>CSS</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={javascript}></img>
          <p>JavaScript</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={react}></img>
          <p>React</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={sass}></img>
          <p>SASS</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={git}></img>
          <p>Git</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={router}></img>
          <p>Router</p>
        </div>
        <div className={`skills-box ${theme} hidden`}>
          <img src={redux}></img>
          <p>Redux</p>
        </div>
      </div>
    </div>
  );
}
