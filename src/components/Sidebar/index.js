import React, { useContext } from 'react'
import './styles.scss'
import Addtable from './Addtable'
import Table from './Table';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <h4 className="title__text">Tables</h4>
        <Addtable />
      </div>
      <div>
        {/* {tables.map((t) => (
          <p>{t}</p>
        ))} */}
        <Table />
      </div>
    </div>
  );
}

export default Sidebar
