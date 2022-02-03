import React from "react";
import './App.css';
import Layout from "./layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import CartPage from "./pages/CartPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NoPage from './components/nopage';


const App = () => {

  const DATA = [
    {id:1, title:'note1', description:'this is note1'},
    {id:2, title:'note2', description:'this is note2'},
    {id:3, title:'note3', description:'this is note3'}
  ];
  
  return(
    <>
    <h1>Hello World</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="itemDetails" element={<ItemDetailsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;