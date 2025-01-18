import React, { useContext, useState } from "react";
import { Context } from "../../Provider/Provider";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../db/db";
import { RESET_CART } from "../../reducers/types";
import "./checkout.css";

export const Checkout = () => {
  const { state, dispatch } = useContext(Context);
  const [orderId, setOrderId] = useState(null);
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        ...dataForm,
      },
      products: state.cart,
      date: Timestamp.fromDate(new Date()),
    };
    await uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      setOrderId(response.id);
      setDataForm({ fullname: "", phone: "", email: "" });
      dispatch({ type: RESET_CART });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form">
      {orderId ? (
        <h1>
          Orden subida correctamente!!! Guarde su número de seguimiento:{" "}
          {orderId}
        </h1>
      ) : (
        <>
          <h3>Formulario de envio.</h3>
          <form onSubmit={onSubmitForm} className="form">
            <div>
              <label>Nombre completo</label>
              <input
                name="fullname"
                type="text"
                placeholder="Escribe tu nombre..."
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Teléfono</label>
              <input
                name="phone"
                type="number"
                placeholder="Escribe tu teléfono..."
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Escribe tu email..."
                onChange={handleChangeInput}
              />
            </div>
            <button className="button-submit" type="submit">
              Enviar orden
            </button>
          </form>
        </>
      )}
    </div>
  );
};
