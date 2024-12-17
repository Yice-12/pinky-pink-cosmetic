import "./banner.css";
import flowers from "../../assets/flowersSearch.png";

export const Banner = () => {
  return (
    <div className="container_banner">
      <div className="banner_img">
        <img
          src={flowers}
          alt="Banner promocional de Pinky Pink Cosmetics"
          style={{
            opacity: 0.7,
            width: "100%",
            height: "400px",
          }}
        />
      </div>
    </div>
  );
};
