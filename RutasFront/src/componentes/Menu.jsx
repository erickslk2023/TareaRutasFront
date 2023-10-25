import { Link } from "react-router-dom";
import { Navbar, Nav, Row, NavLink } from 'react-bootstrap';

export const Menu = () => {
    return (
        <>
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div className="container-fluid">
    <NavLink className="navbar-brand" as={Link} to="/inicio">Inicio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon me-2"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink aria-current="page" as={Link} to="/producto">Producto</NavLink>
        <NavLink aria-current="page" as={Link} to="/contacto">Equipos</NavLink>
        <NavLink aria-current="page" as={Link} to="/quienesSomos">Quienes Somos</NavLink>
        
      </div>
    </div>
  </div>
</nav>
       
            


         
    

  
      
       

            
        </>
    )
}
