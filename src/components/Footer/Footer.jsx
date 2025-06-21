import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-16 mr-3"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hamza Amir
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <a href="https://github.com/hamzaamir-design" target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-2">
                <Link to="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 py-6 px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 <a href="https://github.com/hamzaamir-design" className="hover:underline">Hamza Amir</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 md:mt-0 space-x-6 text-gray-500 dark:text-gray-400">
          <a href="https://github.com/hamzaamir-design" target="_blank" rel="noreferrer"><Github className="hover:text-black dark:hover:text-white" /></a>
          <a href="https://https://www.facebook.com/hamza.amir.hamza.892021.com" target="_blank" rel="noreferrer"><Facebook className="hover:text-blue-600" /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter className="hover:text-sky-400" /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="hover:text-pink-500" /></a>
          <a href="https://https://www.linkedin.com/in/hamza-amir-57992232a/.com" target="_blank" rel="noreferrer"><Linkedin className="hover:text-blue-700" /></a>
        </div>
      </div>
    </footer>
  );
}
