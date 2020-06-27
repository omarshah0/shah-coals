import React, { useState } from "react";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";

function App() {

  return (
    <div className="App">
      <Header/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
