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
          <h1 className="who-i-am-title">Who I am?</h1>
          <div className="who-i-am-text">
            <p className="paragraph">
              Hi, I am Alejandro Rincón Vera. Full stack web developer. I like
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
