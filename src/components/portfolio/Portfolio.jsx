import React from "react";
import "./_portfolio.scss";
import Project from "./project/Project";
import p1 from "../../images/project1/p1.PNG";
import gifos1 from "../../images/gifos/gifos1.PNG";
import clock from "../../images/clock.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="projects-title">PROJECTS</div>
      <section className="projects">
        <Project
          image={p1}
          title="Podcast channel"
          projectDescription="Static, responsive vanilla css landing page for a podcast service with a burger menu"
          projectLink="https://github.com/lejodev/Acamica-project1"
        />
        <Project
          image={gifos1}
          title="GIFOS"
          projectDescription="Responsive frontend app that allows user to see, create, set and delete favorite gifs, algo set page with light/dark mode. This page was done using sass and using the gifos API"
          projectLink="https://github.com/lejodev/Acamica-project2-GIFOS"
          liveProject="https://lejodev.github.io/Acamica-project2-GIFOS/index.html"
        />
        <Project
          image={clock}
          title="Clock"
          projectDescription="Frontend simulation of an analog clock"
          projectLink="https://github.com/lejodev/clock"
          liveProject="https://lejodev.github.io/clock/"
        />
      </section>
    </div>
  );
};

export default Portfolio;
