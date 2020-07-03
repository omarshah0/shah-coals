import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";
import Coal from "./Components/Coal/Coal";
import SingleModal from "./Components/SingleCoalInfoModal/SingleModal";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [coalInfoVisibility, setCoalInfoVisibility] = useState(false);
  const [coalInfoData, setCoalInfoData] = useState("");

  const coalData = [
    {
      id: 1,
      name: "BK-6",
      size: "6-Footy",
      moisture: 3.14,
      ash: 56,
      sulfur: 34,
      oxygen: 83,
    },
    {
      id: 2,
      name: "BK-4",
      size: "4-Footy",
      moisture: 11,
      ash: 17,
      sulfur: 12,
      oxygen: 57,
    },
    {
      id: 3,
      name: "BK-2",
      size: "2-Footy",
      moisture: 22,
      ash: 67,
      sulfur: 43,
      oxygen: 78,
    },
  ];

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }
  function closeMenuOnly() {
    setMenuToggle(false);
  }

  function toggleCoalInfo(e) {
    const data = coalData
      .filter((item) => item.id === e)
      .map(({ id, name, size, moisture, ash, sulfur, oxygen }) => ({
        id,
        name,
        size,
        moisture,
        ash,
        sulfur,
        oxygen,
      }));
    console.log(data);
    setCoalInfoData(data);
    setCoalInfoVisibility(!coalInfoVisibility);
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
      <Coal coaldata={coalData} coalInfoModal={toggleCoalInfo} />
      {coalInfoVisibility ? (
        <SingleModal closecoalmodal={toggleCoalInfo} coalinfodata={coalInfoData}/>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
