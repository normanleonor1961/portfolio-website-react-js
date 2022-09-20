import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, description, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  return (
    <div className="project-list" onClick={handleShowandCollapse}>
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={30} /> : <FcExpand size={30} />}</p>
      </div>

      <div className="row">
        {techused &&
          techused.map((tech, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p>{tech.techname}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo-button">
        <a href={projectlink} target="_">
          Live Demo
        </a>
      </div>

      {show ? (
        <p>{description}</p>
      ) : (
        <p>
          {description.substring(0, 50)} ...
          <span style={{ fontWeight: "bold" }}>read more</span>
        </p>
      )}
    </div>
  );
};

export default ProjectList;
