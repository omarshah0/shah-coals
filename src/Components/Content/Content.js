import React from "react";

import SocialIcon from "../SocialIcons/SocialIcon";

import "./Content.css";

const Content = React.memo(function Content(props) {
  return (
    <div className="container" onClick={props.closemenu}>
      <SocialIcon />
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
          <div className="office">
            <h2>Office</h2>
            <h3 className="address">
              Mohsin Town, Pull Dat <br></br>Dera Ghazi Khan
            </h3>
          </div>
          <div className="get-in-touch">
            <h2>Get In Touch</h2>
            <a href="tel: +923336483355" className="follow-up">
              +92 333 6483355
            </a>
            <a href="tel: +923216483355" className="follow-up">
              +92 321 6483355
            </a>
            <a href="mailto: shahcoals@gmail.com" className="follow-up">
              shahcoals@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Content;
