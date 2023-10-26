import React from 'react'
import  { useState, useEffect } from "react";
import Slider from "react-slick";


const url = 'http://localhost:3000/api/estadios';

export const Inicio = () => {


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
<div className='container-fluid-flex'>



<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/estadaio1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/estadio2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/estadio3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

<div className='container text-center p-5'>
  <h1>Estadios</h1>
</div>

<div className='container mb-5'>
<div class="row row-cols-1 row-cols-md-2 g-4">
 {datos.map((x)=>(
 <div class="col">
 <div class="card" key={x.id}>
   <img src={`data:image/png;base64,${x.foto}`} class="card-img-top" alt="..."/>
   <div class="card-body">
     <h5 class="card-title">Estadio {x.nombre}</h5>
     <p class="card-text">Capaciada {x.aforo}</p>
   </div>
 </div>
</div>
 ))}
 


</div>
</div>



    </>
  )
}
