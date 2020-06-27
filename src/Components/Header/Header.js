import React, { useEffect } from "react";

import SideDrawer from "../Mobile Drawer/SideDrawer";

import "./Header.css";

function Header(props) {
  // var [sideMenu, setSideMenu] = React.useState(false);

  return (
    <div className="header">
      {/* {sideMenu ? <SideDrawer /> : null} */}
      {/* <div className="mobile-menu-btn" onClick={() => setSideMenu(true)}> */}
      <div className="mobile-menu-btn" onClick={props.clicked}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    </div>
  );
}

export default Header;
