import React from 'react';
import { Link } from "react-router-dom";

function Card({ pokemon: {name, image, id, Types} }) {

  return (
    <Link to={'/home/'+id}>
      <section>
        <h3>{name}</h3>
        <img 
          src={image || "https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-png-red-glossy-png-25.png"} 
          alt="pokemon img"/>
        {Types.map(type => <span> {type.name}</span>)}
      </section>
    </Link>
  );
}

export default Card;