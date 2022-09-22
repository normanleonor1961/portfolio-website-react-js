import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import TechStack from "./components/TechStack/TechStack";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from "./components/Sidebar/NavbarMobileView";

const App = () => {
  return (
    <>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <Projects />
      <WorkExperience />
      <TechStack />
      <Education />
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
