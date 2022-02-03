import React from "react";
import {observer} from "mobx-react"
import { Button, Card } from 'antd';

const Cart = ({store})=>{  

  function AddCart(){
    const cartItem = {id:1, name:'item1', description:'this is item1', price:10}
    store.addItem(cartItem)
    alert('success');
  }

  const itemsList = store.itemList.map((item)=>
  <>
  <Card title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <h2>{item.name}</h2>
    <h4>{item.price}$</h4>
    <p>{item.description}</p>
  </Card>
  </>
  );

  return(
    <div>
    <h1>Cart</h1>
    <h4>Items:</h4>
    <p>{itemsList}</p>
    <Button onClick={AddCart}>Add to Cart</Button>
    </div>
  );
}

export default observer(Cart);