import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const [cart, setCart] = useState(location.state?.cart || []);

useEffect(()=>{
  
})

  const handleRemoveFromCart = (idCategory) => {
    const updatedCart = cart.filter(item => item.idCategory !== idCategory);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.idCategory} className="card m-2 bg-base-100 border h-96 w-80 shadow-xl">
            <figure>
              <img src={item.strCategoryThumb} alt={item.strCategory} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.strCategory}</h2>
              <p>{item.strCategoryDescription}</p>
              <button
                onClick={() => handleRemoveFromCart(item.idCategory)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
