import "./productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product_card">
      <div>
        <img src={product.image} width={100} height={100} />
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};
