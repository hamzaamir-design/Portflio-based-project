import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto text-gray-800 dark:text-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg sm:mx-16 mx-4 my-10 sm:py-20 py-14 px-4 shadow-lg">
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between sm:px-6 lg:px-12">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 max-w-xl"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Boost Your Workflow
              <span className="block text-orange-700 mt-2">with React Solutions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              Download the latest React-powered tools and streamline your development process today.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white bg-orange-700 hover:bg-orange-800 transition px-6 py-3 text-base font-semibold rounded-lg shadow"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download Now
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-0"
          >
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2135046005/display_1500/stock-photo-creative-summer-beach-on-laptop-with-blue-background-d-rendering-2135046005.jpg"
              alt="React Creative"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </aside>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-16 py-12">
        {["Fast Development", "Reusable Components", "Strong Community"].map((title, i) => (
          <motion.div
            key={title}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn how React can make your front-end development more powerful and scalable.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Final Heading */}
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
        className="text-center text-3xl sm:text-5xl font-semibold py-14 text-orange-700"
      >
        Empower Your Projects with React
      </motion.h1>
    </div>
  );
}
