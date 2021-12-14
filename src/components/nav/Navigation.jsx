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
          Alejandro Rincon Vera
        </a>
      </div>
      <div className="menu">
        <BurgerMenu onDisplayMenu={() => setDisplayMenu(!displayMenu)} />
        {displayMenu ? (
          <ul className="list">
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
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
