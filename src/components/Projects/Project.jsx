import React from "react";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "PHP Stack",
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
      ],
    },
    {
      name: "PHP Blog",
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
      ],
    },
    {
      name: "CMS Wordpress",
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
      ],
    },
    {
      name: "Laravel",
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
      ],
    },
    {
      name: "React JS",
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
      ],
    },
    {
      name: "WordPress Woocommerce",
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
