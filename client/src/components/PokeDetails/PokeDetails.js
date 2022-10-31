import React from 'react';

function PokeDetails({pokemon: {name, image, id, Types, hp, attack, defense, speed, height, weight} }) {
  

  return (
    <section>
      <h2>{name}</h2>
      <img src={image} alt="pokemon img"/>
      <div>types: {Types.map(type => <span>{type.name}</span>)}</div>
      <div>
        <p>hp: <span>{hp}</span></p>
        <p>attack: <span>{attack}</span></p>
        <p>defense: <span>{defense}</span></p>
        <p>speed: <span>{speed}</span></p>
        <p>height: <span>{height}</span></p>
        <p>weight: <span>{weight}</span></p>
      </div>
    </section>
  );
}

export default PokeDetails;