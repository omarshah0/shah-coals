import React from "react";

import "./SingleModal.css";
import m416 from "../../Assets/m416.png";

function SingleModal(props) {
  return (
    <div className="coal-info">
      <div id="mdiv" onClick={props.closecoalmodal}>
        <div className="mdiv">
          <div className="md"></div>
        </div>
      </div>
      <img src={m416} alt="m416"></img>
      <h1 className="cola">PICTUER OF COAL</h1>
      <h1 className="cola">{props.coalinfodata[0].name}</h1>
      <p className="cola">{props.coalinfodata[0].size}</p>
    </div>
  );
}
export default SingleModal;
// }function SingleModal(props) {
//   return (
//     <div className="backdrop">
//       {console.log("INSIDE SINGLE MODAL")}
//       {console.log(props.coalinfodata)}
//
//     </div>
//   );
// }
