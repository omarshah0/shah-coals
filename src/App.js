import React, { useState } from "react";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";

function App() {

  const [menuToggle, setMenuToggle] = React.useState(false);

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }

  return (
    <div className="App" onClick={toggleMenu}>
      {menuToggle ? <SideDrawer clicked={toggleMenu}/> : null }
      <Header clicked={toggleMenu}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
