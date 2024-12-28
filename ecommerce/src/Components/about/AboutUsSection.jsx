import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const AboutUsSection = () => {
const location = useLocation();
const currentLanguage = location.pathname.split('/')[1] || 'en';
const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
    {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>{isKhmer ? 'អំពីយើង':'About Us'}</h4>
                        <div class="breadcrumb__links">
                            <Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម':'Home'}</Link>
                            <span>{isKhmer ? 'អំពីយើង':'About Us'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
    </div>
  )
}

export default AboutUsSection