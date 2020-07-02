import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";
import Coal from "./Components/Coal/Coal";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  function closeMenuOnly() {
    setMenuToggle(false);
    console.log("CLICKEEEED");
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
      <Coal coalName="BK-6" moisture="10" ash="3.14" sulfur="64" oxygen="30"/>
      <Coal coalName="BK-2" moisture="30" ash="12.14" sulfur="34" oxygen="70"/>
      <Coal coalName="BK-4" moisture="20" ash="34" sulfur="87" oxygen="40"/>
      <Footer />
    </div>
  );
}

export default App;
