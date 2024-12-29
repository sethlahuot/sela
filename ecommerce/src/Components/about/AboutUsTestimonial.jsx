import React from 'react'
import { useLocation } from 'react-router-dom'
import testimonialauthor from '../img/about/testimonial-author.jpg'
import testimonialpic from '../img/about/testimonial-pic.jpg'
const AboutUsTestimonial = () => {
const location = useLocation();
const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
            {/* <!-- Testimonial Section Begin --> */}
    <section class="testimonial">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="testimonial__text">
                        <span class="icon_quotations"></span>
                        <p>{isKhmer
                                  ? `“ចេញទៅក្រៅបន្ទាប់ពីការងារ? នាំ butane curling iron របស់អ្នកទៅការិយាល័យ ហើយបើកវាឡើង រចនាសក់របស់អ្នកមុនពេលចេញពីការិយាល័យ ដូច្នេះអ្នកមិនចាំបាច់ត្រឡប់ទៅផ្ទះវិញឡើយ។”`
                                  : `“Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won't have to make a trip back home.”`}</p>
                        <div class="testimonial__author">
                            <div class="testimonial__author__pic">
                                <img src={testimonialauthor} alt=""/>
                            </div>
                            <div class="testimonial__author__text">
                                <h5>Augusta Schultz</h5>
                                <p>{isKhmer ? 'អ្នករចនាម៉ូតសម្លៀកបំពាក់' : 'Fashion Design'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="testimonial__pic set-bg" style={{ backgroundImage: `url(${testimonialpic})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Testimonial Section End --> */}

    </div>
  )
}

export default AboutUsTestimonial
