import React from "react";
import './styles.scss'
import Button from "./Button";
import jake from "../../../assets/images/jake.jpg";

function Save() {
  return (
    <div className="save">
      <span className="save__text">All changes saved</span>
      <Button />
      <img className="save__profile" src={jake} alt="profile pic" />
    </div>
  );
}

export default Save;
