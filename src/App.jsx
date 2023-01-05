import React from "react";

import "./App.css";

//Components
import Caja from "./components/caja";

const App = () => {
  const saludo = "hola soy Angel";
  const nombres = [
    {
      name: "Angel Briceño",
      color: "rojo",
      texto: "texto de angel",
      img: "1",
    },
    {
      name: "Anyel Pacheco",
      color: "amarillo",
      texto: "texto de mare",
      img: "1",
    },
    {
      name: "Maria Pacheco",
      color: "amarillo",
      texto: "texto de mare",
      img: "1",
    },
    {
      name: "Diana Briceño",
      color: "rojo",
      texto: "texto de Diana",
      img: "1",
    },
    {
      name: "Anyer Andara",
      color: "rojo",
      texto: "texto de Anyer",
      img: "1",
    },
  ];

  const listnombres = nombres.map((nombre) => (
    <Caja
      key={nombre.name}
      ismar="hola"
      name={nombre.name}
      color={nombre.color}
      img={nombre.img}
    >
      {nombre.texto}
    </Caja>
  ));
  return (
    <div>
      <header>
        <div className="menu">
          <img src="" alt="imagen" />
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre mi</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div>
        <h1>Angeluchi.dev</h1>
        <div className="caja">{listnombres}</div>
      </div>
    </div>
  );
};

export default App;
