import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/Project";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperience />
    </>
  );
};

export default App;
