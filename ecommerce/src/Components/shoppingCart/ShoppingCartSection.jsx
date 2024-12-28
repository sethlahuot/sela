import React, {useState} from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../pay/cartContext'

const ShoppingCartSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isKhmer = location.pathname.startsWith('/kh');
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    
    const [couponCode, setCouponCode] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const { cart, removeFromCart } = useCart();
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const total = isCouponApplied ? 1 : subtotal;

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode === 'sela') {
            setIsCouponApplied(true);
        } else {
            setIsCouponApplied(false);
            alert('Invalid coupon code.');
        }
    };

    const handleCheckout = () => {
        navigate(`/${currentLanguage}/checkout`, {
            state: {
                cart,
                total,
                isCouponApplied,
            },
        });
    };

  return (
    <div>
          {/* <!-- Shopping Cart Section Begin --> */}
          <section className="shopping-cart spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="shopping__cart__table">
                              <table>
                                  <thead>
                                      <tr>
                                          <th>{isKhmer ? 'ទំនិញ' :'Product'}</th>
                                          <th>{isKhmer ? 'ចំនួន' :'Quantity'}</th>
                                          <th>{isKhmer ? 'សរុប' :'Total'}</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {cart.length === 0 ? (
                                          <tr>
                                              <td colSpan="4" style={{ textAlign: 'center' }}>
                                                  {isKhmer ? 'ទទេ។' :'Your cart is empty.'}
                                              </td>
                                          </tr>
                                      ) : (
                                          cart.map((product) => (
                                              <tr key={product.id}>
                                                  <td className="product__cart__item">
                                                      <div className="product__cart__item__pic">
                                                          <img
                                                              src={product.thumbnail}
                                                              alt={product.name}
                                                              style={{ height: 'auto', width: '150px' }}
                                                          />
                                                      </div>
                                                  </td>
                                                  <td className="quantity__item">
                                                      <div className="quantity">
                                                          <div className="pro-qty-2">
                                                              <input type="text" value={product.quantity} readOnly />
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td className="cart__price">${(product.price * product.quantity).toFixed(2)}</td>
                                                  <td
                                                      className="cart__close"
                                                      onClick={() => removeFromCart(product.id)}
                                                      style={{ cursor: 'pointer' }}>
                                                      <i className="fa fa-close"></i>
                                                  </td>
                                              </tr>
                                          ))
                                      )}
                                  </tbody>
                              </table>
                          </div>
                          <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="continue__btn">
                                      <Link to={`/${currentLanguage}/shop`}>{isKhmer ? 'ទិញថែ' :'Continue Shopping'}</Link>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="continue__btn update__btn">
                                      <Link to={`/${currentLanguage}/shoppingCart`}>{isKhmer ? 'កែកាត់' :'Update Cart'}</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="cart__discount">
                              <h6>{isKhmer ? 'កូដបញ្ចុះតម្លៃ' :'Discount codes'}</h6>
                              <form onSubmit={handleApplyCoupon}>
                                  <input type="text" placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                                    <button type="submit">{isKhmer ? 'ស្នើ' :'Apply'}</button>
                              </form>
                          </div>
                          <div className="cart__total">
                              <h6>{isKhmer ? 'បូកសរុប' :'Cart total'}</h6>
                              <ul>
                                  <li>
                                    {isKhmer ? 'ចំណាយសរុប' : 'Subtotal'}{' '}
                                      <span>${subtotal.toFixed(2)}</span>
                                  </li>
                                  {isCouponApplied && (
                                      <li>
                                          {isKhmer ? 'ការបញ្ចុះតម្លៃត្រូវបានអនុវត្ត' : 'Discount Applied'}{' '}
                                          <span>- ${subtotal - 1}</span>
                                      </li>
                                  )}
                                  <li>
                                      {isKhmer ? 'សរុប' :'Total'} <span>${total.toFixed(2)}</span>
                                  </li>
                              </ul>
                              <button onClick={handleCheckout} className="primary-btn" style={{margin:'0px auto', width:'100%', border:'0px solid black'}}>{isKhmer ? 'បន្តទៅការទូទាត់' :'Proceed to checkout'}</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Shopping Cart Section End --> */}
    </div>
  )
}

export default ShoppingCartSection