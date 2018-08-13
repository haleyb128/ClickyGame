import React from "react";
import "./cards.css";

const ClickCard = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    // style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item card ${props.shake ? " shake" : ""}`}
  >
  <div className="img-container">
  <img
  src={props.image}
  />
  </div>
  </div>
);

export default ClickCard;