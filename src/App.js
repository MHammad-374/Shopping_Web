import React, { useState } from 'react'
// import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { apidata } from './api-Data/apidata';





function App() {




  let [cartItems, setCartItems] = useState([
    // {
    //   title: 'Mobile',
    //   price: 657
    // },
    // {
    //   title: 'Mobile',
    //   price: 657
    // }
  ])


  const addToCart = (product) => {
    // console.log(productTitle)
    // console.log(productPrice)
    setCartItems([...cartItems, product])

  }
  return (
    <>
      <Header cartItems={cartItems} />
      <Home addToCart={addToCart} />
      <Footer />
    </>

  );
}

export default App;
