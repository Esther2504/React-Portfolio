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

  return (
    <div className="header" id="header">
      <div className={`intro ${theme}`}>
        <h1>
          Hallo, ik ben <h1 className={`name ${theme}`}>Esther</h1>
        </h1>
        <h2 className="typing">Front End Developer</h2>
        <button style={{cursor: "pointer"}} onClick={handleTheme}>
          <img src={icon}></img>
        </button>
      </div>
    </div>
  );
}
