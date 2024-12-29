import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import BlogDetailHero from '../Components/blogDetail/BlogDetailHero'
import BlogDetailSection from '../Components/blogDetail/BlogDetailSection'
import Footer from '../Components/home/Footer'
import Search from '../Components/home/Search'
import withPreloader from '../Components/withPreloader'

const BlogDetail = () => {
  return (
    <div>
        <Menu />
        <Header/>
        <BlogDetailHero />
        <BlogDetailSection />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(BlogDetail)