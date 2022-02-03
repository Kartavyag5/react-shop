import React from "react";
import Cart from "../components/cart";
import ItemStore from "../stores/itemStore";


const CartPage = ()=>{
    const store = new ItemStore()
    return(
        <>
        <h1>CartPage</h1>
        <Cart store={store} />
        </>
    );
}
export default CartPage