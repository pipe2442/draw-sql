import React, { useContext } from 'react';
import './styles.scss'
import { TableContext } from '../../../App';
import { FaPen } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Table() {

  const context = useContext(TableContext)
  const { tables } = context

  console.log(tables)

  return(
    <>
      {
        tables.forEach(table => (
          <div className='table'>
            <div className='table__title'>
              <h2>{table.title}</h2>
              <div>
                <FaPen className='title__icon'/>
                <BsThreeDotsVertical />
              </div>
            </div>
            <ul>
              <div>hey</div>
            </ul>
          </div>
        ))
      }
    </>
  );
}

export default Table;
