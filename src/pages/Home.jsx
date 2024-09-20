import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MealContext } from "../components/Context";
import MealCatogaries from "../components/MealCatogaries";
import Footer from "../components/Footer";
function Home() {
  const { data } = useContext(MealContext);
  const limitData = data.slice(0, 6);

  return (
    <>
      <div className="main-container  mx-auto">
        <section>
          <div className="container animate-slideUp flex flex-col-reverse px-6 py-10 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg ">
                <h1 className="sm:text-xl md:text-2xl lg:text-3xl py-5 sm:text-center md:text-center lg:text-left font-semibold tracking-wide text-gray-800">
                  We Deliver High Quality Food To Your Doorstep
                </h1>
                <p className="sm:my-5 lg:my-5 text-gray-600 sm:text-center md:text-center lg:text-left">
                  Craving something delicious? We’ve got you covered! At Dev, we
                  bring your favorite meals from the best restaurants in town,
                  right to your doorstep. Whether you're in the mood for a
                  hearty meal, a quick snack, or something sweet, we’re here to
                  make sure you enjoy it, hassle-free.
                </p>
                <div className="flex justify-center my-3 lg:justify-start">
                  <NavLink
                    to="/meals"
                    className="px-5 py-2 text-sm font-medium leading-5 text-center text-white capitalize bg-gray-600 rounded-lg hover:bg-gray-400 w-full sm:w-full lg:w-auto focus:outline-none"
                  >
                    Explore Meals
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <img
                className="object-cover w-full h-full max-w-2xl rounded-xl"
                src="https://img.freepik.com/free-photo/hamburger-beef-with-tomato-ketchup-generative-ai_188544-12217.jpg"
                alt="glasses photo"
              />
            </div>
          </div>
        </section>
        <section className="">
          <h1 className="text-center md:mt-0 animate-slideUp lg:mt-44 sm:text-2xl md:text-2xl lg:text-6xl">
            Meal Catogaries
          </h1>
            <MealCatogaries />
        </section>
        <section>
          <div className="bg-white animate-slideUp py-12 px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
              What Our Customers Are Saying
            </h2>
            <div className="max-w-4xl mx-auto  space-y-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-slideUp">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 italic">
                  "The food from Dev is always fresh and delicious! Their
                  service is top-notch, and I love the variety they offer."
                </p>
                <p className="mt-4 text-right text-gray-600 font-semibold">
                  — Jane Doe
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-slideUp">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 italic">
                  "Dev has become my go-to for quick, healthy meals. The
                  delivery is always fast, and the food is consistently
                  excellent."
                </p>
                <p className="mt-4 text-right text-gray-600 font-semibold">
                  — John Smith
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-slideUp">
                <p className="text-lg sm:text-xl lg:text-2xl  text-gray-800 italic">
                  "As someone with dietary restrictions, I appreciate the
                  diverse menu at Dev. There’s something for everyone!"
                </p>
                <p className="mt-4 text-right text-gray-600 font-semibold">
                  — Emily Johnson
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
