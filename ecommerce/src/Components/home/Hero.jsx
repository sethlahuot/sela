import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import Hero1 from '../img/hero/hero-1.jpg'
import Hero2 from '../img/hero/hero-2.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
    
const Hero = () => {
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

  return (
    <div>
    {/* <!-- Hero Section Begin --> */}
    <section class="hero">
        <Slider className="hero__slider">
            <div>
            <div class="hero__items " style={{ backgroundImage: `url(${Hero1})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8"> 
                            <h6>{isKhmer ? 'ម៉ូតប្រចាំរដូវក្ដៅ' : 'Summer Collection'}</h6>
                            <h2>{isKhmer ? 'រដូវស្លឹកឈើជ្រុះ - ការប្រមូលរដូវរងាឆ្នាំ 2030' : 'Fall - Winter Collections 2030'}</h2>
                            <p>
                            {isKhmer ? 'ផ្លាកសញ្ញាឯកទេសបង្កើតរបស់ចាំបាច់ប្រណីត។ រចនាប្រកបដោយក្រមសីលធម៌ ជាមួយនឹងការប្តេជ្ញាចិត្តមិនផ្លាស់ប្តូរចំពោះគុណភាពពិសេស។' : 'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.'}</p>
                            <Link to={`/${currentLanguage}/shop`} className="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'} <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
            <div>
            <div class="hero__items " style={{ backgroundImage: `url(${Hero2})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <h6>{isKhmer ? 'ម៉ូតប្រចាំរដូវក្ដៅ' : 'Summer Collection'}</h6>
                            <h2>{isKhmer ? 'រដូវស្លឹកឈើជ្រុះ - ការប្រមូលរដូវរងាឆ្នាំ 2030' : 'Fall - Winter Collections 2030'}</h2>
                            <p>{isKhmer ? 'ផ្លាកសញ្ញាឯកទេសបង្កើតរបស់ចាំបាច់ប្រណីត។ រចនាប្រកបដោយក្រមសីលធម៌ ជាមួយនឹងការប្តេជ្ញាចិត្តមិនផ្លាស់ប្តូរចំពោះគុណភាពពិសេស។' : 'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.'}</p>
                            <Link to={`/${currentLanguage}/shop`} className="primary-btn">{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'} <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Slider>
    </section>
    {/* <!-- Hero Section End --> */}
    </div>
  )
}

export default Hero