import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./norman_cv.pdf";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <h1>Hi, I'm a</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full-Stack Web Developer",
                "React Developer",
                "CMS Wordpress Developer",
              ],

              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className="button-for-action py-5">
          <div className="hire-me-button">Hire me</div>
          <div className="get-resume-button">
            <a href={MyCv} download="Norman_cv.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
