import "./modalProduct.css";
import close from "../../assets/close.svg";
import { useContext } from "react";
import { Context } from "../../Provider/Provider";

export const ModalProduct = ({ openModal, closeModal }) => {
  const { state } = useContext(Context);
  console.log("state", state);

  return (
    openModal && (
      <div className="modal">
        <div className="content-modal">
          <div className="header" onClick={closeModal}>
            <img src={close} className="icon-close" />
          </div>

          <div>
            {state.cart.map((product) => (
              <div className="product-cart">
                <h1>{product.name}</h1>
                <img
                  key={product.id}
                  src={product.image_link}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};
