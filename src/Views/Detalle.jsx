import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import MiContexto from '../Contexto/MiContexto';

const Detalle = () => {
  const { id } = useParams();

  const { pizzas, agregarPizza } = useContext(MiContexto);


  const iPizza = pizzas.findIndex((iP) => iP.id === id);
  const pizzaDetalle = pizzas[iPizza];

  const moneda = (pizzaDetalle.price).toLocaleString({
    style: "currency",
    currency: "CPL"
  });

  const nombre = (pizzaDetalle.name).charAt(0).toUpperCase() + (pizzaDetalle.name).slice(1);
  const ingredientes = pizzaDetalle.ingredients.map((ing) => ing.charAt(0).toUpperCase() + ing.slice(1))

  return (
    <div >
       <Card  border="info" className="flex-row" style={{ width: 'auto', marginTop: "1em" }}>
      
        <Card.Img variant="top" src={pizzaDetalle.img} />
  
    <Card.Body>
          <Card.Title><strong>{nombre}</strong></Card.Title>
          <Card.Text>
            <hr></hr>
            <strong>Ingredientes</strong>
          </Card.Text>
          <ul className="ingredientes">
            {
              ingredientes.map((ing) => <li key={ing}>🍕 {ing}</li>)
            }
          </ul>

          <Card.Text>
          {pizzaDetalle.desc} 
          </Card.Text>
                   
            <h2>$ {moneda}</h2>
          
          <hr></hr>
          <div className="d-flex justify-content-end">
          <Button variant="danger" onClick={() => agregarPizza(pizzaDetalle)}>Añadir al carrito 🛒</Button>
          </div>
         
        </Card.Body>
       
        
      </Card>
    </div>
  )
}

export default Detalle