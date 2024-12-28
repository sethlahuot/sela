import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import ShopDetailRelated from '../Components/shopDetail/ShopDetailRelated'
import ShopDetailSection from '../Components/shopDetail/ShopDetailSection'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'

const ShopDetail = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <ShopDetailSection/>
        <ShopDetailRelated />
        <Footer/>
        <Search/>
    </div>
  )
}

export default ShopDetail