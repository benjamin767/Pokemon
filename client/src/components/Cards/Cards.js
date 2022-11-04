
import Card from '../Card/Card';
import { getPokemons } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Spinner from '../Spinner/Spinner';

function Cards() {
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  const isLoading = useSelector(state => state.loading);
  const pokemons = useSelector(state => state.pokemons);

  return (
    <div >

      {isLoading ? <Spinner/> : pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}/>)}

    </div>
  );
}

export default Cards;