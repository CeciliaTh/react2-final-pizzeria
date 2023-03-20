import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Barra from "./Componentes/Barra.jsx";
import Home from "./Views/Home.jsx"
import CarritoDeCompras from "./Views/CarritoDeCompras.jsx";
import Detalle from "./Views/Detalle.jsx";
import MiContexto from "./Contexto/MiContexto.jsx";
import "./Estilos/Estilos.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaSeleccionada, setPizzaSeleccionada] = useState([]);
  const [totalSeleccionadas, setTotalSeleccionadas] = useState(0);

  const endpoint = "/pizzas.json";

  async function getPizzas() {
    const res = await fetch(endpoint);
    const data = await res.json();
    setPizzas(data);
  }

  useEffect(() => {
    getPizzas();
  }, [])

  const agregarPizza = (pizza) => {
    const indexNP = pizzaSeleccionada.findIndex((ps) => ps.id === pizza.id);


    if (indexNP > -1) {
      pizzaSeleccionada[indexNP].cantidad += 1;
      setPizzaSeleccionada([...pizzaSeleccionada])
    }
    else {
        const nuevaPizzaSeleccionada = {id:pizza.id, 
                                        nombre:pizza.name, 
                                        precio: pizza.price, 
                                        imagen: pizza.img,
                                        cantidad:1};
        setPizzaSeleccionada([...pizzaSeleccionada, nuevaPizzaSeleccionada]);
    }
    setTotalSeleccionadas(totalSeleccionadas + pizza.price)
  }


  return (

    <div>
      <MiContexto.Provider value={ {pizzas, pizzaSeleccionada, setPizzaSeleccionada, totalSeleccionadas, setTotalSeleccionadas, agregarPizza} }>
        <BrowserRouter>
          <Barra></Barra>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/carrito" element={<CarritoDeCompras />}></Route>
            <Route path="/detalle/:id" element={<Detalle />}></Route>
          </Routes>
        </BrowserRouter>
      </MiContexto.Provider>
    </div>

  )
}

export default App;
