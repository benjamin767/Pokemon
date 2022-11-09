import React, { useState, useEffect } from "react";
import List from '../List/List';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemonsByTypes, getPokemonsBySelection, getPokemonsBySkill, orderBy } from "../../Redux/actions";

export default function SearchBar({onSearch}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const types = useSelector(state => state.types);
  const pokemons = useSelector(state => state.allPokemons);
  const createdOrApi = ["created", "existing"];
  const defenseOrAttack = ["max attack", "min attack" , "max defense", "min defense"];
  const orders = ["upward", "falling"];
  let [pkemon, setPokemon] = useState("");

  const handlerType = (event)=>{
    let type = event.target.value;
    dispatch(getPokemonsByTypes(type, pokemons));
  }
  const handlerSelectBy = (event)=>{
    let selection = event.target.value;
    dispatch(getPokemonsBySelection(selection, pokemons));
  }

  const handlerSkill = (event)=>{
    let skill = event.target.value;
    dispatch(getPokemonsBySkill(skill, pokemons));
  }

  const handlerOrder = (event)=>{
    let order = event.target.value;
    dispatch(orderBy(order, pokemons));
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch();
    }}>

      <input
        type="text"
        placeholder=""
        // value={}
        // onChange={}
      />
      <input type="submit" value="Search" /> 
      <label>by types:</label> <List options={types} handler={handlerType}/>
      <label>select them by:</label> <List options={createdOrApi} handler={handlerSelectBy}/>
      <label>by skill:</label> <List options={defenseOrAttack} handler={handlerSkill}/>
      <label>order by:</label> <List options={orders} handler={handlerOrder}/>
    </form>
  );
}