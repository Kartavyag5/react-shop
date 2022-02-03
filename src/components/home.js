import React from "react";
import { Button, Card } from 'antd';
import { observer } from "mobx-react";

const Home = ({store}) => {

  function AddToCart(){
    const cartItem = {id:1, name:'item1', description:'this is item1', price:10}
    store.updateCart(cartItem)
    alert('success');
  }
  const itemsList = store.userInfo.cart.map((item)=>
  <>
  <Card title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <h2>{item.name}</h2>
    <h4>{item.price}$</h4>
    <p>{item.description}</p>
  </Card>
  
</>
)
  return (
    <>
    <h1>Home Page</h1>
    <h4>Items:</h4>
    <p>{itemsList}</p>
    <Button onClick={AddToCart}>Add to Cart</Button>
    </>
    );
};
  
export default observer(Home);