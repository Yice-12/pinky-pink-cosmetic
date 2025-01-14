import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Provider/Provider";
import { ADD_CART, SET_PRODUCT } from "../../reducers/types";
import vertical from "../../assets/vertical.svg";
import horizontal from "../../assets/horizontal.svg";
import "./productDetail.css";
import { fecthProductById } from "../../utils/fetchApi";

export const ProductDetail = () => {
  const { idProduct } = useParams();
  const [loading, setloading] = useState(false);
  const { state, dispatch } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  console.log("state", state.cart);

  const cosmeticProduct = async () => {
    setloading(true);
    const response = await fecthProductById(idProduct);
    dispatch({ type: SET_PRODUCT, payload: response });
    setloading(false);
  };

  useEffect(() => {
    cosmeticProduct();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="product_detail">
      <img className="img" src={state.product.image_link} />
      <div className="information_product">
        <h1>{state.product.name}</h1>
        <p>{state.product.description}</p>
        <p>Categoria: {state.product.category}</p>
        <p>$: {state.product.price}</p>
        <div className="container-quantity">
          <div className="quantity">
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="button"
            >
              <img src={horizontal} />
            </button>
            <span className="quantity-number">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="button"
            >
              <img src={horizontal} />
              <img className="vertical" src={vertical} />
            </button>
          </div>
          <button
            onClick={() =>
              dispatch({
                type: ADD_CART,
                payload: { ...state.product, quantity: quantity },
              })
            }
          >
            Agregar a la bolsa
          </button>
        </div>
      </div>
    </div>
  );
};
