import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import AboutUsSection from '../Components/about/AboutUsSection'
import AboutUs from '../Components/about/AboutUs'
import AboutUsTestimonial from '../Components/about/AboutUsTestimonial'
import AboutUsPartnerClient from '../Components/about/AboutUsPartnerClient'
import AboutUsClient from '../Components/about/AboutUsClient'
import AboutUsTeam from '../Components/about/AboutUsTeam'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import withPreloader from '../Components/withPreloader'
const About = () => {
  return (
    <div>
  
      <Menu/>
      <Header/>
      <AboutUsSection />
      <AboutUs />
      <AboutUsTestimonial />
      <AboutUsClient />
      <AboutUsTeam />
      <AboutUsPartnerClient />
      <Footer />
      <Search />

    </div>
  )
}

export default withPreloader(About)