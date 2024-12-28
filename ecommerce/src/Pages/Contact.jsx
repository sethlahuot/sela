import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import ContactMap from '../Components/contact/ContactMap'
import ContactSection from '../Components/contact/ContactSection'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'

const Contact = () => {
  return (
    <div>
        <Menu />
        <Header/>
        <ContactMap />
        <ContactSection />
        <Footer />
        <Search />
    </div>
  )
}

export default Contact