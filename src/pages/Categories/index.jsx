import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Provider/Provider";
import { SET_CATEGORIES } from "../../reducers/types";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Categories = () => {
  const [loading, setloading] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { idCategory } = useParams();

  const cosmeticProduct = async () => {
    try {
      setloading(true);
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_category=${idCategory}`
      );

      if (!response.ok) throw new Error("No hay productos");
      const res = await response.json();
      dispatch({ type: SET_CATEGORIES, payload: res });
      setloading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    cosmeticProduct();
  }, [idCategory]);

  if (loading) return <div>Cargando...</div>;
  return (
    <div className="product_list">
      {state.categories.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
