import React from "react";

import m416 from "../../Assets/m416.png";

import "./Coal.css";

function Coal(props) {
  return (
    <div className="coal-container" onClick={props.coalInfoModal}>
      <img src={m416} className="m416" alt="m416"></img>
      <div className="chart">
        <h2>
          {props.coalName} <span className="coal-size">({props.coalSize})</span>
        </h2>
        <li>
          <h5>Moisture - {props.moisture}%</h5>
          <span className="bar">
            <span style={{ width: props.moisture + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Ash - {props.ash}%</h5>
          <span className="bar">
            <span style={{ width: props.ash + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Sulfur - {props.sulfur}%</h5>
          <span className="bar">
            <span style={{ width: props.sulfur + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Oxygen - {props.oxygen}%</h5>
          <span className="bar">
            <span style={{ width: props.oxygen + "%" }}></span>
          </span>
        </li>
      </div>
    </div>
  );
}

export default Coal;
