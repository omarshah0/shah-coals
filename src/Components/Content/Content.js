import React from "react";
import mummy from "../../Assets/mummy.png";

import "./Content.css";

function Content(porps) {
  return (
    <div className="container" onClick={porps.closemenu}>
      <div className="left">
        <div className="design_left"></div>
        <div className="rectangle"></div>
      </div>
      <div className="right">
        <div className="design_right"></div>
        <div className="content">
          <h1 className="shah">SHAH</h1>
          <h2 className="coals">Coals</h2>
          <p className="para">
            We aim to deliver{" "}
            <span className="text-underline">
              the best quality of coal we mine.
            </span>
          </p>
        </div>
        <div className="contact-info">
          <div className="Office">
            <h2>Office</h2>
            <h3>
              House 89/90, Bodla Colony <br></br>Dera Ghazi Khan
            </h3>
          </div>
          <div className="get-in-touch">
            <h2>Get In Touch</h2>
            <h3>T. +92 335 123 0333</h3>
            <h3>E. info@shahcoals.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
