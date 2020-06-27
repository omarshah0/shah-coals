import React from "react";

import "./Header.css";

function Header(props) {
  

  return (
    <div className="header">
      <div className="mobile-menu-btn" onClick={props.openDrawer}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Header;
