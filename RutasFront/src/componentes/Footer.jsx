import { Link } from "react-router-dom";
import { Navbar, Nav, Row, NavLink } from 'react-bootstrap';

export const Footer = () => {
    return (
        <>
       
       <footer className="footer  mt-autopy-3 bg-dark  ">
      <div className="container p-5">
        
        <span className="text-white" >
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </span>
      </div>
    </footer>
            


         
    

  
      
       

            
        </>
    )
}