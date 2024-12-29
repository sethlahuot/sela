import React from 'react'
import Menu from '../Components/home/Menu'
import BlogSection from '../Components/blog/BlogSection'
import BlogDetails from '../Components/blog/BlogDetails'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import Header from '../Components/home/Header'
import withPreloader from '../Components/withPreloader'

const Blog = () => {
  return (
    <div>
        <Menu />
        <Header />
        <BlogSection />
        <BlogDetails />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(Blog)