import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ShopHomePage from "./Pages/ShopHomePage";
import CheckOutPage from "./Pages/CheckOutPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<ShopHomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
