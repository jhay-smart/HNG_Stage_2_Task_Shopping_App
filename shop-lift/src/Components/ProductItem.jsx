import Mainproduct from "../Assets/mainProduct.png";
import Product1 from "../Assets/product1.png";
import Product2 from "../Assets/product3.png";
import Product3 from "../Assets/product3.png";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaNairaSign } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

function ProductItem() {
  return (
    <div>
      <div className="flex gap-3 mb-20 mt-20">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            margin: "58px 12px 15px 80px",
            padding: 0,
          }}
        >
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
            <PiLineVerticalLight />
            15% off with a coupon
          </p>
          <hr />
          <h3>
            <FaNairaSign />
            120,000
          </h3>
          <p>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <button
              style={{
                width: "444px",
                height: "35px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#feac00",
              }}
            >
              ADD TO CART
            </button>
            <button
              style={{
                width: "444px",
                height: "35px",
                padding: "6px",
                borderRadius: "10px",
                border: "solid 1px #4495f4",
                backgroundColor: "rgba(135, 191, 231, 0.53)",
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
