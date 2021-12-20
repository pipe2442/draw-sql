import React from "react";
import "./styles.scss";
import Logo from "./Logo";
import Diagrams from "./Diagrams";
import Save from "./Save";

function Nav() {
  return (
    <>
      <nav className="nav">
        <Logo />
        <Diagrams />
        <Save />
      </nav>
    </>
  );
}

export default Nav;
