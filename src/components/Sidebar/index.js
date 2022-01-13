import React from 'react'
import './styles.scss'
import Addtable from './Addtable'

function Sidebar({ tables, addTable }) {
    return (
        <div className='sidebar'>
          <div className='sidebar__title'>
            <h4 className='title__text'>Tables</h4>
            <Addtable  addTable={addTable}/>
          </div>
          <div>
            {
              tables.map(t => <p>{t}</p>)
            }
          </div>
        </div>
    )
}

export default Sidebar
