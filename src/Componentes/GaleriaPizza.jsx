import React from 'react'
import { useContext } from 'react';
import MiContexto from '../Contexto/MiContexto.jsx'
import { Row, Col } from "react-bootstrap"
import CardPizza from "../Componentes/CardPizza.jsx";

const GaleriaPizza = () => {
  const { pizzas } = useContext(MiContexto);
  return (
    <div>
      <Row>
        {
          pizzas.map((pizza) => {
            return <Col key={pizza.id}><CardPizza  pizza={pizza}></CardPizza></Col>
          })
        }
      </Row>
    </div>
  )
}

export default GaleriaPizza