import React from "react";
import owl from "../images/owl.svg";
import sun from "../images/sun.svg";

export default function Header({ theme, handleTheme }) {
  let icon = sun;

  if (theme === "dark") {
    let icon = sun;
  } else {
    icon = owl;
  }

  const toggleButton = () => {
    // document.querySelector(".toggle-circle").id="animation"
  }

  if (theme === "dark") {
    toggleButton()
  } 



  return (
    <div className="header" id="header">
      <div className={`intro ${theme}`}>
        <h1>
          Hallo, ik ben <h1 className={`name ${theme}`}>Esther</h1>
        </h1>
        <h2 className="typing">Front End Developer</h2>
        {/* <button style={{cursor: "pointer"}} onClick={handleTheme}>
          <img src={sun}></img>
        </button>
        <button style={{cursor: "pointer"}} onClick={handleTheme}>
          <img src={owl}></img>
        </button> */}
        <button style={{width: "6rem", cursor: "pointer"}} onClick={handleTheme}>
          <div className={`toggle-circle ${theme}`} id={theme == "light" ? 'animationleft' : 'animationright'}></div>
          <img src={sun} />
          <img src={owl} />
          </button>
      </div>
    </div>
  );
}
