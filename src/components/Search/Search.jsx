import React from "react";
import "./search.css";

export const Search = () => {
  return (
    <div>
      <input
        className=" search"
        type="text"
        name="search"
        placeholder="Escribe aqui tu producto de interes"
      />
    </div>
  );
};
