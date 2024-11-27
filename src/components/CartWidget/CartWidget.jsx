import icon_notification from "../../assets/icon_car.png";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img
        className="icon_cartWidget"
        width="50px"
        src={icon_notification}
        position="absolute"
      />
      <p>1+</p>
    </div>
  );
};
