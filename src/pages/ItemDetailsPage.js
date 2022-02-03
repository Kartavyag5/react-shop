import React from "react";
import Item from "../components/item"
import ItemStore from "../stores/itemStore";

const ItemDetailsPage = ()=>{

    const store = new ItemStore()

    return(
        <>
        <h1>Item Details Page</h1>
        <Item store={store} />
        </>
    );
}
export default ItemDetailsPage