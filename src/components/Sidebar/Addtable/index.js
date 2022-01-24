import React, { useContext } from "react";
import "./styles.scss";
import { TableContext } from "../../../App";

function Addtable() {

  const context = useContext(TableContext)
  const { handleTables } = context

  return (
    <>
      <button onClick={handleTables} className="addtable">+ New Table</button>
    </>
  );
}

export default Addtable;
