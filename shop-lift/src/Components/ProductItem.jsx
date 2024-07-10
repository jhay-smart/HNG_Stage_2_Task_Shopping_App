import Mainproduct from "../Assets/mainProduct.png";
import Product1 from "../Assets/product1.png";
import Product2 from "../Assets/product3.png";
import Product3 from "../Assets/product3.png";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import './ProductItem.css';

function ProductItem() {
  return (
    <div>
      <div className="products">
        <div className="productimages">
          <img src={Product1} alt="frame" />
          <img src={Product2} alt="frame" />
          <img src={Product3} alt="frame" />
        </div>
        <img src={Mainproduct} alt="frame" />
        <div>
          <h3>
            ADIDAS Originals Sneakers Stan Smith
            <br />
            Bold Women
          </h3>
          <p>
            Brand New Collection
            <PiLineVerticalLight/>
            15% off with a coupon
          </p>
          <hr />
          <h3>
            <FaNairaSign />
            120,000
          </h3>
          <div></div>
          <p >
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
          </p>
          <div className="btn">
            <button className="btncart">ADD TO CART</button>
            <button className="btnnow">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
