import React, { useState, useEffect } from "react";
import List from '../List/List';
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getPokemonsByTypes } from "../../Redux/actions";

export default function SearchBar({onSearch}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const types = useSelector(state => state.types);
  const createdOrApi = ["created", "existing"];

  const handlerType = (event)=>{
      let type = event.target.value;
      dispatch(getPokemonsByTypes(type));
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
      <label>select by:</label> <List options={createdOrApi}/>
    </form>
  );
}