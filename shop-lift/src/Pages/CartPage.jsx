import React from "react";
import Header from "../Components/NavBar";
import Cart from "../Components/Cart";
export default function CartPage(){
    return(
        <div className='bg-[#fafafa]'>
            <Header/>
            <Cart/>
        </div>
    );
}