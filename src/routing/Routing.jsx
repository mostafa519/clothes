import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import Shop from "../pages/shop/Shop";
import Brand from "../pages/brand/Brand";
import BrandView from "../component/brandView/BrandView";
import Category from "../pages/category/Category";
import Details from "../component/details/Details";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ProductsByShop from "../pages/productByShop/ProductsByShop";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/category/categoryView" element={<CategoryDetails />} />
      <Route path="/shop/product" element={<ProductsByShop />} />
      <Route path="/brandView" element={<BrandView />} />
    </Routes>
  );
};

export default Routing;
