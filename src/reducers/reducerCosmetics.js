import { ADD_CART, SET_CATEGORIES, SET_PRODUCT, SET_PRODUCTS } from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_PRODUCT:
      return { ...state, product: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
