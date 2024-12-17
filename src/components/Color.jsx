import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProductCar, filterProduct } from "../slices/carrito";

export const CarritoDeCompras = () => {
  const { productos, carrito } = useSelector((state) => state.carro);
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();

  const handleAddProduct = (producto) => {
    dispatch(addProduct(producto));
  };
  const changeInput = (e) => {
    const { value } = e.target;
    setValueInput(value);
  };

  return (
    <>
      <div>Productos</div>
      <div>
        <p style={{ backgroundColor: "green" }}>
          Filtrar productos por estado, solo escribe si esta en: pendiente o
          completada.
        </p>
        <label>Estado</label>
        <input
          type="text"
          placeholder="Escribe el estado de tu produ.."
          onChange={changeInput}
        />
        <button onClick={() => dispatch(filterProduct(valueInput))}>
          Filtrar
        </button>
      </div>
      <ul>
        {productos.map((producto, i) => (
          <li key={i}>
            {`Productos : ${producto.nombre}`}
            <button onClick={() => handleAddProduct(producto)}>
              Agregar carrito
            </button>
          </li>
        ))}
      </ul>
      <div>Carrito</div>
      <ul>
        {carrito.map((producto, i) => (
          <div>
            <li key={i}>
              {`Productos en el carrito  :${producto.nombre}`}
              <button onClick={() => dispatch(deleteProductCar(producto.id))}>
                Eliminar
              </button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
