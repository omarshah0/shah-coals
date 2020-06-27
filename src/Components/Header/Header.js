import React, { useState} from "react";

import SideDrawer from "../Mobile Drawer/SideDrawer";

import "./Header.css";

function Header(props) {

  const [menuToggle, setMenuToggle] = React.useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }

  return (
    <div className="header">
      {menuToggle ? <SideDrawer props clicked={toggleMenu}/> : null }
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Header;
