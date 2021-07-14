import React from "react";
import "./_portfolio.scss";
import Project from "./project/Project";
import p1 from "../../images/project1/p1.PNG";
import gifos1 from "../../images/gifos/gifos1.PNG";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Project
        image={p1}
        title="Project 1"
        projectDescription="Static, responsive vanilla css landing page for a podcast service with a burger menu"
        projectLink="https://github.com/lejodev/delivery-services-web-app"
      />
      <Project
        image={gifos1}
        title="GIFOS"
        projectDescription="Responsive frontend app that allows user to see, create, set and delete favorites gifs, algo set page with light/dark mode. This page was done using sass and using the gifos API"
        projectLink="https://github.com/lejodev/delivery-services-web-app"
      />
      <Project
        title="Services"
        projectDescription="Consequuntur placeat natus sapiente laudantium repudiandae quasi rerum corrupti, nisi, doloremque exercitationem debitis magnam quaerat vero doloribus cum maiores voluptates quidem dolore assumenda cumque. Vero ullam aliquid vel velit."
        projectLink="https://github.com/lejodev/delivery-services-web-app"
      />
    </div>
  );
};

export default Portfolio;
