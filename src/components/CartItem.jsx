import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeCart } from '../redux/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeCart(item.id));
    toast.success("Item removed from your cart!",{position: 'top-right'});
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-20 object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-lg font-semibold line-clamp-1">{item.title}</h1>
        <p className="text-gray-500 text-sm ">{item.description}</p>

        <div className="flex justify-between items-center">
          <p className="text-red-600 font-bold text-lg">${item.price}</p>
          <button
            onClick={removeItem}
            className="p-2 cursor-pointer rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
