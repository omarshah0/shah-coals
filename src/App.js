import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/Mobile Drawer/SideDrawer";
import Coal from "./Components/Coal/Coal";
import SingleModal from "./Components/SingleCoalInfoModal/SingleModal";
import Backdrop from "./Components/Backdrop/Backdrop";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [coalInfoVisibility, setCoalInfoVisibility] = useState(false);
  const [coalInfoData, setCoalInfoData] = useState("");

  const coalData = [
    {
      id: 1,
      name: "BK 2",
      size: "2-Footy",
      moisture: 2,
      volatileMatter: 43,
      sulfur: 11,
      fixedCarbon: 37,
      ash: 18,
    },
    {
      id: 2,
      name: "BK-4",
      size: "4-Footy",
      moisture: 2.6,
      volatileMatter: 43,
      sulfur: 7,
      fixedCarbon: 47,
      Ash: 4.5,
    },
    {
      id: 3,
      name: "BK-6",
      size: "6-Footy",
      moisture: 3.5,
      volatileMatter: 42,
      sulfur: 7.5,
      fixedCarbon: 52,
      Ash: 3.5,
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
    setCoalInfoVisibility(true);
  }

  function closeCoalInfo() {
    setCoalInfoVisibility(false);
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
      <CSSTransition
        in={coalInfoVisibility}
        timeout={800}
        className="closeCoal"
        unmountOnExit
      >
        <SingleModal
          closecoalmodal={closeCoalInfo}
          coalinfodata={coalInfoData}
        />
      </CSSTransition>
      <CSSTransition
        in={coalInfoVisibility}
        timeout={800}
        className="closeCoal"
        unmountOnExit
      >
        <Backdrop />
      </CSSTransition>
      <Footer />
    </div>
  );
}

export default App;
