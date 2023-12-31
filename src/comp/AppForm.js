import {collection, doc, getDoc, addDoc, updateDoc} from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import firebase, {db} from  './firebase';

const AppForm = (props) => {

  const camposRegistro ={nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);
  

  const validarForm = () => {
    if(objeto.nombre ===""|| /^\s+$/.test(objeto.nombre)){
      alert("Escriba nombres...");
      return false; 
    }
    return true;
  };

  const handleSubmit = async (e) =>{
    try{
      e.preventDefault();
      if (props.idActual === ""){
        if(validarForm()){
          addDoc(collection(db, 'persona'), objeto);
          console.log ('Se guardo...');
        }else{
          console.log('No se guardo...');
        }
      }else{
          await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
          console.log("Se actualizo ...");
          props.setIdActual('');
        }
        setObjeto(camposRegistro);
    } catch (error){
      console.log("Error en CREAR o UPDATE",error);
    }
  }
  const handleStatusChange =(e) => {
    const{name,value} =e.target;
    setObjeto({...objeto, [name]:value});
    console.log(objeto);
  }
  useEffect(() =>{
    if (props.idActual ===""){
        setObjeto({...camposRegistro});
    }else{
        obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);
  const obtenerDatosPorId= async (xId) =>{
    const objPorId = doc(db, "persona", xId);
    const docPorId = await getDoc(objPorId);
    if (docPorId.exists()){
      setObjeto (docPorId.data());
    }else{
      console.log("No hay doc...");
    }
  }

  return (
    <div style={{background:"red", padding:"10px", textAlign:"center"}}>
    <form onSubmit={handleSubmit}>
    <h1>AppFormrmr</h1>
    <input type="text" name="nombre" placeholder="Nombres..." onChange={handleStatusChange} value={objeto.nombre}/> <br/>
    <input type="text" name="edad" placeholder="Edad..." onChange={handleStatusChange} value={objeto.edad}/> <br/>
    <input type="text" name="genero" placeholder="Genero..." onChange={handleStatusChange} value={objeto.genero}/> <br/>
    <select>
      <option value="">Seleccione su genero ¿¿¿binario???</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
    </select>
    <button>{props.idActual === "" ? "Guardar" : "Actualizar"}</button>
    </form>

    </div>
  )
}

export default AppForm
