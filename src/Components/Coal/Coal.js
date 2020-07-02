import React from "react";

import m416 from "../../Assets/m416.png";

import "./Coal.css";

function Coal(props) {
  return (
    <div className="coal-container">
      <img src={m416} className="m416" alt="m416"></img>
      <div className="chart">
        <h2>{props.coalName}</h2>
        <li>
          <h5>Moisture</h5>
          <span className="bar">
            <span style={{ width: props.moisture + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Ash</h5>
          <span className="bar">
            <span style={{ width: props.ash + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Sulfur</h5>
          <span className="bar">
            <span style={{ width: props.sulfur + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Oxygen</h5>
          <span className="bar">
            <span style={{ width: props.oxygen + "%" }}></span>
          </span>
        </li>
      </div>
    </div>
  );
}

export default Coal;
