import React from "react";
import "./_navigation.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="logo">Alejandro Rincon Vera</div>
      <div className="menu">
        <Router>
          <ul className="list">
            <li >
              <Link className="link">About</Link>
            </li>
            <li>
              <Link className="link">Portfolio</Link>
            </li>
            <li>
              <Link className="link">Contact</Link>
            </li>
          </ul>
        </Router>
      </div>
    </nav>
  );
};

export default Navigation;
