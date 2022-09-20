import React from "react";
import "./About.css";
import ProfilePic from "../../image/Norman.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
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
              Norman is a person who is a tech-savvy, curious about new digital
              technology and aspires to become a Full-Stack Web Developer in the
              near future. He's perceived his passion in computer programming
              way back in the early 90's when he got accidentally referred by a
              colleague for an employment in one of a local government unit in
              the Visayas Region and given the assignment in maintaining of the
              File Server stationed in the Mayor's office Electronics Data
              Processing Section and manages the overall operations of EDP
              section. Sometimes he will be required to make small modification
              of the code e.g. increasing the Mayor's Permit Taxes. Though with
              insufficient knowledge about programming and networking, he was
              able to accomplished by his diligent research thru text books
              alone the necessary reports for the Executive Office. That's where
              he jumstart his passion in digital technologies He has learned
              some languages like C#, PHP, and Java and other framework
              technology like Wordpress and Laravel through self study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
