import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot } from 'firebase/firestore';
//import './App.css';
import C01componente from './comp/C01componente';
import C02contador from './comp/C02contador';
import firebase, {db} from  './comp/firebase';
import AppForm from './comp/AppForm.js'
import { useEffect, useState } from 'react';

function App() {
  const [idActual, setIdActual]= useState("");
  const [docsBD, setDocsBD]= useState([]);
  const [orden, setOrden]= useState(0);
  const i=1;

  const fnRead = async() => {
    try{
      const xColeccionConQuery = query(collection(db, "persona"));
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD)=>{
        const xDoc =[];
        xDatosBD.forEach((doc)=>{
          xDoc.push({id: doc.id, ...doc.data()});
        });

        setDocsBD(xDoc);
      });
    } catch (error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fnRead(); 
  }, [idActual])

  const fnDelete =async (xId) =>{
    if (window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, "persona", xId));
      alert("Se elimino..."+xId+" con exito");
    }
  }
  return (
    <div style={{width:"350px", background:"gray",padding:"10px"}}>
      <h1> SiteCopy (App.js)</h1>
      <h3>Read/Delete</h3>  
      <AppForm{...{idActual, setIdActual, fnRead}}/>
      {
        docsBD.map( (p) =>
        <p key={p.id}>
          N°.1 {p.nombre}...
          <span onClick={() => fnDelete(p.id)}>x</span>
          ...
          <span onClick={() => setIdActual(p.id)}>A</span>
        </p>
        )
      }

    </div>
  );
}

export default App;
