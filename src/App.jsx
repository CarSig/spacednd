import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Homepage from './components/Homepage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Homepage />
      </div>
    </DndProvider>
  )
}

export default App
