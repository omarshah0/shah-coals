import React from "react";

import "./SingleModal.css"
import m416 from "../../Assets/m416.png";

function SingleModal(props) {
  return (
    <div className="backdrop">
      {console.log("INSIDE SINGLE MODAL")}
      {console.log(props.coalinfodata)}
      <div className="coal-info" onClick={props.closecoalmodal}>
        <img
          src={m416}
          style={{ width: "80%", marginTop: "2rem" }}
          alt="m416"
        ></img>
        <h1 className="cola">PICTUER OF COAL</h1>
        <h1 className="cola">{props.coalinfodata[0].name}</h1>
        <p className="cola">{props.coalinfodata[0].size}</p>
      </div>
    </div>
  );
}

export default SingleModal;
