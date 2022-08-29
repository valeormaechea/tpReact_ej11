import React from "react";
import { Card, Button } from "react-bootstrap";

const Noticia = (props) => {
  return (
    <div className="col-12 col-md-3 my-1"><Card>
      <Card.Body>
        <Card.Title>{props.noticia.name}</Card.Title>
        <Card.Text>{props.noticia.description}</Card.Text>
        <Button variant="info" href={props.noticia.url}>
          Ver noticia completa
        </Button>
      </Card.Body>
    </Card></div>
    
  );
};

export default Noticia;
