import Mainproduct from "../Assets/mainProduct.png";
import Product1 from "../Assets/product1.png";
import Product2 from "../Assets/product3.png";
import Product3 from "../Assets/product3.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 bg-[#fafafa]">
      <h2 className="text-3xl font-bold mb-4">My Cart (1)</h2>
      <div className="bg-[#fafafa] p-4 flex">
        <div className="bg-white border border-gray-300 p-4 w-2/3 mr-4 flex">
          <div className="w-1/2">
            <img src={Mainproduct} width="300px" height="120px" />
            <div className="flex mt-4">
              <img src={Product1} width="50px" height="50px" className="mr-4" />
              <img src={Product2} width="50px" height="50px" className="mr-4" />
              <img src={Product3} width="50px" height="50px" />
            </div>
          </div>
          <div className="w-1/2 pl-4 text-left">
            <h4>ADIDAS Originals Sneakers Stan Smith Bold Women</h4>
            <p>
              Brand New Collection |{" "}
              <span style={{ color: "red" }}>15% off</span> with a coupon
            </p>
            <div className="my-4"></div>
            <hr className="mb-4" />
            <div className="ml-4">
              <h3 className="text-left">
                <b>N120,000</b>
              </h3>
              <div className="flex mb-2">
                <div className="bg-blue-200 p-2 rounded-full">
                  <p>-</p>
                </div>
                <p className="mx-2">1</p>
                <div className="bg-blue-200 p-2 rounded-full">
                  <p>+</p>
                </div>
              </div>
              <button
                onClick={() => navigate("/payment")}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
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
          <span>7 Abiokuta Street, Bengola Creseent Auja, Nigeria</span>
          <br />
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
              marginTop: "20px",
              width: "150px",
            }}
          >
            Edit Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
