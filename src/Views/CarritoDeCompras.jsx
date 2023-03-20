import React, { useContext } from 'react'
import MiContexto from '../Contexto/MiContexto'

import Button from 'react-bootstrap/Button';
import { totalCompra } from '../Funciones/TotalCompra';
import { NavLink } from 'react-router-dom';

const CarritoDeCompras = () => {
  const { pizzaSeleccionada, totalSeleccionadas, setPizzaSeleccionada, setTotalSeleccionadas } = useContext(MiContexto)

  const monedaCarrito = (totalSeleccionadas).toLocaleString({
    style: "currency",
    currency: "CPL"
  });

  const quitarPizza = (id) => {
    const indexMenos = pizzaSeleccionada.findIndex((ps) => ps.id === id);
    if (indexMenos > -1) {
      if (pizzaSeleccionada[indexMenos].cantidad > 0) {
        pizzaSeleccionada[indexMenos].cantidad -= 1;
        if (pizzaSeleccionada[indexMenos].cantidad === 0){
          pizzaSeleccionada.splice(indexMenos,1);
        }
        setPizzaSeleccionada([...pizzaSeleccionada])
      }
     }
    
    setTotalSeleccionadas(totalCompra(pizzaSeleccionada));
   
  }


  const sumarPizza = (id) => {
    const indexMenos = pizzaSeleccionada.findIndex((ps) => ps.id === id);
    if (indexMenos > -1) {
      pizzaSeleccionada[indexMenos].cantidad += 1;
      setPizzaSeleccionada([...pizzaSeleccionada])
    }
    setTotalSeleccionadas(totalCompra(pizzaSeleccionada));
  }


  return (
    <div className='p-5'>
      <h1 className="text-center p-4"> Detalle del pedido </h1>
      <div className='bg-light m-autp p-3 border 41border-success'>
        <div className='d-flex justify-content-between w-100 px-3'>
          <p>IMAGEN</p>
          <p>PRODUCTO</p>
          <p>PRECIO UNITARIO</p>
          <p>SUBTOTAL</p>
          <p>CANTIDAD</p>
        </div>

        {
          pizzaSeleccionada.map((ps, i) => {
            return (

              <div key={i} className='d-flex justify-content-between w-100 p-2'>
                <img src={ps.imagen} alt={ps.nombre} width="50" />
                <p><NavLink to={`/detalle/${ps.id}`}>{((ps.nombre).charAt(0).toUpperCase()+ (ps.nombre).slice(1))}</NavLink></p>
                <p>$ {ps.precio}.-</p>
                <p> $ {(Number(ps.precio) * ps.cantidad).toLocaleString({
                  style: "currency",
                  currency: "CPL"
                })}.-</p>
                <div className="d-flex justify-content-around">
                  <Button variant="danger" onClick={() => quitarPizza(ps.id)}>-</Button><p className='px-2'>{ps.cantidad}</p><Button variant="primary" onClick={() => sumarPizza(ps.id)}>+</Button>
                </div>


              </div>
            )
          })
        }
        <h2 className='border border-success'>Total Pedido: <strong>$ {monedaCarrito}.-</strong></h2>
      </div>
    </div>

  )

}
export default CarritoDeCompras