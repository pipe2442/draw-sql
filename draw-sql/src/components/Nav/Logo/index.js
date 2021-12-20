import React from "react";
import "./styles.scss";
import logo from "../../../assets/images/logo.png";
import logotext from "../../../assets/images/logotext.png";
import share from "../../../assets/images/share.png";

function Logo() {
  return (
    <div className="logo">
      <div className="logo__elements">
        <img className="logo__image" src={logo} alt="sql" />
        <img className="logo__text" src={logotext} alt="sqltext" />
      </div>
      <p className="logo__file">File</p>
      <div className="logo__share">
        <p>Share</p>
        <img className="share__image" src={share} alt="share" />
      </div>
    </div>
  );
}

export default Logo;
