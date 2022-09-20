import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const data = [
    {
      sch_name: "Kodego",
      degree: "Web Development Bootcamp",
      major: "Full Stack Web Development",
      year: "2022-2022",
    },
    {
      sch_name: "Asian Development Foundation College",
      degree: "Masters",
      major: "Master in Administration Management",
      year: "1998-1998",
    },
    {
      sch_name: "System Technology Institute",
      degree: "Undergrad Bachelor of Science",
      major: "Computer Science",
      year: "2002-2003",
    },
    {
      sch_name: "Judge Juan Luna High School",
      degree: "Secondary",
      major: "High School",
      year: "1974-1978",
    },
    {
      sch_name: "Esteban Abada Elementary School",
      degree: "Primary",
      major: "Elementary",
      year: "1969-1974",
    },
  ];

  const colors = [
    "#0B3861",
    "#610B5E",
    "#FA58AC",
    "#094e25",
    "#046659",
    "#DF0174",
    "#00FFFF",
    "#c5c906ac",
  ];

  return (
    <div className="container">
      <div className="section-title py-5">
        <h5>Education</h5>
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
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">{item.sch_name}</h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h5>
            <p>{item.major}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
