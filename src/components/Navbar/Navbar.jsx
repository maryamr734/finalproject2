import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { userlogin, setuserlogin } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  function logout() {
    localStorage.removeItem('userToken');
    setuserlogin(null);
    navigate('/login');
  }

  return (
    <nav className="bg-[#F8F9FA] p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left section - Logo */}
        <div className="flex items-center space-x-2 text-black">
          <i className="text-[#4FA74F] text-3xl fa-solid fa-cart-shopping"></i>
          <span className="text-2xl font-medium">Fresh Cart</span>
        </div>

        {/* Center section - Navigation links */}
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-8 font-medium text-black">
            {userlogin !== null && (
              <>
                <li>
                  <NavLink to="/" className="text-black hover:text-[#4FA74F]">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart" className="text-black hover:text-[#4FA74F]">
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categories" className="text-black hover:text-[#4FA74F]">
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className="text-black hover:text-[#4FA74F]">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wishlist" className="text-black hover:text-[#4FA74F]">
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/brands" className="text-black hover:text-[#4FA74F]">
                    Brands
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right section - Login/Logout */}
        <div className="flex items-center space-x-4 text-black">
          {userlogin === null ? (
            <>
              <NavLink to="/login" className="text-white hover:text-[#4FA74F]">
                Login
              </NavLink>
              <NavLink to="/register" className="text-white hover:text-[#4FA74F]">
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer text-white hover:text-[#4FA74F]"
            >
              Logout
            </button>
          )}

          {/* Cart icon */}
          {userlogin !== null && (
            <div className="relative">
              <NavLink to="/cart" className="text-black hover:text-[#4FA74F]">
                <i className="fa-solid fa-cart-shopping text-2xl text-[#4FA74F]"></i>
                <span>{cart?.numOfCartItems || 0}</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}