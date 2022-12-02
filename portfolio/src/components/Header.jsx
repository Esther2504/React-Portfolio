import React from "react";
import owl from "../images/owl.svg";
import sun from "../images/sun.svg";

export default function Header({ theme, handleTheme }) {
  return (
    <div className="header" id="header">
      <div className={`intro ${theme}`}>
        <h1>
          Hallo, ik ben <h1 className={`name ${theme}`}>Esther</h1>
        </h1>
        <h2 className="typing">Front End Developer</h2>
        <button
          style={{ width: "6rem", cursor: "pointer" }}
          onClick={handleTheme}
        >
          <div
            className={`toggle-circle ${theme}`}
            id={theme == "light" ? "animationleft" : "animationright"}
          ></div>
          <img src={sun} />
          <img src={owl} />
        </button>
      </div>
    </div>
  );
}
