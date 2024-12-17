import { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducerCosmetics";

export const Context = createContext(null);

const initialState = {
  products: [],
  product: [],
  cart: [],
  categories: [],
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
