import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../pay/cartContext'
import heart from "../img/icon/heart.png"
import compare from "../img/icon/compare.png"
import Search from "../img/icon/search.png"

const ShopDetailRelated = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const location = useLocation();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products.slice(0, 4));
            } catch (error) { console.error("Error fetching products:", error); }
        };
        fetchProducts();
    }, []);

    const handleSearchClick = (product) => {
        navigate(`/${currentLanguage}/shopDetail`, { state: { product } });
    };
    const handleAddToCart = (product) => {
        addToCart(product);
      };
  return (
    <div>
          {/* <!-- Related Section Begin --> */}
          <section class="related spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <h3 class="related-title">{'Related Product'}</h3>
                      </div>
                  </div>
                  <div class="row">
                      {products.map((product) => (
                          <div key={product.id} class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                              <div class="product__item">
                                  <div class="product__item__pic" className="product__item__pic"
                                      style={{
                                          backgroundImage: `url(${product.thumbnail})`,
                                          backgroundSize: 'contain',
                                          backgroundPosition: 'center',
                                          width: '200px',
                                          backgroundRepeat: 'no-repeat'
                                      }}>
                                      <ul class="product__hover">
                                          <li>
                                            <Link to={`/shop`}><img src={heart} alt="" /></Link>
                                        </li>
                                        <li>
                                            <Link to={`/shop`}><img src={compare} alt="" /></Link>
                                        </li>
                                        <li>
                                            <a onClick={() => handleSearchClick(product)}><img src={Search} alt="" style={{ cursor: 'pointer' }} /><span>{isKhmer ? 'មើលព័ត៌មានលម្អិត' :'View details'}</span></a>
                                        </li>
                                      </ul>
                                  </div>
                                  <div class="product__item__text">
                                      <h6>{product.title}</h6>
                                      {/* <a href="#" class="add-cart">+ Add To Cart</a> */}
                                      <a style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} class="add-cart">{isKhmer ? '+ បញ្ចូលទៅក្នុងរទេះ' :'+ Add To Cart'}</a>
                                      <div class="rating">
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                          <i class="fa fa-star-o"></i>
                                      </div>
                                      <h5>${product.price}</h5>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          {/* <!-- Related Section End --> */}
    </div>
  )
}

export default ShopDetailRelated