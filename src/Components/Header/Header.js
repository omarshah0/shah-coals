import React from "react";

import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header-mobile">
        <div className="mobile-menu-btn" onClick={props.openDrawer}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
          <div className="brand-logo">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/ios-application-placeholder.png" alt="brand-logo"/>
          </div>
          <div className="navbar">
            <nav>
              <ul className="nav-list">
                <li className="nav-item">About</li>
                <li className="nav-item">Sponsor</li>
                <li className="nav-item">Magzine</li>
                <li className="nav-item">Contact</li>
              </ul>
            </nav>
          </div>  
    </header>
  );
}

export default Header;
