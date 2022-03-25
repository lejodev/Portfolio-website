import React from "react";
import "./_project.scss";
import "../../../styles/buttons/_my-button.scss";

const Project = (props) => {
  return (
    <div className="project">
      <a
        href={props.projectLink}
        target="_blank"
        className="image-link-container"
      >
        <img
          src={props.image}
          className="image"
          alt="Project image"
          title="Title here"
        ></img>
      </a>
      <section className="project-details-menu">
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.projectDescription}</p>
        </div>
        <div className="project-menu">
          {props.liveProject ? (
            <button className="button">
              <a className="link" href={props.liveProject}>
                Live project
              </a>
            </button>
          ) : null}
          <button className="button">
            <a className="link" href={props.projectLink}>
              Github repo
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Project;
