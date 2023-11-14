import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import BarraRutasPublic from './ruteo/BarraRutasPublic'
import BarraProtected from './ruteo/BarraRutasProtected';
import BarraPublic from './ruteo/BarraRutasPublic';
import { useAuth } from './ruteo/AuthContext'   ;
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css' ;

const App = () => {
  const {user} =useAuth();
  return (
    <div style={{background: "violet"}}>
      <ToastContainer/>

      <h1>HONORIO DELGADO ESPINOZA</h1>
      <Router>
        {user ? <BarraProtected/>:<BarraPublic/>}
      </Router>
      <h6>Coila Cutipa Diego Adolfo- Turno Noche</h6> 
    </div>
  )
}

export default App
