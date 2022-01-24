import './assets/styles/app.scss'
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Drawer from "./components/Drawer";
import React, { useState } from 'react'
export const TableContext = React.createContext();

function App() {

  const [tables, setTables] = useState([])
  const handleTables = () => {
    const table = {
      title: 'table__1',
      columns: [
        'column_1',
        'column_2',
        'column_3',
      ]
    };
    setTables([...tables, table]);
  }

  return (
    <TableContext.Provider value={{tables, handleTables}} >
      <div className="app">
        <Nav />
        <div className='app__tools'>
          <Sidebar />
          <Drawer />
        </div>
      </div>
    </TableContext.Provider>
  );
}

export default App;
