import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Categories = () => {
  const [product, setProduct] = useState(null); 
  const location = useLocation();
  const currentLanguage = location.pathname.split('/')[1] || 'en';
  const isKhmer = location.pathname.startsWith('/kh');
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/beauty');
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          setProduct(data.products[0]); // Assuming we use the first product for the showcase
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      {/* <!-- Categories Section Begin --> */}
      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2>
                  {isKhmer ? 'ការថែរក្សារសម្រស់ និង ច្រើនទៀត' : 'Beauty Collection & More'}
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              {product && (
                <div className="categories__hot__deal">
                  <img
                    src={product.thumbnail} 
                    alt={product.title}
                    style={{ width: 'auto', height: '400px' }}
                  />
                  <div className="hot__deal__sticker">
                    <span>{isKhmer ? 'បញ្ចុះតម្លៃ' :'Sale Of'}</span>
                    <h5>${product.price}</h5>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-4 offset-lg-1">
              {product && (
                <div className="categories__deal__countdown">
                  <span>{'Deal Of The Week'}</span>
                  <h4 style={{ margin: '15px 0' }}>{product.title}</h4>
                  <div className="categories__deal__countdown__timer" id="countdown">
                    <div className="cd-item">
                      <span>{isKhmer ? '៨' :'8'}</span>
                      <p>{isKhmer ? 'ថ្ងៃ' :'Days'}</p>
                    </div>
                    <div className="cd-item">
                      <span>{isKhmer ? '៩' :'9'}</span>
                      <p>{isKhmer ? 'ម៉ោង' :'Hours'}</p>
                    </div>
                    <div className="cd-item">
                      <span>{isKhmer ? '១០' :'10'}</span>
                      <p>{isKhmer ? 'នាទី' :'Minutes'}</p>
                    </div>
                    <div className="cd-item">
                      <span>{isKhmer ? '១០' :'10'}</span>
                      <p>{isKhmer ? 'វិនាទី' :'Seconds'}</p>
                    </div>
                  </div>
                  <Link to={`/${currentLanguage}/shop`} className="primary-btn"> {isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop Now'}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section End --> */}
    </div>
  );
};

export default Categories;
