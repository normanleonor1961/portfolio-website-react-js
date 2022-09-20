import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

const Project = () => {
  const data = [
    {
      name: "PHP Stack",
      description:
        "This project is developed in PHP Stack intended for employer to see a live demo of the project.",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Custom CSS",
        },
      ],
    },
    {
      name: "PHP Blog",
      description:
        "This project is intended to showcase a project developed using the PHP Stack for employer to see a live demo of the project.",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Custom CSS",
        },
      ],
    },
    {
      name: "CMS Wordpress",
      description:
        " This project is intended to showcase a project developed in Wordpress using custom theme for employer to see a live demo of the project.",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "WordPress",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Custom CSS",
        },
      ],
    },
    {
      name: "Laravel",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad asperiores quisquam corrupti consequuntur! Sint quos provident officia in sunt perferendis officiis laborum nobis minus, similique at, delectus explicabo quod?",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "Laravel",
        },
        {
          techname: "Framework",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
    {
      name: "React JS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad asperiores quisquam corrupti consequuntur! Sint quos provident officia in sunt perferendis officiis laborum nobis minus, similique at, delectus explicabo quod?",
      projectlink: "https://mywebsiteportfolio.vercel.app/",
      techused: [
        {
          techname: "ReactJS",
        },
        {
          techname: "Postgresql",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Custom CSS",
        },
      ],
    },
    {
      name: "PHP Ecommerce",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad asperiores quisquam corrupti consequuntur! Sint quos provident officia in sunt perferendis officiis laborum nobis minus, similique at, delectus explicabo quod?",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Custom CSS",
        },
      ],
    },
    {
      name: "WordPress Woocommerce",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad asperiores quisquam corrupti consequuntur! Sint quos provident officia in sunt perferendis officiis laborum nobis minus, similique at, delectus explicabo quod?",
      projectlink: "www.leonorman.com",
      techused: [
        {
          techname: "WordPress",
        },
        {
          techname: "Woocommerce",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Bootstrap",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="section-title py-5">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
