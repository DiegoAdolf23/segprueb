import {collection, doc, getDoc, addDoc, updateDoc} from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import firebase, {db} from  './firebase';

const AppForm = () => {

  const camposRegistro ={nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      if (db){
        addDoc(collection(db,'persona'), objeto)
        console.log("Se guardo con exito");
      }
    } catch (error){
      console.error();
    }
  }
  return (
    <div style={{background:"red", padding:"10px", textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
    <h1>AppFormrmr</h1>
    <input type="text" placeholder="Nombre???"></input>
    <p>Nombre</p>
    <p>Edad</p>
    <p>Genero</p>
    <select>
      <option value="">Seleccione su genero ¿¿¿binario???</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
    </select>
    <button >Guardar/Actualizar</button>
    </form>

    </div>
  )
}

export default AppForm
