import "./productList.css";
import { ProductCard } from "../ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Base de maquillaje Fit Me Mate + Minimiza Poros",
    image: "https://m.media-amazon.com/images/I/71TuJ5iH9tL.jpg",
    price: "$12.99",
    description:
      "Una base ligera que matifica la piel y minimiza la apariencia de los poros para un acabado natural.",
  },
  {
    id: 2,
    name: "Corrector Instant Perfector Glow 4 en 1",
    image:
      "https://www.chivela.com/cdn/shop/files/maybelline-foundation-maybelline-new-york-instant-perfector-glow-4-effects-in-1-foundation-00-fair-light-42585600622810.png?v=1724301530",
    price: "$9.99",
    description:
      "Corrector multifuncional que ilumina, corrige, hidrata y prepara la piel en un solo paso.",
  },
  {
    id: 3,
    name: "Máscara de pestañas Lash Sensational",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609839-MLA74781248901_022024-O.webp",
    price: "$10.99",
    description:
      "Máscara que ofrece un volumen deslumbrante y una definición completa desde la raíz hasta la punta.",
  },
  {
    id: 4,
    name: "Sombra de ojos The Nudes Paleta",
    image:
      "https://beautycreationscol.com/cdn/shop/files/image_2a96c88b-9c0b-433c-9d6f-e3d6d2961e4a.jpg?v=1683418532&width=1946",
    price: "$14.99",
    description:
      "Paleta de sombras con tonos neutros que permiten crear desde looks sutiles hasta ahumados intensos.",
  },
];

export const ProductList = () => {
  return (
    <div className="product_list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
