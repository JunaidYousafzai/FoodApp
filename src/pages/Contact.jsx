import React, { useState } from "react";
import Footer from "../components/Footer";
import Alert from "../components/Alert";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  return (
    <div className="relative animate-slideUp flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mt-4">
                We’d love to hear from you! Fill out the form and our team will get back to you as soon as possible.
              </p>
  
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    123 Main Street, City, State, 12345
                  </div>
                </div>
  
                <div className="flex items-center text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    +44 123 456 7890
                  </div>
                </div>
  
                <div className="flex items-center text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold">
                    info@devmeals.com
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <form className="p-6  bg-white shadow-md rounded-lg flex flex-col justify-center">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              <div className="flex flex-col mb-4">
                <label htmlFor="phone" className="hidden">
                  Telephone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Telephone Number"
                  className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 font-semibold focus:border-gray-600 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                />
              </div>
  
              <button
              onClick={<Alert/>} 
                type="submit"
                className="w-full md:w-1/2 bg-gray-600 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-gray-600 transition ease-in-out duration-300 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Contact;
