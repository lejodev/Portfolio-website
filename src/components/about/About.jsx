import React from "react";
import "./_about.scss";
import { FaHtml5 } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import { SiMongodb, SiMysql } from "react-icons/si";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">ABOUT ME</h2>
      <div className="about-content">
        <div className="who-i-am">
          <div
            className="who-i-am-photo"
            style={{ backgroundImage: `url(${me})` }}
          ></div>
          <h1 className="who-i-am-title">Who i am</h1>
          <div className="who-i-am-text">
            Hi, I am Alejandro Rincón Vera. I am a full stack software
            developer. I like frontend and backend. Always learning and
            improving my code quality to ensure deliver readable, maintainable
            and scalable code.
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <FaHtml5 className="logo" />
            <h5 className="skill-title">HTML</h5>
          </div>
          <div className="skill">
            <IoLogoCss3 className="logo" />
            <h5 className="skill-title">CSS</h5>
          </div>
          <div className="skill">
            <IoLogoJavascript className="logo" />
            <h5 className="skill-title">JAVASCRIPT</h5>
          </div>
          <div className="skill">
            <SiMongodb className="logo" />
            <h5 className="skill-title">MONGODB</h5>
          </div>
          <div className="skill">
            <IoLogoNodejs className="logo" />
            <h5 className="skill-title">NODE JS</h5>
          </div>
          <div className="skill">
            <IoLogoReact className="logo" />
            <h5 className="skill-title">REACT JS</h5>
          </div>
          <div className="skill">
            <SiMysql className="logo" />
            <h5 className="skill-title">MYSQL</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
