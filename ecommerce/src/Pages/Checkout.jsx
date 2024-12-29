import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import CheckoutBreadcrumb from '../Components/checkout/CheckoutBreadcrumb'
import CheckoutSection from '../Components/checkout/CheckoutSection'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import withPreloader from '../Components/withPreloader'
const Checkout = () => {
  return (
    <div>
        <Menu/>
        <Header />
        <CheckoutBreadcrumb/>
        <CheckoutSection />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(Checkout)