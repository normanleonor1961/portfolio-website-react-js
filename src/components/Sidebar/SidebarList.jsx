import React from "react";
import "./SidebarList.css";
import profilepic from "../../image/Norman.jpg";
import {
  FcHome,
  FcManager,
  FcContacts,
  FcFlowChart,
  FcLibrary,
  FcEngineering,
  FcCollaboration,
  FcBusinessman,
} from "react-icons/fc";
import { Link } from "react-scroll";

// import { MdBiotech } from "react-icons/md";
// import { MdCastForEducation } from "react-icons/md";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile pic" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home">
                <FcHome size={25} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about">
                <FcBusinessman size={25} />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="workexperience">
                <FcManager size={25} />
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack">
                <FcEngineering size={25} />
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education">
                <FcLibrary size={25} />
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects">
                <FcFlowChart size={25} />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials">
                <FcCollaboration size={25} />
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact">
                <FcContacts size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          {" "}
          <ul>
            <li className="nav-item">
              <FcHome size={20} />
            </li>
            <li className="nav-item">
              <FcBusinessman size={20} />
            </li>
            <li className="nav-item">
              <FcManager size={20} />
            </li>
            <li className="nav-item">
              <FcEngineering size={20} />
            </li>
            <li className="nav-item">
              <FcLibrary size={20} />
            </li>
            <li className="nav-item">
              <FcFlowChart size={20} />
            </li>
            <li className="nav-item">
              <FcCollaboration size={20} />
            </li>
            <li className="nav-item">
              <FcContacts size={20} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
