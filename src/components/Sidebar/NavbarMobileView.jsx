import React from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileView = () => {
  return (
    <>
      <nav className="navbar  bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
        </div>
      </nav>
      <div className="container-fluid mobile-view-navbar sticky-top">
        <div className="navbar-header">
          <p>
            <GiHamburgerMenu size={25} />
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarMobileView;
