import React from "react";
import "./_navigation.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#home" className="link">
          Alejandro Rincon Vera
        </a>
      </div>
      <div className="menu">
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
      </div>
    </nav>
  );
};

export default Navigation;
