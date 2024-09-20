import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  const handleSignUp = () => {
    console.log('Navigate to sign-up page');
  };

  return (
    <div className="min-h-screen  animate-slideUp flex flex-col items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:gray-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
          >
                 Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
        <NavLink
                  to="/login"
                  className="px-5 py-2 text-sm font-medium leading-5 text-center  capitalize text-gray-700 rounded-lg  w-full sm:w-full lg:w-auto focus:outline-none"
                >
                  Already Have an Account ?
                </NavLink>

       
        </div>
      </div>
    </div>
  );
};

export default Signup;
