import "./modalproduct.css";
import close from "../../assets/close.svg";
import { useContext } from "react";
import { Context } from "../../Provider/Provider";
import { DELETED_PRODUCT } from "../../reducers/types";
import { Link } from "react-router-dom";

export const ModalProduct = ({ openModal, closeModal }) => {
  const { state, dispatch } = useContext(Context);

  return (
    openModal && (
      <div className="modal">
        <div className="content-modal">
          <div className="header" onClick={closeModal}>
            <img src={close} className="icon-close" />
          </div>
          <h1 className="title">PRODUCTOS DEL CARRITO</h1>
          {state.cart.length === 0 ? (
            <div className="cart-empty">
              <p>Oppppps... el carrito esta vacio :c</p>
              <Link onClick={closeModal}> volver al inicio</Link>
            </div>
          ) : (
            <>
              <div className="products">
                {state.cart.map((product) => (
                  <div className="product-cart" key={product.id}>
                    <img src={product.image_link} width={80} height={80} />
                    <div>
                      <h2 className="product-name">{product.name}</h2>
                      <h1>Precio: ${product.price}</h1>
                      <h2>Cantidad: {product.quantity}</h2>
                      <h3>Total: {product.price * product.quantity} </h3>
                    </div>
                    <button
                      onClick={() =>
                        dispatch({ type: DELETED_PRODUCT, payload: product.id })
                      }
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <Link to="/checkout">Continuar con mi compra</Link>
              </div>

              <div className="total">
                <h2>
                  Total del carrito: $
                  {state.cart.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )}
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};
