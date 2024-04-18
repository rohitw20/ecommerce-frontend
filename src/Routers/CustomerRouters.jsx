import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/Product";
import Navigation from "../customer/components/Navigation/Navigation";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div className="">
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:leveltwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="account/order" element={<Order />} />
        <Route path="account/order/:orderId" element={<OrderDetails />} />
      </Routes>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
