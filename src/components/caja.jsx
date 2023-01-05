import React from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Caja = (props) => {
  const [contador, setContador] = useState(0);
  const color = ["white", "blue"];
  const src = "../images/";

  useEffect(() => {
    gsap.to(document.querySelectorAll(".Titulo"), {
      opacity: 1,
      duration: 5,
    });
  }, [contador]);

  return (
    <div className="item">
      <div>
        <p>You clicked {contador} times</p>
        <button onClick={() => setContador(contador + 1)}>Click me</button>
      </div>
      <h4 className="Titulo">{props.name}</h4>
      <img src={`${src}${props.img}.gif`} alt="aqui una imagen" />
      <h5>color: {props.color}</h5>
      <h5>{props.children}</h5>
      <h2>{props.ismar}</h2>
    </div>
  );
};

export default Caja;
