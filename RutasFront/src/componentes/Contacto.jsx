import React from 'react'
import  { useState, useEffect } from "react";
import { Container } from 'react-bootstrap'

const url = 'http://localhost:3000/api/champion';

export const Contacto = () => {

  const [datos, setDatos] = useState([]);

  
  const getProducto = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener datos del servidor");
      }
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);




  return (
    <>
       <div className='container-fluid justify-content-center p-5'>
       <div className="row ">
        <h1 className='text-center'>Champion</h1>
       </div>

       <div className='container col-lg-8'>
       <table class="table table-striped">
       <thead>
    <tr>
    
      <th scope="col">Equipo</th>
      <th scope="col">Logo</th>
  
    </tr>
  </thead>
  <tbody>

    {datos.map((x)=>(
      <tr key={x.id}>
     
      <td>{x.equipo}</td>
      <td><img className='rounded float'  width="100" src={`data:image/png;base64,${x.imagen}`} alt=""/></td>
   
    </tr>
    ))}
    
  </tbody>
</table>
       </div>



       </div>
      

    </>
  )
}
