import React from 'react'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import ShopDetail from './Pages/ShopDetail';
import BlogDetail from './Pages/BlogDetail';
import Checkout from './Pages/Checkout';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ShoppingCart from './Pages/ShoppingCart';
import { CartProvider } from './Components/pay/cartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/en/home' />}/>\
          {/* English */}
          <Route path="/en/home" element={<Home />}/>
          <Route path="/en/shop" element={<Shop />}/>
          <Route path="/en/about" element={<About />}/> 
          <Route path="/en/contact" element={<Contact />}/> 
          <Route path="/en/blog" element={<Blog />}/> 
          <Route path="/en/shopDetail" element={<ShopDetail />}/> 
          <Route path="/en/blogDetail" element={<BlogDetail />}/> 
          <Route path="/en/checkout" element={<Checkout />}/> 
          <Route path="/en/shoppingCart" element={<ShoppingCart />}/> 
          {/* Khmer */}
          <Route path="/kh/home" element={<Home />}/>
          <Route path="/kh/shop" element={<Shop />}/>
          <Route path="/kh/about" element={<About />}/> 
          <Route path="/kh/contact" element={<Contact />}/> 
          <Route path="/kh/blog" element={<Blog />}/> 
          <Route path="/kh/shopDetail" element={<ShopDetail />}/> 
          <Route path="/kh/blogDetail" element={<BlogDetail />}/> 
          <Route path="/kh/checkout" element={<Checkout />}/> 
          <Route path="/kh/shoppingCart" element={<ShoppingCart />}/> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
