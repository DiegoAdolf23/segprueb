import {collection, doc, getDoc, addDoc, updateDoc} from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import firebase, {db} from  './firebase';

const AppForm = () => {

  return (
    <div style={{background:"red", padding:"10px", textAlign:"center"}}>
    <h1>AppFormrmr</h1>
    <p>Nombre</p>
    <p>Edad</p>
    <p>Genero</p>
    <button type="button"name="Guardar">Guardar</button>

    </div>
  )
}

export default AppForm
