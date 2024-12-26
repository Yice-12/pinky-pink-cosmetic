import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Provider/Provider";
import { SET_PRODUCT } from "../../reducers/types";
import "./productDetail.css";

export const ProductDetail = () => {
  const { idProduct } = useParams();
  const [loading, setloading] = useState(false);
  const { state, dispatch } = useContext(Context);

  const cosmeticProduct = async () => {
    try {
      setloading(true);
      const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products/${idProduct}.json`
      );

      if (!response.ok) throw new Error("No hay productos");
      const res = await response.json();
      dispatch({ type: SET_PRODUCT, payload: res });
      setloading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
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
      </div>
    </div>
  );
};
