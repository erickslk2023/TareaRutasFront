import React from 'react'
import { useState, useEffect } from "react";
const url = 'http://localhost:3000/api/entrenadores';

export const QuienesSomos = () => {

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
    <div className='container p-5'>
    <h1 className='text-center'>Entrenadores</h1>
    </div>
      


      <div className='row d-flex justify-content-center '>
        <div className='row col-lg-6 col-sm-12'>
        {datos.map((x) => (
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`data:image/png;base64,${x.foto}`} class="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h5 className="card-title">{x.nombre}</h5>
                  <p className="card-text ">{x.datos}</p>
                  <p className="card-text"><small className="text-muted">{x.equipo}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
       

      </div>

    </>
  )
}
