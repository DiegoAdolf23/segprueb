
//import './App.css';
import C01componente from './comp/C01componente';
import C02contador from './comp/C02contador';
import AppForm from './comp/AppForm.js'
import { useEffect, useState } from 'react';

function App() {
  const [idActual, setIdActual]= useState("");
  const [docsBD, setDocsBD]= useState([]);
  const [orden, setOrden]= useState(0);
  const i=1;

  const fnRead = async() => {
  }

  useEffect(()=>{ 
  }, [idActual])

  const fnDelete =async (xId) =>{
  }
  return (
    <div style={{width:"350px", background:"gray",padding:"10px"}}>
      <h1> SiteCopy (App.js)</h1>
      <AppForm{...{idActual, setIdActual, fnRead}}/>
      {
        docsBD.map( (p) => 0
        )
      }

    </div>
  );
}

export default App;
