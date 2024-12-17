import React from "react";
import ProductListWithHoc from "../components/ProductList/ProductList";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <div>
      <Banner />
      <ProductListWithHoc />
    </div>
  );
};
