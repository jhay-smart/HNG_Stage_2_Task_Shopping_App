import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ShopHomePage from "./Pages/ShopHomePage";
import Product from "./Pages/Product";
import PaymentConfirmation from "./Pages/PaymentConfirmation";
import Payment from "./Pages/Payment";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<ShopHomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirm" element={<PaymentConfirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
