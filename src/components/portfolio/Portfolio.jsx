import React from "react";
import "./_portfolio.scss";
import Project from "./project/Project";
import p1 from "../../images/project1/p1.PNG";
import gifos1 from "../../images/gifos/gifos1.PNG";
import clock from "../../images/clock.png";
import FIFA21API from "../../images/FIFA21API.png";
import TELCEL from "../../images/TELCEL.png";

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
        <Project
          image={FIFA21API}
          title="Fetch fifa 21 API"
          projectDescription="Fetch all the FIFA 21 data using asynchronous calls. This site lets search players and teams and navigate through all the required data. All the required data is obtained on demand and not all at once"
          projectLink="https://github.com/lejodev/tect-test"
          liveProject="https://fifa21api-fullstack.herokuapp.com/"
        />
        <Project
          image={TELCEL}
          title="Telcel Landing Page"
          projectDescription="Static web taking as example the telcel web page. This project was done with ReactJs, Bootstrap, React Icons, SAAS. Dockerized and deployed with continuous integration and continuous delivery."
          projectLink="https://github.com/lejodev/tect-test"
          liveProject="https://lejodev.github.io/telcel-landing-page/"
        />
      </section>
    </div>
  );
};

export default Portfolio;
