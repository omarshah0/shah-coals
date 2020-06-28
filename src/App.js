import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  function closeMenuOnly() {
    setMenuToggle(false);
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
      <Footer />
    </div>
  );
}

export default App;
