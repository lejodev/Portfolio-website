import React, { useState } from "react";
import "./_navigation.scss";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigation = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <a href="#home" className="link">
          Alejandro Rincon
        </a>
      </div>
      <input type="checkbox" name="menuTriggerer" id="menuTriggerer" />
      <label htmlFor="menuTriggerer" className="burgerMenu">
        <div className="stick stick1"></div>
        <div className="stick stick2"></div>
        <div className="stick stick3"></div>
      </label>
      <ul className="list-menu">
        <li>
          <a className="link" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="link" href="#portfolio">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
