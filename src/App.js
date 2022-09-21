import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Education from "./components/Education/Education";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Testimonial />
      <Contact />
      <ScrollToTop
        smooth={true}
        top={1000}
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </>
  );
};

export default App;
