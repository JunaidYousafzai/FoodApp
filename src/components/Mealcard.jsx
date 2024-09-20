
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Mealcard({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);




  const handleAddToCart = () => {
    toast("Your order is added to cart");
    const newCartItem = {
      idCategory,
      strCategory,
      strCategoryThumb,
      strCategoryDescription,
    };

    // Add the new item to the cart
    setCart((prevCart) => [...prevCart, newCartItem]);
    alert("Your order is ready to place")

    // Navigate to the dashboard with the updated cart data
    navigate('/dashboard', { state: { cart: [...cart, newCartItem] } });

  };

  return (
    <div className="card animate-slideUp m-2 bg-base-100 border shadow-xl cursor-pointer">
      <figure>
        <img src={strCategoryThumb} alt="Meal" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {strCategory}
          <div className="badge badge-ghost hover:bg-gray-400 cursor-pointer">NEW</div>
        </h2>
        <p className="line-clamp-1">{strCategoryDescription}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
          <ToastContainer/>
        </button>
      </div>
    </div>
  );
}

export default Mealcard;


