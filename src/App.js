import React from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <section id="principal">
      <Titulo></Titulo>
      <Formulario></Formulario>
    </section>
  );
};

export default App;
