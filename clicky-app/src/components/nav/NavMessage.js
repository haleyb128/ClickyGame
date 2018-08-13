import React from "react";

const NavMessage = props => (
  <div className={`nav-message${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default NavMessage;