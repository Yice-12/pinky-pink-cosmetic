import "./productList.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Provider/Provider";
import { SET_PRODUCTS } from "../../reducers/types";
import { hocFilterProducts } from "../../hoc/hocFilterProducts";
import { fetchProducts } from "../../utils/fetchApi";

const ProductList = ({ products }) => {
  const { dispatch } = useContext(Context);
  const [loading, setloading] = useState(false);

  const cosmeticProducts = async () => {
    setloading(true);
    const response = await fetchProducts();
    dispatch({ type: SET_PRODUCTS, payload: response });
    setloading(false);
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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductListWithHoc = hocFilterProducts(ProductList);
export default ProductListWithHoc;
