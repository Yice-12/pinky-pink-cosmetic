import { useContext } from "react";
import "./productCard.css";
import { Context } from "../../Provider/Provider";
import { ADD_CART } from "../../reducers/types";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div
      className="product_card"
      onClick={() => navigate(`/productDetail/${product.id}`)}
    >
      <img src={product.image_link} />

      <div className="content">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p>{product.price}</p>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: ADD_CART, payload: product });
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
