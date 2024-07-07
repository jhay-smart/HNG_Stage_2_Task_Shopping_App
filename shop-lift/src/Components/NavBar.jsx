import React from "react";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="w-full h-26 mb-280 p-[16px_81px_16px_83px] bg-[#efefef] flex flex-row">
          <div className="w-[159px] h-[64px] flex flex-row justify-center items-center gap-[10px] mx-[52px] ml-0 mr-0 p-[10px] rounded-[20px] border border-solid border-[1px] border-[#000]">
            <span className="w-[139px] h-[44px] flex-grow-0 font-family['IrishGrover'] text-[36px] font-normal text-center text-[#000]">ShopLift</span>
          </div>
          <div className="w-[156px] h-[44px] flex flex-row justify-start items-center gap-[10px] mx-[10px_30px_10px_52px] p-[10px_12px]">
          <span className="w-[104px] h-[24px] flex-grow-0 font-[Inter] text-[20px] font-normal text-center text-[#000]">
            Categories
          </span>
          <span>Icon</span>
          </div>
          
        </div>
      </nav>
    </>
  );
}
