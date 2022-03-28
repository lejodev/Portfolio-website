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

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about-content">
        <div className="who-i-am">
          <h1 className="who-i-am-title">Who I am?</h1>
          <div className="who-i-am-text">
            <p className="paragraph">
              Hi, I am Alejandro Rincón Vera. Frontend web developer. I like
              to create new things, bring life to ideas and solutions through
              software, I'm currently working with the MERN stack.
            </p>
            <p className="paragraph">
              I'm pretty sure that through software we can build the world of
              the future. So i will keep posting here part of the software stuff
              i make.
            </p>
            <p className="paragraph">
              Of course, I'm open to job offers, feedback and talking about
              projects. If so, please feel free to let me know via
              <a href="#contact"> contact</a> section. Have a great day and keep
              going on.
            </p>
          </div>
        </div>
        <div className="skills">
          <div className="skills-title">Skills</div>
          <div className="skills-container">
            <div className="skill">
              <FaHtml5 className="logo" />
              <span className="skill-title">HTML</span>
            </div>
            <div className="skill">
              <IoLogoCss3 className="logo" />
              <span className="skill-title">CSS</span>
            </div>
            <div className="skill">
              <IoLogoJavascript className="logo" />
              <span className="skill-title">JAVASCRIPT</span>
            </div>
            <div className="skill">
              <IoLogoReact className="logo" />
              <span className="skill-title">REACT JS</span>
            </div>
            <div className="skill">
              <IoLogoNodejs className="logo" />
              <span className="skill-title">NODE JS</span>
            </div>
            <div className="skill">
              <SiMongodb className="logo" />
              <span className="skill-title">MONGODB</span>
            </div>
            <div className="skill">
              <SiMysql className="logo" />
              <span className="skill-title">MYSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
