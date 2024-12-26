import "./productList.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Provider";
import { SET_PRODUCTS } from "../../reducers/types";
import { hocFilterProducts } from "../../hoc/hocFilterProducts";

const ProductList = ({ products }) => {
  const { dispatch, state } = useContext(Context);
  const [loading, setloading] = useState(false);

  const cosmeticProducts = async () => {
    try {
      setloading(true);
      const response = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );

      if (!response.ok) throw new Error("No hay productos");
      const res = await response.json();
      dispatch({ type: SET_PRODUCTS, payload: res });
      setloading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      cosmeticProducts();
    }
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="product_list">
      {products.map((product) => (
        <>
          <ProductCard key={product.id} product={product} />
        </>
      ))}
    </div>
  );
};

const ProductListWithHoc = hocFilterProducts(ProductList);
export default ProductListWithHoc;
