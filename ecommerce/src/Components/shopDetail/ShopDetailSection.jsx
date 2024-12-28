import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../pay/cartContext'
import productBig2 from '../img/shop-details/product-big-2.png';
import detailsPayment from "../img/shop-details/details-payment.png";

const ShopDetailSection = () => {

  const location = useLocation();
  const isKhmer = location.pathname.startsWith('/kh');
  const currentLanguage = location.pathname.split('/')[1] || 'en';
  const { addToCart } = useCart();
  const [product, setProduct] = useState('');
  const productData = location.state?.product;
  


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = productData?.id || 1; 
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productData]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div>
      {/* <!-- Shop Details Section Begin --> */}
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                  <Link to={`/${currentLanguage}/home`}>{isKhmer ? 'ទំព័រដើម' : 'Home'}</Link>
                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទំនិញ' : 'Shop'}</Link>
                  <span>{isKhmer ? 'ព័ត៌មានលម្អិតអំពីផលិតផល' :'Product Details'}</span>
                </div>
              </div>
            </div>
            <div className="row">
            <div class="col-lg-3 col-md-3">
            </div>
              <div className="col-lg-6 col-md-9">
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img
                        src={product.thumbnail} alt=""
                        style={{ width: '300px', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="product__details__text">
                  <h4>{product.title}</h4>
                  <div className="rating">
                    {[...Array(Math.ceil(product.rating || 0))].map((_, index) => (
                      <i key={index} className="fa fa-star"></i>
                    ))}
                    {[...Array(5 - Math.ceil(product.rating || 0))].map((_, index) => (
                      <i key={index} className="fa fa-star-o"></i>
                    ))}
                    <span style={{ marginLeft: '10px' }}>{product.rating || 0} Reviews</span>
                  </div>
                  <h3>${product.price}</h3>
                  <p>{product.description}</p>
                  <div className="product__details__cart__option">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" value="1" readOnly />
                      </div>
                    </div>
                    <a a href="#" style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} className="primary-btn">{isKhmer ? '+ បញ្ចូលទៅក្នុងរទេះ' : 'Add to cart'}</a>


                  </div>
                  <div className="product__details__btns__option">
                    <a href="#"><i className="fa fa-heart"></i> Add to Wishlist</a>
                    <a href='#'><i className="fa fa-exchange"></i> Add to Compare</a>
                  </div>
                  <div className="product__details__last__option">
                    <h5><span>{'Guaranteed Safe Checkout'}</span></h5>
                    <img src={detailsPayment} alt="Payment Options" />
                    <ul>
                      <li><span>{isKhmer ? 'មានស្តុក' :'Stock Available'}:</span> {product.stock}</li>
                      <li><span>{isKhmer ? 'ប្រភេទ' :'Category'}:</span> {product.category}</li>
                      <li><span>{isKhmer ? 'ទំនិញ' :'Tags'}:</span> {product.brand}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Details Section End --> */}
    </div>
  );
};

export default ShopDetailSection;
