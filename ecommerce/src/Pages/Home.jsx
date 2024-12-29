import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import Hero from '../Components/home/Hero'
import Banner from '../Components/home/Banner'
import Product from '../Components/home/Product'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import Categories from '../Components/home/Categories'
import withPreloader from '../Components/withPreloader'

const Home = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <Hero/>
        <Banner/>
        <Product/>
        <Categories/>
        <Footer/>
        <Search/>

    </div>
  )
}

export default withPreloader(Home)