import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useCart } from '../pay/cartContext'
import heart from '../img/icon/heart.png';
import Cart from '../img/icon/cart.png';
import Search from '../img/icon/search.png';
import logo from '../img/logo.png';


const Header = () => {
    const location = useLocation();
    const {cart} = useCart();
    const totalProductCount = cart.reduce((total, product) => total + product.quantity, 0);
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const currentPath = location.pathname;
    const navigate = useNavigate();
    
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    
    const handleLanguageSwitch = (language) => {
        const pathWithoutLanguage = location.pathname.split('/').slice(2).join('/');
        navigate(`/${language}/${pathWithoutLanguage}`);
    };
    
  return (
    <div>
            {/* <!-- Header Section Begin --> */}
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header__top__left">
                            <p>{isKhmer ? 'តោះទៅការដឹកជញ្ជូនឥឡូវនេះសម្រាប់ការធានាត្រឡប់មកវិញឬសងប្រាក់វិញ។' : 'Lets Go to shipping now for  return or refund guarantee.'}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header__top__right">
                            <div className="header__top__links">
                            <a href="#">{isKhmer ? 'ចុះឈ្មោះ' : 'Sign in'}</a>
                            <a href="#">{isKhmer ? 'សំណួរខ្លីៗ' : 'FAQs'}</a>
                            </div>
                            <div className="header__top__hover">
                                <span>English <i className="arrow_carrot-down"></i></span>
                                <ul>
                                    <li onClick={() => handleLanguageSwitch('en')}>English</li>
                                    <li onClick={() => handleLanguageSwitch('kh')}>Khmer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                    <Link to={`/${currentLanguage}/home`}><img src={logo} alt="" style={{height: '50px', width:'auto'}}/></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li  className={currentPath.includes('/home') ? 'active' : ''}><Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link></li>
                            <li className={currentPath.includes('/shop') ? 'active' : ''}><Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link></li>
                            <li  className={currentPath.includes('/about') ? 'active' : ''}><Link to="#">{isKhmer ? 'អំពី' : 'about'}</Link>
                                <ul className="dropdown">
                                    <li><Link to={`/${currentLanguage}/about`}>{isKhmer ? 'អំពីយើង' : 'About Us'}</Link></li>
                                    <li><Link to={`/${currentLanguage}/shopDetail`}>{isKhmer ? 'លំអិតពីទំនេញ' : 'Shop Detail'}</Link></li>
                                    <li><Link to={`/${currentLanguage}/shoppingCart`}>{isKhmer ? 'រទេះទិញទំនិញ' : 'Shopping Cart'}</Link></li>
                                    <li><Link to={`/${currentLanguage}/checkout`}>{isKhmer ? 'ពិនិត្យទំនេញ' : 'Check Out'}</Link></li>
                                    <li><Link to={`/${currentLanguage}/blogDetail`}>{isKhmer ? 'កំណតហេតុលំអិត' : 'Blog Detail'}</Link></li>
                                </ul>
                            </li>
                            <li><Link to={`/${currentLanguage}/blog`}>{isKhmer ? 'កំណតហេតុ' : 'Blogs'}</Link></li>
                            <li><Link to={`/${currentLanguage}/contact`}>{isKhmer ? 'ទំនាក់ទំនង់' : 'Contact'}</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src={Search} alt="" /></a>
                        <a href="#"><img src={heart} alt="" /></a>
                        <Link to={`/${currentLanguage}/shoppingCart`}><img src={Cart} alt="" /> <span>{totalProductCount}</span></Link>
                        <div className="price">${subtotal.toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header>
    {/* <!-- Header Section End --> */}
    </div>
  )
}

export default Header