import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MealContext } from '../components/Context';
import Card from '../components/Card';
import axios from 'axios';
import Mealcard from '../components/Mealcard';

function Meals() {  
  const { data } = useContext(MealContext); 
  const { productId } = useParams(); 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    
    if (productId) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${productId}`)
        .then((res) => setProduct(res.data.meals))
        .catch((error) => console.error('Error fetching data:', error));
    } else {
    setProduct([]);
    }
  }, [productId]);
  return (
    <>
      <div className='container mx-auto justify-center flex flex-wrap'>
        {productId ? (
          product && product.length > 0 ? (
            product.map((item) => (
              <div key={item.idMeal} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                <Mealcard
                  idCategory={item.idMeal}
                  strCategory={item.strMeal.slice(0,15)}
                  strCategoryThumb={item.strMealThumb}
                  strCategoryDescription={item.strMeal}
                />
              </div>
            ))
          ) : (
            <span className="loading loading-dots loading-lg"></span>
          )
        ) : (
          data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.idCategory} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
                <Link to={`/meals/${item.strCategory}`} className='block'>
                  <Card
                    idCategory={item.idCategory}
                    strCategory={item.strCategory}
                    strCategoryThumb={item.strCategoryThumb}
                    strCategoryDescription={item.strCategoryDescription}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )
        )}
      </div>
    </>
  );
}

export default Meals;



