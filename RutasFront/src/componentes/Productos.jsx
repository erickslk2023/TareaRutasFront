import React from 'react'
import  { useState, useEffect } from "react";
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap';


const url = 'http://localhost:3000/api/galeria';

export const Producto = () => {

  

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

   <div className='container m-5'>
    <div className='row text-align-center'>
    <h1>Productos</h1>
    </div>
   
    </div> 





<div className="container">
  <div className='row'>
 
  {datos.map((x) => (
    <Card key={x.id} style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={`data:image/png;base64,${x.foto}`} />
      <Card.Body>
        <Card.Title>{x.equipo}</Card.Title>
        <Card.Text>{x.talla}</Card.Text>
   
      </Card.Body>
    </Card>
  ))}
</div>
  </div>

 




    </>
  )
}
