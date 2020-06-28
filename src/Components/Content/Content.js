import React from "react";
import mummy from "../../Assets/mummy.png";

import "./Content.css";

function Content(porps) {
  return <div className="content" onClick={porps.closemenu}>
    <div className="mummy-wrapper">
      <img src={mummy} className="mummy" alt="mummy"></img>
    </div>
  </div>;
}

export default Content;
