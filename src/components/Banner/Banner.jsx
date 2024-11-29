import { Search } from "../Search/Search";
import "./banner.css";
import banner from "../../assets/banner_Pinky_Pink_Cosmetics.jpg";

export const Banner = () => {
  return (
    <div className="container_banner">
      <div className="banner_img">
        <div className="search">
          <Search />
        </div>
        <img
          src={banner}
          alt="Banner promocional de Pinky Pink Cosmetics"
          style={{
            opacity: 0.3,
            width: "100%",
            height: "300px",
          }}
        />
      </div>
    </div>
  );
};
