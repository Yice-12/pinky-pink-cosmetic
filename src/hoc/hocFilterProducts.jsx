import searchIcon from "../assets/search-24.png";
import { useContext, useState } from "react";
import "./hocFilterProducts.css";
import { Context } from "../Provider/Provider";

export const hocFilterProducts = (Component) => {
  return function () {
    const [value, setValue] = useState("");
    const { state } = useContext(Context);

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const filterSearch = () => {
      const filterProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      return filterProducts;
    };
    return (
      <>
        <div className="search_container">
          <div className="search">
            <input
              className="search_input"
              type="text"
              name="search"
              placeholder="Escribe aqui tu producto de interes..."
              onChange={onChangeInput}
            />
            <img src={searchIcon} className="search_img" />
          </div>
        </div>
        <Component products={filterSearch()} />
      </>
    );
  };
};
