import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../pay/cartContext'
import heart from '../img/icon/heart.png';
import Compare from '../img/icon/compare.png';
import Search from '../img/icon/search.png';


const ShopSection = () => {
  const { addToCart } = useCart(); 
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; 
  const location = useLocation();
  const currentLanguage = location.pathname.split('/')[1] || 'en';
  const isKhmer = location.pathname.startsWith('/kh');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  // Calculate pagination indexes
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleSearchClick = (product) => {
    navigate(`/${currentLanguage}/shopDetail`, { state: { product } });
};
  return (
    <div>
      {/* <!-- Shop Section Begin --> */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                {/* Sidebar Content */}
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                {/* Other Sidebar Content */}
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>
                        Showing {indexOfFirstProduct + 1}–
                        {Math.min(indexOfLastProduct, products.length)} of{' '}
                        {products.length} results
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value="">Low To High</option>
                        <option value="">$0 - $55</option>
                        <option value="">$55 - $100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Display current products */}
                {currentProducts.map((product) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
                    <div className="product__item">
                      <div
                        className="product__item__pic"
                        style={{
                          backgroundImage: `url(${product.thumbnail})`,
                          backgroundSize: 'cover',
                        }}
                      >
                        <ul className="product__hover">
                          <li>
                            <Link to={`/shop`}><img src={heart} alt=""/></Link>
                          </li>
                          <li>
                            <Link to={`/shop`}><img src={Compare} alt=""/></Link>
                          </li>
                          <li>
                          <a onClick={() => handleSearchClick(product)}><img src={Search} alt="" style={{ cursor: 'pointer' }} /><span>{'View details'}</span></a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>{product.title}</h6>
                        <a style={{cursor:'pointer'}} onClick={() => handleAddToCart(product)} class="add-cart">{isKhmer ? '+ ដាក់ចូលកាត់' :'+ Add To Cart'}</a>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    {[...Array(totalPages)].map((_, index) => (
                      <a
                        key={index}
                        href="#!"
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                      >
                        {index + 1}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Section End --> */}
    </div>
  );
};

export default ShopSection;
