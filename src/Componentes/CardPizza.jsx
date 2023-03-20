import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MiContexto from '../Contexto/MiContexto.jsx'

const CardPizza = ({ pizza }) => {
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle/${pizza.id}`)
  }

  const { agregarPizza } = useContext(MiContexto);

  const ingredientes = pizza.ingredients.map((ing) => ing.charAt(0).toUpperCase() + ing.slice(1))

    return (
    <div>
      <Card border="info" className='mx-2 my-4' style={{ width: '18rem'}}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title><strong> {((pizza.name).charAt(0).toUpperCase())+ ((pizza.name).slice(1))}</strong></Card.Title>
          <hr></hr>
          <Card.Text>
          <strong>Ingredientes</strong>
          </Card.Text>
          <ul className="ingredientes">
            {
              ingredientes.map((ing) => <li key={ing}>🍕 {ing}</li>)
            }
          </ul>
          <h4>
            $ {(pizza.price).toLocaleString({style: "currency",
                                                currency: "CPL"
          })}.-
          </h4>
         
          <hr></hr>
          <Button variant="primary" onClick={() => verDetalle()}>Ver Detalle 👀</Button>
          <Button variant="danger" onClick={() => agregarPizza(pizza)}>Añadir al carrito 🛒</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardPizza