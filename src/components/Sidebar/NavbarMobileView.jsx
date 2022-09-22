import React from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileView = () => {
  return (
    <>
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
