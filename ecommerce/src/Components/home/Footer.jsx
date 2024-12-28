
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/logo.png'
import payment from '../img/payment.png'




const Footer = () => {
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');

  return (
    
    <div>
            {/* <!-- Footer Section Begin --> */}
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__logo">
                        <Link to="/home"><img src={logo} alt=""/></Link>
                        </div>
                        <p>
                        {isKhmer ? 'អតិថិជនគឺជាបេះដូងនៃគំរូអាជីវកម្មតែមួយគត់របស់យើង ដែលរួមបញ្ចូលការរចនា។' : 'The customer is at the heart of our unique business model, which includes design.'}
                        </p>
                        <Link to={`/${currentLanguage}/shoppingCart`}><img src={payment} alt=""/></Link>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>{isKhmer ? 'តោះទិញ' : 'Shopping'}</h6>
                        <ul>
                            <li><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ហាងលក់សំលៀកបំពាក់' : 'Clothing Store'}</Link></li>
                            <li><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ស្បែកជើងដែលកំពុងពេញនិយម' : 'Trending Shoes'}</Link></li>
                            <li><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'គ្រឿងបន្លាស់' : 'Accessories'}</Link></li>
                            <li><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'បញ្ចុះតម្លៃ' : 'Sale'}</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>{isKhmer ? 'តោះទិញ' : 'Shopping'}</h6>
                        <ul>
                            <li><Link to={`/${currentLanguage}/contact`}>{isKhmer ? 'ទំនាក់ទំនង់យើង' : 'Contact Us'}</Link></li>
                            <li><Link to={`/${currentLanguage}/shoppingCart`}>{isKhmer ? 'ទូទាត់' : 'Payment Methods'}</Link></li>
                            <li><Link to={`/${currentLanguage}/checkout`}>{isKhmer ? 'ដឹកជញ្ជូន' : 'Delivary'}</Link></li>
                            <li><Link to={`/${currentLanguage}/checkout`}>{isKhmer ? 'ការត្រឡប់មកវិញ & ការផ្លាស់ប្តូរ' : 'Return & Exchanges'}</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div class="footer__widget">
                        <h6>{isKhmer ? 'សំបុត្រព័ត៌មាន' : 'NewLetter'}</h6>
                        <div class="footer__newslatter">
                            <p>
                            {isKhmer ? 'ក្លាយជាមនុស្សដំបូងដែលដឹងអំពីការមកដល់ថ្មី រកមើលសៀវភៅ ការលក់ និងប្រូម៉ូសិន!' : 'Be the first to know about new arrivals, look books, sales & promos!'}
                            </p>
                            <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><span class="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="footer__copyright__text">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2020
                            All rights reserved | This template is made with <i class="fa fa-heart-o"
                            aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End --> */}
    </div>
  )
}

export default Footer