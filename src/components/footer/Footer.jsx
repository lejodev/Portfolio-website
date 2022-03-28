import React from "react";
import "./_footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <p className="author"> 2021 Alejandro Rincon Vera</p>
      <div className="icons-container">
        <a
          href="https://github.com/lejodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="icon icon-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-rincon-vera-4810b615a/"
          target="_blank"
        >
          <AiFillLinkedin
            className="icon icon-linkedin"
            rel="noopener noreferrer"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
