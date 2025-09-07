import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart); 
  const cartCount = cart.length;

  return (
    <div className="flex items-center justify-around px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg">
      <NavLink to="/" className="flex items-center gap-2">
        <img
          src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg"
          alt="Logo"
          className="h-12 w-12 rounded-full shadow-md border-2 border-white"
        />
      </NavLink>

      <div className="flex items-center gap-8 text-white font-semibold text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-200 transition duration-200 ${isActive ? "text-yellow-300" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative flex items-center justify-center p-2 rounded-full hover:text-yellow-200 transition duration-200 ${isActive ? "text-yellow-300" : ""}`
          }
        >
          <FaShoppingCart size={23} />
          {
            cart.length> 0 &&
            <span className="absolute -top-1 -right-1 text-xs bg-green-600 text-white px-2 animate-bounce py-0.5 rounded-full">
              {cartCount}
            </span>

          }
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
