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
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessman size={25} />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcManager size={25} />
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcEngineering size={25} />
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcLibrary size={25} />
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFlowChart size={25} />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} />
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          {" "}
          {/* <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcBusinessman size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcManager size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcEngineering size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcLibrary size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFlowChart size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcCollaboration size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
              </Link>
            </li>
          </ul> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
