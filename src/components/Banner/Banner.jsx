import banner from "../../assets/banner_Pinky_Pink_Cosmetics.jpg";
import { Search } from "../Search/Search";
import "./banner.css";

export const Banner = () => {
  return (
    <div className="banner_container">
      <Search />

      <img
        src={banner}
        alt="Banner promocional de Pinky Pink Cosmetics"
        style={{
          width: "100%",
          height: "300px",
          opacity: 0.3,
        }}
      />
    </div>
  );
};
