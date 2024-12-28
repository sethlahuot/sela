import React from 'react'
import Menu from '../Components/home/Menu';
import Header from '../Components/home/Header'
import ShoppingCartBreadcrumb from '../Components/shoppingCart/ShoppingCartBreadcrumb';
import ShoppingCartSection from '../Components/shoppingCart/ShoppingCartSection';
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'

const ShoppingCart = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <ShoppingCartBreadcrumb/>
        <ShoppingCartSection/>
        <Footer/>
        <Search/>
    </div>
  )
}

export default ShoppingCart