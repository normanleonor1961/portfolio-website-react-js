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
      companyname: "Freelancer",
      position: "Web Developer",
      description: "Perform maintenance work on an existing system",
      year: "2020 - 2021",

      techskills: [
        {
          techname: "PHP",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
      ],
    },
    {
      companyname: "BPO Industry",
      position: "Technical Support Representative",
      description: "Call Center Agent",
      year: "2015 - 2019",
      techskills: [
        {
          techname: "Call Center Agent",
        },
        {
          techname: "Outbound call",
        },
        {
          techname: "Cold Calling",
        },
        {
          techname: "Sales",
        },
      ],
    },
    {
      companyname: "Entreprenuer",
      position: "Bakeshop Manager",
      description: "Manage work assignments to the workforce of the Bakeshop",
      year: "2007-20013",

      techskills: [
        {
          techname: "Data Entry",
        },
        {
          techname: "Excel Spreadsheets",
        },
        {
          techname: "Ms Word",
        },
        {
          techname: "Email Managemtn",
        },
      ],
    },
    {
      companyname: "Interworld Internet Cafe",
      position: "Manager",
      description:
        "Build and maintain strong relationships with employees, clients and partners",
      year: "2002 - 2006",

      techskills: [
        {
          techname: "Data Entry",
        },
        {
          techname: "Corel Draw",
        },
        {
          techname: "MsWord, Excel,",
        },
        {
          techname: "PC Repair and Software Installion",
        },
      ],
    },
    {
      companyname: "Local Government of Tacloban",
      position: "Information Technology Officer",
      description:
        "Maintenance of File Server under the Windows NT 4.0 environment",
      year: "1994 - 2002",

      techskills: [
        {
          techname: "File Server Administration",
        },
        {
          techname: "Windows NT 4.0",
        },
        {
          techname: "MsWord, Excel,",
        },
        {
          techname: "PC Troubleshooting and Software Installion",
        },
      ],
    },
  ];

  const colors = [
    "#DF0174",
    "#0B3861",
    "#FA58AC",
    "#04b49d",
    "#610B5E",
    "#00FFFF",
    "#2EFE64",
    "#c5c906ac",
  ];

  return (
    <div className="container workexperience-section">
      <div className="section-title py-5">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor="rgb(255, 99, 71)">
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #0B3861" }}
            date={item.year}
            dateClassName="date-class"
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
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
