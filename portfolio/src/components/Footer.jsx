import React from "react";
import linkedin from "../images/linkedin-logo.svg";
import mail from "../images/mail-logo.svg";
import github from "../images/github-logo.svg";

export default function Footer({ theme }) {
  return (
    <footer className={theme}>
      <div className="logos">
        <a href="https://github.com/Esther2504" target="_blank">
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/esther-schuitemaker-226b35154"
          target="_blank"
        >
          <img src={linkedin} />
        </a>
        <button
          onClick={() =>
            (window.location = "mailto:esther.e.schuitemaker@gmail.com")
          }
        >
          <img src={mail} />
        </button>
      </div>
    </footer>
  );
}
