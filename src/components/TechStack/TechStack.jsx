import React from "react";
import { useState } from "react";
import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Full-Stack Developer",
    },
    {
      name: "Front-end Developer",
    },
    {
      name: "Back-end Developer",
    },
    {
      name: "React Developer",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "HTML",
    },
    {
      name: "Reactjs",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "PHP",
    },
    {
      name: "MySQL",
    },
    {
      name: "Postgresql",
    },
  ];

  const colors = [
    "#0101DF",
    "#04B431",
    "#08088A",
    "#FE2E2E",
    "#DF0174",
    "#0B3861",
    "#00FFFF",
    "#2EFE64",
    "#FA58AC",
    "#045FB4",
    "#610B5E",
    "#FF0000",
    "#CC2EFA",
    "#D68910",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section">
      <div className="section-title py-5">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;
