import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  const navigate = useNavigate();

  return (
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <nav>
      <div className="w-full h-26 mb-280 p-[16px_81px_16px_83px] bg-[#efefef] flex flex-row justify-between items-center">
        <div className="w-auto h-[64px] flex flex-row justify-center items-center gap-[10px] p-[10px] rounded-[20px] border border-solid border-[1px] border-[#000]">
          <span className="w-auto h-[44px] flex-grow-0 font-family['IrishGrover'] text-[36px] font-normal text-center text-[#000]">
            {" "}
            ShopLift{" "}
          </span>
        </div>
        <div className="w-auto h-[44px] justify-start items-center gap-[10px] p-[10px_12px]">
          <span className="flex justify-center items-center w-auto h-[24px] font-[Inter] text-[20px] font-normal text-center text-[#000]">
            {" "}
            Categories <RiArrowDropDownLine className="inline-block" />{" "}
          </span>
        </div>
        <div className="w-auto h-[52px] flex flex-row justify-start items-center gap-[9px] p-[14px_15px] rounded-[20px] bg-white">
          <CiSearch className="w-[19.1px] h-[19.1px] flex-grow-0" />
          <input
            type="search"
            className="w-[420px] h-[19px] flex-grow-0 font-inter text-lg font-normal italic text-center text-black pl-2"
            placeholder="Search your favorite brands here"
          />
        </div>
        <div className="w-auto h-[48px] flex-grow-0 gap-10 flex flex-row justify-start items-center gap-10 px-10 py-12">
          <span className="flex justify-center items-center w-auto h-[24px] font-[Inter] text-[20px] font-normal text-center text-[#000]">
            <FaRegUser className="inline-block w-[28px] h-[28px] flex-grow-0 p-[5.8px_5.8px_4.7px_4.7px]" />
            <span className="w-auto h-[24px] flex-grow-0 font-inter text-xl font-normal text-center text-black">
              {" "}
              Account{" "}
            </span>
            <RiArrowDropDownLine className="inline-block" />
          </span>
        </div>
        <div 
        onClick={() => navigate('/cart')}
        className="w-auto h-[44px] flex-grow-0 flex flex-row justify-between items-center p-[10px_12px]">
          <FaShoppingCart className="w-[20px] h-[20px] flex-grow-0" />
          <span className="w-auto h-[24px] flex-grow-0 font-inter text-xl font-normal text-center text-black mx-[10px]">
            {" "}
            Cart{" "}
          </span>
        </div>
      </div>
    </nav>
  </meta>
    
  );
}
