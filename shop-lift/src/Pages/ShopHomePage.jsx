import React from "react";

import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import HotDeals from "../Components/HotDeals";
import Collections from "../Components/Collections";
export default function ShopHomePage(){
    return(
<div className='h-screen w-screen flex-grow-0 p-0 pb-[104px] bg-[#fafafa]'>
  <NavBar/>
  <Header/>
  <HotDeals/>
  <Collections/>
</div>
    );
}