import React, { useState, useEffect } from "react";
import List from '../List/List';
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/actions";

export default function SearchBar({onSearch}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const types = useSelector(state => state.types);

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
      <List options={types}/>
    </form>
  );
}