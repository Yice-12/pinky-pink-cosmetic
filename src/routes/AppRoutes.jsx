import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Categories } from "../pages/Categories";
import { Checkout } from "../pages/Chekout/Checkout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetail/:idProduct" element={<ProductDetail />} />
      <Route path="/category/:idCategory" element={<Categories />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
