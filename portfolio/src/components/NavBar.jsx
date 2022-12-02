import React from "react";

export default function NavBar({ theme }) {
  return (
    <nav className={`${theme}`}>
      <ul>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#skills">Skills & Tools</a>
        </li>
        <li>
          <a href="#projects">Projecten</a>
        </li>
      </ul>
    </nav>
  );
}
