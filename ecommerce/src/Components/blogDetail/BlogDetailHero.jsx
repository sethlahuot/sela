import React from 'react'
import { useLocation } from 'react-router-dom'
const BlogDetailHero = () => {
    
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    
  return (
    <div>
            {/* <!-- Blog Details Hero Begin --> */}
    <section class="blog-hero spad">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-9 text-center">
                    <div class="blog__hero__text">
                        <h2>{isKhmer? 'តើ​អ្នក​ជា​ម្ចាស់ Iphone មួយ​ពាន់​នាក់​ដែល​មិន​មាន​គំនិត':'Are you one of the thousands of Iphone owners who has no idea'}</h2>
                        <ul>
                            <li>{isKhmer? 'ដោយ Deercreative':'By Deercreative'}</li>
                            <li>{isKhmer? 'ថ្ងៃទី ២១ ខែកុម្ភៈ ឆ្នាំ ២០២៤':'February 21, 2024'}</li>
                            <li>{isKhmer? '8 យោបល់':'8 Comments'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Hero End --> */}

    </div>
  )
}

export default BlogDetailHero