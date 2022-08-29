import React from "react";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  return (
    <article className="row mt-3 mx-0 p-3 align-items-center rounded bg-light w-100">
      {props.noticias.map((item, posicion) => (
        <Noticia key={posicion} noticia={item}></Noticia>
      ))}
    </article>
  );
};

export default ListaNoticias;
