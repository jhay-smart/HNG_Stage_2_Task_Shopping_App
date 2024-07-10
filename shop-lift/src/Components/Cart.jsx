import Mainproduct from "../Assets/mainProduct.png";
import Product1 from "../Assets/product1.png";
import Product2 from "../Assets/product3.png";
import Product3 from "../Assets/product3.png";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";

function Cart() {
  return (
    <div className="container mx-auto p-4 bg-[#fafafa]">
      <h2 className="text-3xl font-bold mb-4">My Cart (1)</h2>
      <div className="bg-[#fafafa] p-4 flex">
        <div className="bg-white border border-gray-300 p-4 w-2/3 mr-4"></div>
        <div className="bg-white border border-gray-300 p-4 w-1/4">
          <span>ORDER SUMMARY</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Total Item:</span>
            <span>#120,000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tax:</span>
            <span>#5000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Delivery Fee:</span>
            <span>#1000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>TOTAL:</span>
            <span>#120,000</span>
          </div>
          <span>Address:</span> <br />
          <span>7 Abiokuta Street, Bengola Creseent
          Auja, Nigeria</span><br />
          <button style={{backgroundColor:'red', color:'white', borderRadius:'10px', marginTop:'20px', width:'150px'}}>Edit Address</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
