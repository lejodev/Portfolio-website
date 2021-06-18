import React from "react";
import "./_home.scss";
import "../../styles/buttons/_my-button.scss";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="button">
        <div className="text">See my work</div>
        <div className="icon">
          <BsArrowRight className="iconn"  size={40} />
        </div>
      </div>
    </div>
  );
};

export default Home;
