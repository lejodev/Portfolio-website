import React from "react";
import "./_footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <p className="author"> 2021 Alejandro Rincon Vera</p>
      <div className="icons-container">
        <a href="https://github.com/lejodev" target="_blank">
          <AiFillGithub className="icon icon-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-rincon-vera-4810b615a/"
          target="_blank"
        >
          <AiFillLinkedin className="icon icon-linkedin" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
