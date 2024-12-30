import "./navbar.css";
import eyelash from "../../assets/eyelash.jpg";
import { CartWidget } from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";
import { ModalProduct } from "../ModalProduct/ModalProduct";
import { useState } from "react";

const categories = [
  { id: "pencil", name: "Lapices de ojos" },
  { id: "cream", name: "Crema" },
  { id: "lipstick", name: "Lapiz labial" },
  { id: "powder", name: "Polvo" },
  { id: "Lip gloss ", name: "Brillo de labios" },
  { id: "Highlighter", name: "Iluminador" },
  { id: "Contour", name: "Contorno" },
];

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo" onClick={() => navigate("/")}>
          <img src={eyelash} width={50} />
          <p>Pinky pink cosmetic</p>
        </div>

        {categories.map((category) => (
          <li
            onClick={() => navigate(`/category/${category.id}`)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
        <CartWidget />
      </nav>
    </>
  );
};
