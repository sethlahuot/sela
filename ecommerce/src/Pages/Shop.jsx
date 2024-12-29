import React from 'react';
import Menu from '../Components/home/Menu';
import Header from '../Components/home/Header'
import ShopBreadcrumb from '../Components/shop/ShopBreadcrumb'
import ShopSection from '../Components/shop/ShopSection'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import withPreloader from '../Components/withPreloader'
const Shop = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <ShopBreadcrumb/>
        <ShopSection/>
        <Footer/>
        <Search/>
    </div>
  )
}

export default withPreloader(Shop)
