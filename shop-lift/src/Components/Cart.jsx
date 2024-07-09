import Mainproduct from "../Assets/mainProduct.png";
import Product1 from "../Assets/product1.png";
import Product2 from "../Assets/product3.png";
import Product3 from "../Assets/product3.png";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";

function Cart(){
  return(
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">My Cart (1)</h2>
      <div className="flex justify-end mb-4">
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
          <div>
            <img src={Mainproduct} alt='frame'/>
            <div className="flex justify-center gap-4">
              <img src={Product1} alt='frame'/>
              <img src={Product2} alt='frame'/>
              <img src={Product3} alt='frame'/>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">ADIDAS Originals Sneakers Stan Smith<br/>Bold Women</h3>
            <p className="text-sm text-gray-600">Brand New Collection<PiLineVerticalLight className="inline-block" />15% off with a coupon</p>
            <hr className="border-gray-300 my-4"/>
          </div>
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-bold"><FaNairaSign />120,000</h3>
            <div className="flex gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
              <span>1</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">ORDER SUMMARY</h2>
        <hr className="border-gray-300 my-4"/>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">Total Item:</p>
            <p className="text-sm text-gray-600">Tax:</p>
            <p className="text-sm text-gray-600">Delivery fee:</p>
            <h4 className="text-lg font-bold">TOTAL:</h4>
            <h4 className="text-lg font-bold">Address:</h4>
            <p className="text-sm text-gray-600">7 Abeokuta Street, Bengola Crescent<br/>Abuja Nigeria</p>
          </div>
          <div>
            <p className="text-sm text-gray-600"><FaNairaSign />120,000</p>
            <p className="text-sm text-gray-600"><FaNairaSign />1,000</p>
            <p className="text-sm text-gray-600"><FaNairaSign />5,000</p>
            <h4 className="text-lg font-bold"><FaNairaSign />126,000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart