import React from 'react'
import { useLocation } from 'react-router-dom';
const ContactSection = () => {
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
          {/* <!-- Contact Section Begin --> */}
          <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="contact__text">
                        <div class="section-title">
                            <span>Information</span>
                            <h2>Contact Us</h2>
                            <p> {isKhmer
                            ? 'ដូចដែលអ្នកអាចរំពឹងពីក្រុមហ៊ុនដែលបានចាប់ផ្តើមជាអ្នកម៉ៅការផ្នែកខាងក្នុងកម្រិតខ្ពស់ យើងយកចិត្តទុកដាក់យ៉ាងតឹងរ៉ឹង។'
                            :'As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.'}</p>
                        </div>
                        <ul>
                            <li>
                            <h4>{isKhmer ? 'កម្ពុជា' : 'Cambodia'}</h4>
                                <p>{isKhmer ? 'ភ្នំពេញ' : 'Phnom Penh'}<br />+855 96-362-233-6</p>
                            </li>
                            <li>
                                <h4>{isKhmer ? 'បារាំង' : 'France'}</h4>
                                <p>{isKhmer ? 'ប៉ារីស' : 'Paris'} <br />+12 345-423-9893</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="contact__form">
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div class="col-lg-6">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div class="col-lg-12">
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit" class="site-btn">{isKhmer ? 'ផ្ញើសារ' : 'Send Message'}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
          {/* <!-- Contact Section End --> */}
    </div>
  )
}

export default ContactSection