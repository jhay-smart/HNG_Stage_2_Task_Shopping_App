import React from "react";
import { useNavigate } from 'react-router-dom';
export default function CheckOut() {
    const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center mt-4 h-full"
      style={{ backgroundColor: "#fafafa" }}
    >
      <span className="text-2xl font-bold underline text-black">
        Summary of Order
      </span>
      <div
        style={{
          height: 136,
          flexGrow: 0,
          padding: "25px 45px 30px 30px",
          borderRadius: 10,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          marginTop: "5px",
        }}
      >
        <span>
          {" "}
          PRODUCT:{" "}
          <span style={{ marginLeft: "5px" }}>
            {" "}
            ADIDAS Originals Sneakers Stan Smith Bold Women{" "}
          </span>{" "}
        </span>
        <span>
          {" "}
          QUANTITY: <span style={{ marginLeft: "5px" }}> 1 </span>{" "}
        </span>
        <span>
          {" "}
          COST OF TOTAL ORDER:{" "}
          <span style={{ marginLeft: "150px", fontWeight: "bold" }}>
            {" "}
            #126,000{" "}
          </span>{" "}
        </span>
      </div>
      <div
        style={{
          width: "500px",
          height: "2px",
          backgroundColor: "#d9d9d9",
          marginTop: "20px",
        }}
      ></div>
      <span style={{ marginTop: "20px", alignSelf: 'flex-start', marginLeft:'597px' }}>Choose Preferred Payment Method</span>
      <div
        style={{
          height: "44",
          width: "500px",
          flexGrow: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: "2px",
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "black",
          }}
        ></div>
        <span>Pay with Bank Transfer / USSD</span>
      </div>
      <div
        style={{
          height: "44",
          width: "500px",
          flexGrow: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: "2px",
          marginTop: "10px",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "black",
          }}
        ></div>
        <span>Pay with Card</span>
      </div>
      <div
        style={{
          height: "44",
          width: "500px",
          flexGrow: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: "2px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "black",
          }}
        ></div>
        <span>Pay with PayPal</span>
      </div>
      <button
      onClick={() => navigate('/confirm')}
        style={{
          width: 500,
          height: 44,
          alignSelf: "center",
          backgroundColor: "#feac00",
          color: "#fff",
          borderRadius: 10,
          padding: "10px 20px",
          fontSize: 16,
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          marginTop: "30px",
          marginBottom: "200px",
        }}
      >
        PAY: N126,000.00
      </button>
    </div>
  );
}
