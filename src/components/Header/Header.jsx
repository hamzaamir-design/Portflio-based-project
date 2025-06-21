import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 font-medium ${
      isActive ? "text-orange-700" : "text-gray-700"
    } hover:text-orange-700 lg:p-0`;

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="px-4 lg:px-6 py-3 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-12"
            />
          </Link>

          {/* Mobile menu icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-600 hover:text-orange-700 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/github" className={navLinkClass}>
              Github
            </NavLink>
          </div>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 text-white hover:bg-orange-800 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile menu items */}
        {menuOpen && (
          <div className="flex flex-col mt-4 space-y-2 lg:hidden">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>
              Contact
            </NavLink>
            <NavLink to="/github" className={navLinkClass} onClick={toggleMenu}>
              Github
            </NavLink>
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 text-white hover:bg-orange-800 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
