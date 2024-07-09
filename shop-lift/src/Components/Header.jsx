import React from "react";
import ImageBackground from "../Assets/Bg-img.jpg";
import HeaderImage from "../Assets/Header_img.png";

export default function Header() {
  return (
    <div
      className="h-[300px] ml-[10px] mr-[10px] flex-grow-1 overflow-hidden flex justify-center items-center"
      style={{
        backgroundImage: `url(${ImageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="text-lg font-bold "
        style={{
          background: "linear-gradient(to right, #feac00 40%, #5ce189 71%)",
          borderRadius: "20px",
          padding: "20px",
          width: "25%",
          height: "40%",
          marginRight: "auto",
          marginLeft: "20px",
          marginTop: "10px",
          fontSize: "24px",
        }}
      >
        <span>Your ONE-STOP-SHOP for</span>
        <br /> 
        all your <span className="text-blue">shoes</span> and {' '}
        <span className="text-red">sneakers</span>
      </div>
      <img src={HeaderImage} className="w-300 h-300 ml-4 float-right" />
    </div>
  );
}
