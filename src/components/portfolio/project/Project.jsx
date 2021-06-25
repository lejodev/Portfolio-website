import React from "react";
import { Card, Button } from "react-bootstrap";
import "./_project.scss";
// import p1 from "../../../images/project1/p1.PNG"

const Project = (props) => {
  return <div className="project">
      <Card style={{ width: "18rem" }} className="project-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.projectDescription}
          </Card.Text>
          <Button variant="primary">Visit site</Button>
        </Card.Body>
      </Card>
  </div>;
};

export default Project;
