import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../pay/cartContext'
import heart from '../img/icon/heart.png';
import compare from '../img/icon/compare.png';
import Search from '../img/icon/search.png';

const Product = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Beauty');
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');

    
    const categories = [
        { name: "Beauty", khmerName:"សម្រស់", api: "https://dummyjson.com/products/category/beauty" },
        { name: "Fragrances", khmerName:"ទឺកអប់", api: "https://dummyjson.com/products/category/fragrances" },
        { name: "Furniture", khmerName:"គ្រឿងសង្ហារិម", api: "https://dummyjson.com/products/category/furniture" },
    ];
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };
    const handleAddToCart = (product) => {
        addToCart(product);
      };
    const handleSearchClick = (product) => {
        navigate(`/${currentLanguage}/shopdetail`, { state: { product } });
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const categoryPromises = categories.map(async (category) => {
                    const response = await fetch(category.api);
                    const data = await response.json();
                    const fetchedProducts = Array.isArray(data) ? data : data.products || [];
                    return {
                        category: category.name,
                        products: fetchedProducts.slice(0, 4),
                    };
                });
                const results = await Promise.all(categoryPromises);
                setProducts(results);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);
    return (
        <div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                {categories.map((category) => (
                                    <li
                                        key={category.name}
                                        className={activeFilter === category.name ? 'active' : ''}
                                        onClick={() => handleFilterClick(category.name)}>
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {products
                            .filter((categoryData) => activeFilter === categoryData.category)
                            .map((categoryData) =>
                                categoryData.products.map((product) => (
                                    <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mix">
                                        <div className="product__item">
                                            <div
                                                className="product__item__pic set-bg"
                                                style={{
                                                    backgroundImage: `url(${product.thumbnail || product.image})`,
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    height: '200px',
                                                    width: '100%',
                                                }}>
                                                <ul className="product__hover">
                                                    <li>
                                                        <Link to={`/${currentLanguage}/shop`}><img src={heart} alt="Heart Icon" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/${currentLanguage}/shop`}><img src={compare} alt="Compare Icon" /></Link>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => handleSearchClick(product)}><img src={Search} alt="" style={{ cursor: 'pointer' }} /><span>{isKhmer ? 'មើលព័ត៌មានលម្អិត' : 'View details'}</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6>{product.title}</h6>
                                                {/* <a style={{ cursor: 'pointer' }}>+ Add To Cart</a> */}
                                                <a style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} class="add-cart">+ Add To Cart</a>
                                                <div className="rating">
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h5>${product.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
