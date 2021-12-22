import React from "react";
import "./styles.scss";

function AddTable({ addTable }) {
  return (
    <>
      <button onClick={addTable} className="addtable">+ New Table</button>
    </>
  );
}

export default AddTable;
