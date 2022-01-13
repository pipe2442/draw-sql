import React from "react";
import "./styles.scss";
import logo from "../../../assets/images/logo.png";
import share from "../../../assets/images/share.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="sql" />
      <h4 className="logo__text">draw<span className="sql__text">SQL</span></h4>
      <p className="logo__file">File</p>
      <div className="logo__share">
        <p>Share</p>
        <img className="share__image" src={share} alt="share" />
      </div>
    </div>
  );
}

export default Logo;
