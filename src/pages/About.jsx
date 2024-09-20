import React from 'react';

function About() {
  return (
    <>
      <div className="text-content animate-slideUp text-2xl sm:text-3xl lg:text-4xl text-center px-8 py-12 flex items-center flex-col bg-gradient-to-b from-gray-100 to-gray-300">
        <h1 className="text-center my-6 font-bold text-gray-800">About Us<br />Welcome to Dev!</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          At Dev, we believe that food is not just about eating—it's about creating memorable experiences. Our mission is to bring you the best meals, crafted with the finest ingredients, delivered straight to your door. Whether you're looking for a quick bite, a gourmet meal, or something in between, Dev has something to satisfy every craving.
        </p>
        <h2 className="bg-gray-700 my-6 px-4 py-2 items-center text-white text-center rounded-full shadow-md max-w-xs sm:max-w-md lg:max-w-lg">
          Fresh Ingredients
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          At Dev, we prioritize freshness in everything we offer. Our meals are prepared with carefully sourced ingredients to ensure that every bite is packed with flavor and nutrition. We believe in delivering meals that are not just convenient but also wholesome and delicious.
        </p>
        <h2 className="bg-gray-700 my-6 px-4 py-2 items-center text-white text-center rounded-full shadow-md max-w-xs sm:max-w-md lg:max-w-lg">
          Diverse Meal Options
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          Whether you're a foodie exploring new cuisines or someone with specific dietary needs, Dev has a diverse menu to cater to your preferences. From vegan and vegetarian dishes to hearty meat-based meals, our offerings are as varied as our customers' tastes.
        </p>
        <h2 className="bg-gray-700 my-6 px-4 py-2 items-center text-white text-center rounded-full shadow-md max-w-xs sm:max-w-md lg:max-w-lg">
          Why Choose Dev?
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          Quality Assurance: At Dev, we are committed to offering only the highest quality meals. Our chefs carefully craft each dish, ensuring that it meets our strict standards for taste, presentation, and nutrition.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          Convenience: We understand that life can be busy, which is why we offer a seamless food delivery experience. With just a few taps, you can have your favorite meals delivered to your doorstep.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl">
          Customer Satisfaction: Your satisfaction is our top priority. We strive to provide an exceptional dining experience, from the moment you order to the time your meal arrives.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-4xl mt-6">
          At Dev, we're passionate about bringing great food to your table. We continuously update our menu with new and exciting options, ensuring that you always have something delicious to look forward to. Thank you for choosing Dev. We look forward to serving you and making every meal a delightful experience.
        </p>
      </div>
    </>
  );
}

export default About;
