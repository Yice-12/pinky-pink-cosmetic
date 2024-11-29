import searchIcon from "../../assets/search-24.png";
import "./search.css";

export const Search = () => {
  return (
    <div className="search">
      <input
        className="search_input"
        type="text"
        name="search"
        placeholder="Escribe aqui tu producto de interes..."
      />
      <img src={searchIcon} className="search_img" />
    </div>
  );
};
