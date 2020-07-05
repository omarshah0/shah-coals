import React from "react";

import m416 from "../../Assets/m416.png";

import "./Coal.css";

function Coal(props) {
  const coalDataDivs = props.coaldata.map((item, key) => (
    <div
      className="coal-container"
      onClick={props.coalInfoModal.bind(this, item.id)}
      key={key}
    >
      <img src={m416} className="m416" alt="m416"></img>
      <div className="chart">
        <h2>
          {item.name} <span className="coal-size">({item.size})</span>
        </h2>
        <li>
          <h5>Moisture - {item.moisture}%</h5>
          <span className="bar">
            <span style={{ width: item.moisture + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Volatile Matter - {item.volatileMatter}%</h5>
          <span className="bar">
            <span style={{ width: item.volatileMatter + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Fixed Carbon - {item.fixedCarbon}%</h5>
          <span className="bar">
            <span style={{ width: item.fixedCarbon + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Sulfur - {item.sulfur}%</h5>
          <span className="bar">
            <span style={{ width: item.sulfur + "%" }}></span>
          </span>
        </li>
        <li>
          <h5>Ash - {item.ash}%</h5>
          <span className="bar">
            <span style={{ width: item.ash + "%" }}></span>
          </span>
        </li>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      {coalDataDivs}
      {console.log("COAL INFO RENDERED")}
    </React.Fragment>
  );
}

export default Coal;
