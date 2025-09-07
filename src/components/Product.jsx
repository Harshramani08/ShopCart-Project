import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/CartSlice';
import toast from 'react-hot-toast';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addFromCart = () => {
    dispatch(addCart(post));
    toast.success("🛒 Item added to your cart!", {position: 'top-right'});
  };

  const removeFromCart = () => {
    dispatch(removeCart(post.id));
    toast.error("Item removed from your cart!", {position: 'top-right'});
  };

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="w-full h-52 flex items-center justify-center bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="max-h-52 object-contain p-4"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-md font-semibold text-gray-800 line-clamp-1">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>

        <div className="flex flex-1 justify-between items-center mt-2">
          <span className="text-indigo-600 font-bold text-lg">${post.price}</span>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <div className="mt-2">
          {cart.some((p) => p.id === post.id) ? (
            <button
              className="w-full cursor-pointer font-medium py-2  rounded-lg transition-colors shadow-md hover:shadow-2xl duration-300 hover:bg-red-600 bg-white text-red-600 border hover:text-white"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="w-full cursor-pointer font-medium py-2 rounded-lg transition-colors shadow-md hover:shadow-2xl duration-300 hover:bg-blue-600 bg-white text-blue-600 border hover:text-white"
              onClick={addFromCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
