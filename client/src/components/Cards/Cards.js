
import Card from '../Card/Card';
import { getPokemons } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

function Cards() {
  let dispatch = useDispatch();
  const pokemons = useSelector(state => state.allPokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div >
      {pokemons && pokemons.map((pokemon, i) => <Card
                                                  key={i}
                                                  name={pokemon.name}
                                                  url={pokemon.url}
                                                />)}
    </div>
  );
}

export default Cards;