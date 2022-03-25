import React from "react";
import "./_home.scss";
import "../../styles/buttons/_my-button.scss";
import { BsArrowRight } from "react-icons/bs";
import codingImage from "../../images/coding.jpeg";

const Home = () => {
  return (
    <div
      className="home section"
      id="home"
      style={{ backgroundImage: `url(${codingImage})` }}
    >
      <div className="text">Hi I'm Alejandro</div>
      <div className="text">Frontend web developer</div>
      <div className="button">
        <a href="#about" className="link">
          ABOUT ME
        </a>
      </div>
    </div>
  );
};

export default Home;
