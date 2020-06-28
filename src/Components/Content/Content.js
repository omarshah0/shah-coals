import React from "react";
import mummy from "../../Assets/mummy.png";

import "./Content.css";

function Content(porps) {
  return (
    <div className="content" onClick={porps.closemenu}>
      <div className="mummy-wrapper">
        <img src={mummy} className="mummy" alt="mummy"></img>
        <div className="yellow-box-wrapper">
          <svg width="150" height="500">
            <rect
              width="150"
              height="500"
              className="yellow-box"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Content;
