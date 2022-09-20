import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Google",
      position: "Full Stack Developer",
      description: "Perform maintenance work on an existing system",
      year: "2020 - 2021",

      techskills: [
        {
          techname: "Node.JS",
        },
        {
          techname: "Express.JS",
        },
        {
          techname: "React.JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      companyname: "Microsoft",
      position: "Full Stack Developer",
      description: "Develop working knowledge on live systems",
      year: "2020 - 2020",
      techskills: [
        {
          techname: "Node.JS",
        },
        {
          techname: "Express.JS",
        },
        {
          techname: "React.JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      companyname: "Posbang Corporation",
      position: "Full Stack Developer",
      description:
        "Manage work assignments to meet deadlines under an aggressive schedule",
      year: "2018 - 2019",

      techskills: [
        {
          techname: "Node.JS",
        },
        {
          techname: "Express.JS",
        },
        {
          techname: "React.JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      companyname: "Facebook",
      position: "Full Stack Developer",
      description:
        "Build and maintain storng relationships with colleagues, clients and partners",
      year: "2015 - 2018",

      techskills: [
        {
          techname: "Node.JS",
        },
        {
          techname: "Express.JS",
        },
        {
          techname: "React.JS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
  ];

  const colors = [
    "#DF0174",
    "#0B3861",
    "#FA58AC",
    "#045FB4",
    "#610B5E",
    "#00FFFF",
    "#2EFE64",
  ];

  return (
    <div className="container">
      <div className="section-title py-5">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<MdGroupWork />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.companyname}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.position}
            </h5>
            <p>{item.description}</p>
            <p>{item.year}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
