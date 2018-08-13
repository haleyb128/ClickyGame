import React from "react";
import NavMessage from "./NavMessage";
import "./navbar.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li>
      <NavMessage score={props.score} topScore={props.topScore} />
      </li>
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;