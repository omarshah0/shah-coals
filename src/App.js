import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";
import Coal from "./Components/Coal/Coal";

import m416 from "./Assets/m416.png";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [coalInfo, setCoalInfo] = useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  function closeMenuOnly() {
    setMenuToggle(false);
  }

  function toggleCoalInfo() {
    setCoalInfo(!coalInfo);
  }

  return (
    <div className="App">
      <CSSTransition
        in={menuToggle}
        timeout={150}
        classNames="example"
        unmountOnExit
      >
        <SideDrawer closeDrawer={toggleMenu} />
      </CSSTransition>
      <Header openDrawer={toggleMenu} />
      <Content closemenu={closeMenuOnly} />
      <Coal
        coalInfoModal={toggleCoalInfo}
        coalName="BK-6"
        coalSize="6-Footy"
        moisture="10"
        ash="3.14"
        sulfur="64"
        oxygen="30"
      />
      <Coal
        coalInfoModal={toggleCoalInfo}
        coalName="BK-2"
        coalSize="2-Footy"
        moisture="30"
        ash="12.14"
        sulfur="34"
        oxygen="70"
      />
      <Coal
        coalInfoModal={toggleCoalInfo}
        coalName="BK-4"
        coalSize="4-Footy"
        moisture="20"
        ash="34"
        sulfur="87"
        oxygen="40"
      />
      {coalInfo ? (
        <div className="backdrop">
          <div className="coal-info" onClick={toggleCoalInfo}>
            <img src={m416} style={ {width: "80%" , marginTop: "2rem"}} alt="m416"></img>
            <h1 className="cola">PICTUER OF COAL</h1>
            <h1 className="cola">NAME OF COAL</h1>
            <p className="cola">INFO OF COAL</p>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
