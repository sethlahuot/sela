import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Banner = () => {
  const [images, setImages] = useState([]);
  const location = useLocation();
  const currentLanguage = location.pathname.split('/')[1] || 'en';
  const isKhmer = location.pathname.startsWith('/kh');

  const fetchProductsByIds = async (ids) => {
    try {
      const urls = ids.map((id) => `https://dummyjson.com/products/${id}`);
      const productPromises = urls.map((url) =>
        fetch(url).then((response) => response.json())
      );
      const products = await Promise.all(productPromises);
      const productImages = products.map((product) => product.thumbnail); // Updated to use 'thumbnail'
      setImages(productImages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProductsByIds([10, 2, 12]); // Update these IDs as per the DummyJSON product IDs
  }, []);

  return (
    <div>
      {/* <!-- Banner Section Begin -->*/}
      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 offset-lg-4">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img
                    src={images[0]}
                    alt=""
                    style={{ height: 'auto', width: '280px' }}
                  />
                </div>
                <div className="banner__item__text">
                  <h2>{isKhmer ? 'ម៉ូដថ្មីពីឆ្នាំ 2025' : 'New Fashion From 2025'}</h2>
                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop now'}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner__item banner__item--middle">
                <div className="banner__item__pic">
                  <img
                    src={images[1]}
                    alt=""
                    style={{ height: 'auto', width: '280px' }}
                  />
                </div>
                <div className="banner__item__text">
                  <h2>{isKhmer ? 'ម៉ូដថ្មីពីឆ្នាំ 2025' : 'New Fashion From 2025'}</h2>
                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop Now'}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner__item banner__item--last">
                <div className="banner__item__pic">
                  <img
                    src={images[2]}
                    alt=""
                    style={{ height: 'auto', width: '280px' }}
                  />
                </div>
                <div className="banner__item__text">
                  <h2>{isKhmer ? 'ម៉ូដថ្មីពីឆ្នាំ 2025' : 'New Fashion From 2025'}</h2>
                  <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញឥឡូវនេះ' : 'Shop Now'}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}
    </div>
  );
};

export default Banner;
