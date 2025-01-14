import { useContext, useState } from "react";
import "./productCard.css";
import { Context } from "../../Provider/Provider";
import { ADD_CART } from "../../reducers/types";
import { useNavigate } from "react-router-dom";
import { ModalProduct } from "../ModalProduct/ModalProduct";

export const ProductCard = ({ product }) => {
  const { dispatch } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <div
        className="product_card"
        onClick={() => navigate(`/productDetail/${product.id}`)}
      >
        <img src={product.image_link} />

        <div className="content">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p>{product.price}</p>
          <div className="container_button_add">
            <button
              className="button_add-product"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: ADD_CART,
                  payload: { ...product, quantity: 1 },
                });
                setOpenModal(true);
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <ModalProduct openModal={openModal} closeModal={closeModal} />
    </>
  );
};
