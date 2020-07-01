import React from "react";

import "./Test.css";

function Test() {
  return (
    <React.Fragment>
    <div className="parent">
      <div className="test1">
        <div className="test1_child1"></div>
        <div className="test1_child2"></div>  
      </div>
    </div>
    <div className="child">HELLO</div>
    </React.Fragment>
  );
}

export default Test;
