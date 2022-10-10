import React, { useState } from "react";

export default function SearchBar({onSearch}) {
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
      <input type="submit" value="Buscar" />
    </form>
  );
}