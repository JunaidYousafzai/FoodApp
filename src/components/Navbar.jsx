import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative bg-white shadow  ">
        <div className=" container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            {/* <a href="#">
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt="Logo"
            />
          </a> */}
            <NavLink
              className={(isActive) =>
                isActive
                  ? "transition-colors text-gray-800 duration-300 transform  hover:text-blue-400 md:mx-4 md:my-0"
                  : "text-gray-300"
              }
              to="/home"
            >
              <h1>Dev.</h1>
            </NavLink>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink
                className={(isActive) =>
                  isActive
                    ? `transition-colors text-gray-900 text-bold duration-300  transform md:mx-4 md:my-0`
                    : `text-blue-700 `
                }
                //   className="my-2  transition-colors duration-300 transform  hover:text-blue-400 md:mx-4 md:my-0"
                to="/meals"
              >
                Meals
              </NavLink>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? `transition-colors text-gray-900 text-bold duration-300  transform md:mx-4 md:my-0`
                    : `text-blue-700 `
                }
                //   className="my-2  transition-colors duration-300 transform  hover:text-blue-400 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? `transition-colors text-gray-900 text-bold duration-300  transform md:mx-4 md:my-0`
                    : `text-blue-700 `
                }
                //   className="my-2  transition-colors duration-300 transform  hover:text-blue-400 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={(isActive) =>
                  isActive
                    ? `transition-colors text-gray-900 text-bold duration-300  transform md:mx-4 md:my-0`
                    : `text-blue-700 `
                }
                //   className="my-2  transition-colors duration-300 transform  hover:text-blue-400 md:mx-4 md:my-0"
                to="/login"
              >
                Login
              </NavLink>
            </div>

            <div className="flex justify-center md:block">
              <NavLink
                className="relative text-gray-500  transition-colors duration-300 transform   hover:text-gray-600"
                to="../Dashboard"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
</NavLink >
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
