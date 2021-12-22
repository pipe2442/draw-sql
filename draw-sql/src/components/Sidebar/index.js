import React from 'react'
import './styles.scss'
import AddTable from './AddTable'

function Sidebar({ tables, addTable }) {
    return (
        <div className='sidebar'>
          <div className='sidebar__title'>
            <h4 className='title__text'>Tables</h4>
            <AddTable  addTable={addTable}/>
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
