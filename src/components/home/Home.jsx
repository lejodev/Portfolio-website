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
        Hi everyone. My name is Alejandro Rincon Vera. I'm a Frontend web
        developer. I'm passionate about building new stuff through software
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
