import { useContext, useState } from "react";
import icon_notification from "../../assets/icon_car.png";
import "./cartWidget.css";
import { Context } from "../../Provider/Provider";
import { ModalProduct } from "../ModalProduct/ModalProduct";

export const CartWidget = () => {
  const { state } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div
        className="cartWidget"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <img
          className="icon_cartWidget"
          width="50px"
          src={icon_notification}
          position="absolute"
        />
        <p>{state.cart.length}</p>
      </div>
      <ModalProduct openModal={openModal} closeModal={closeModal} />
    </>
  );
};
