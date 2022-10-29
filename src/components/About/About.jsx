import React from "react";
import "./About.css";
import ProfilePic from "../../image/Bong.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image mx-5">
            <img src={ProfilePic} alt="fullface" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h4>About Me</h4>
              <span className="line"></span>
            </div>
            <p className="py-3">
            Norman Leonor just recently finished the Web Development Bootcamp to become a Full-stack web developer. is a tech-savvy, passionate about digital technology and has a strong aspiration to become a Full-Stack Web
            Developer so he can contribute the acquired knowledge to a tech company he plan to get employed. He has learned languages like C#, PHP, JavaScript and  framework technology like Laravel, Bootstrap, React JS, Wordpress through self study
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
