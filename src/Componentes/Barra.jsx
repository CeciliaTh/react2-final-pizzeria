import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import MiContexto from '../Contexto/MiContexto';


const Barra = () => {

  const {totalSeleccionadas} = useContext(MiContexto)
  
  const monedaCarrito = (totalSeleccionadas).toLocaleString({
    style: "currency",
    currency: "CPL"
  });

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (
    <div>
      <nav className='barra'>
       
          <NavLink className={setActiveClass} to="/">
            🍕Pizzeria Mamma Mia🍕
          </NavLink>
        
          <NavLink className={setActiveClass} to="/carrito">
            🛒Carrito: [$ {monedaCarrito}] 🛒
          </NavLink>
        
      </nav>
    </div>


  );

}



export default Barra