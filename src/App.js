import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
//import BarraRutasPublic from './ruteo/BarraRutasPublic'
import BarraProtected from './ruteo/BarraRutasProtected'
import BarraPublic from './ruteo/BarraRutasPublic'

const App = () => {
  return (
    <div style={{background: "violet"}}>

      <h1>App.js</h1>
      <Router>
        <BarraProtected/>:<BarraPublic/> 
      </Router>
    </div>
  )
}

export default App
