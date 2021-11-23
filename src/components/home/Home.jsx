import React from "react";
import "./_home.scss";
import "../../styles/buttons/_my-button.scss";
import { BsArrowRight } from "react-icons/bs";
import codingImage from "../../images/coding.jpeg";

const Home = () => {
  return (
    <div
      className="home"
      id="home"
      style={{ backgroundImage: `url(${codingImage})` }}
    >
      <div className="text">
        <span className="text-row">
          Hi everyone. My name is Alejandro Rincon Vera.
        </span>
        <span className="text-row">
          I'm a full stack web developer passionate about
        </span>
        <span className="text-row">building new stuff through software</span>
      </div>
      <div className="button">
        <a href="#about" className="text link">
          ABOUT ME
        </a>
        <div className="icon">
          <BsArrowRight className="iconn" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Home;
