import { React, useState } from "react";
import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const apiKey = "d836f93ddd25400faeb91e29d8608b2a";
  const [noticias, setNoticias] = useState([]);

  const consultarAPI = async (categoria) => {
    const respuesta = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=${categoria}&apiKey=${apiKey}`
    );
    const dato = await respuesta.json();
    setNoticias(dato.sources);
  };

  const handleChange = (e) => {
    consultarAPI(e.target.value);
  };

  return (
    <section className="container">
      <article className="d-flex no-wrap justify-content-around p-3 align-items-center bg-light mt-3 rounded w-100">
        <p className="m-0">Buscar por categoria: </p>
        <Form.Group controlId="formSelect" className="">
          <Form.Select onChange={handleChange}>
            <option value="">Elija una opción</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimientos</option>
            <option value="general">General</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>
        </Form.Group>
      </article>

      <ListaNoticias noticias={noticias}></ListaNoticias>
    </section>
  );
};

export default Formulario;
