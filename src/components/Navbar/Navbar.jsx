import "./navbar.css";
import eyelash from "../../assets/eyelash.jpg";
import { CartWidget } from "../CartWidget/CartWidget";

const categories = [
  "Accesorios",
  "Brochas",
  "Cejas",
  "Corporal",
  "Cuidado Capilar",
  "Cuidado de Piel",
  "Labios",
  "Ojos",
  "Piel",
  "Hombre",
  "Nueva Colección",
  "Promociones",
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={eyelash} width={50} />
        <p>Pinky pink consmetic</p>
      </div>

      {categories.map((category, i) => (
        <li key={i}>{category}</li>
      ))}
      <CartWidget />
    </nav>
  );
};
