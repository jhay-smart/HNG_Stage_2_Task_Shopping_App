import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "20px" }}>
      <span
        style={{
          width: 170,
          height: 20,
          margin: "19px 838px 33px 432px",
          paddinTop: "40px",
          fontFamily: "Montserrat",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "normal",
          color: "#000",
        }}
      >
        PAYMENT GATEWAY
      </span>

      <div
        className="flex flex-col justify-center"
        style={{ ffontFamily: "Montserrat", fontSize: "24px", fontWeight: 600 }}
      >
        <span
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          OTP Confirmation
        </span>
        <p style={{ textAlign: "center", fontSize: "16px" }}>
          {" "}
          A 5 digit OTP has been sent to the number **789. Kindly confirm and
          input the code below
        </p>
        <div className="flex justify-center mt-10 mr-4" style={{ gap: "10px" }}>
          <div
            style={{
              width: 46,
              height: 46,
              flexGrow: 0,
              marginLeft: "2px",
              gap: 10,
              paddingLeft:'20px',
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            <span>3</span>
          </div>
          <div
            style={{
              width: 46,
              height: 46,
              flexGrow: 0,

              alignItems: "stretch",
              gap: 10,
              paddingLeft:'20px',
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            <span>1</span>
          </div>
          <div
            style={{
              width: 46,
              height: 46,
              flexGrow: 0,
              display: "flex",
              alignItems: "stretch",
              gap: 10,
              paddingLeft:'20px',
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            <span>0</span>
          </div>
          <div
            style={{
              width: 46,
              height: 46,
              flexGrow: 0,

              alignItems: "stretch",
              gap: 10,
              paddingLeft:'20px',
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            <span>|</span>
          </div>
          <div
            style={{
              width: 46,
              height: 46,
              flexGrow: 0,

              alignItems: "stretch",
              gap: 10,
              paddingLeft:'20px',
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            <span></span>
          </div>
        </div>
        <button
        onClick={() => navigate('/')}
          style={{
            width: 574,
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
          }}
        >
          CONFIRM OTP
        </button>
      </div>
    </div>
  );
}
