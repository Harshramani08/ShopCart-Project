import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-6">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-zinc-100">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide">🛍️ Your Cart</h2>
            <p className="text-gray-500">Order Summary</p>

            <div className="flex justify-between text-gray-700">
              <span className="font-medium">Total Items:</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
              <span className="text-2xl font-semibold text-red-600">${totalAmount}</span>
            </div>

            <button className="w-full bg-white border cursor-pointer border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
              🚀 CheckOut Now
            </button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
          <h1 className="text-2xl font-semibold">🛒 Your Cart is Empty</h1>
          <NavLink to="/">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
