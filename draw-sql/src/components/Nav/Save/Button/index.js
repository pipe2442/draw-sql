import React from "react";
import "./styles.scss";
import circle from "../../../../assets/images/circle-outline.svg";
import arrow from "../../../../assets/images/down-arrow.svg";

function Button() {
  return (
    <div className="button">
      <button className="button__save">
        <img className="button__icon" src={circle} alt="circlebutton" />
        <div>Save</div>
      </button>
      <button className="button__arrow">
        <img className="button__icon" src={arrow} alt="down arrow" />
      </button>
    </div>
  );
}

export default Button;
