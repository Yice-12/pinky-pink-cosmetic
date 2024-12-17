import { useContext } from "react";
import icon_notification from "../../assets/icon_car.png";
import "./cartWidget.css";
import { Context } from "../../Provider/Provider";

export const CartWidget = () => {
  const { state } = useContext(Context);

  return (
    <div className="cartWidget">
      <img
        className="icon_cartWidget"
        width="50px"
        src={icon_notification}
        position="absolute"
      />
      <p>{state.cart.length}</p>
    </div>
  );
};
