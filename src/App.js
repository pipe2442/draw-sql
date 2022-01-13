import './assets/styles/app.scss'
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Drawer from "./components/Drawer";
import { useState } from 'react'

function App() {

  const [tables, setTables] = useState([])
  const handleTables = () => {
    const table = 'table'
    setTables([...tables, table])
  }

  return (
    <div className="app">
      <Nav />
      <div className='app__tools'>
        <Sidebar tables={tables} addTable={handleTables} />
        <Drawer />
      </div>
    </div>
  );
}

export default App;
