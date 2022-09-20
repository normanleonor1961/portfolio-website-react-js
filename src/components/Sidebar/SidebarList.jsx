import React from "react";
import "./SidebarList.css";
import profilepic from "../../image/Bong.jpg";
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
              <FcHome size={25} />
              Home
            </li>
            <li className="nav-item">
              <FcBusinessman size={25} />
              About
            </li>
            <li className="nav-item">
              <FcManager size={25} />
              Work Experience
            </li>
            <li className="nav-item">
              <FcEngineering size={25} />
              Tech Stack
            </li>
            <li className="nav-item">
              <FcLibrary size={25} />
              Education
            </li>
            <li className="nav-item">
              <FcFlowChart size={25} />
              Projects
            </li>
            <li className="nav-item">
              <FcCollaboration size={25} />
              Testimonials
            </li>
            <li className="nav-item">
              <FcContacts size={25} />
              Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-icons-only">
          {" "}
          <ul>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcBusinessman size={25} />
            </li>
            <li className="nav-item">
              <FcManager size={25} />
            </li>
            <li className="nav-item">
              <FcEngineering size={25} />
            </li>
            <li className="nav-item">
              <FcLibrary size={25} />
            </li>
            <li className="nav-item">
              <FcFlowChart size={25} />
            </li>
            <li className="nav-item">
              <FcCollaboration size={25} />
            </li>
            <li className="nav-item">
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
