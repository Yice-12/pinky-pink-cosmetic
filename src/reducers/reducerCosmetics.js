import {
  ADD_CART,
  DELETED_PRODUCT,
  SET_CATEGORIES,
  SET_PRODUCT,
  SET_PRODUCTS,
} from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      if (state.cart.some((product) => product.id === action.payload.id)) {
        const newProducts = state.cart.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
        return { ...state, cart: newProducts };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_PRODUCT:
      return { ...state, product: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case DELETED_PRODUCT:
      console.log("action", action);
      const deletedProduct = state.cart.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cart: deletedProduct,
      };

    default:
      return state;
  }
};
