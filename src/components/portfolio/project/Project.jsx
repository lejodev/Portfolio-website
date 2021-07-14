import React from "react";
import { Button } from "react-bootstrap";
import "./_project.scss";
import "../../../styles/buttons/_my-button.scss";
import { BsArrowRight } from "react-icons/bs";
// import p1 from "../../../images/project1/p1.PNG"

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-card">
        <div
          variant="top"
          style={{ backgroundImage: `url(${props.image})` }}
          className="card-image"
        />
        <div className="card-body">
          <div>{props.title}</div>
          <div className="text">{props.projectDescription}</div>
        </div>
        <a href={props.projectLink} target="_blank" className="button">
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Project;
