import React from "react";
import "./styles.scss";

function Addtable({ addTable }) {
  return (
    <>
      <button onClick={addTable} className="addtable">+ New Table</button>
    </>
  );
}

export default Addtable;
