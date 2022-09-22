import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./norman_cv.pdf";
import "../../App.css";
import { Link } from "react-scroll";

const bkgroundPic = new URL("../../image/bkground.jpg", import.meta.url);

const Home = () => {
  return (
    <div className="container home" id="home">
      <div className="container home-content">
        <div className="bk-picture">
          <h1>I am a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer",
                  "React JS Developer",
                  "Wordpress Developer",
                  "Laravel Developer",
                ],

                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="button-for-action py-5">
            <div className="hire-me-button">
              <Link to="contact">Hire me</Link>
            </div>

            <div className="get-resume-button">
              <a href={MyCv} download="Norman_cv.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
