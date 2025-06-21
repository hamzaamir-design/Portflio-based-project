import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 font-medium ${
      isActive ? 'text-orange-700' : 'text-gray-700'
    } hover:text-orange-700 lg:p-0`;

  const handleLogin = () => {
    setMenuOpen(false);
    navigate('/login');
  };

  const handleGetStarted = () => {
    setMenuOpen(false);
    navigate('/register');
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-white w-full">
      <nav className="px-4 lg:px-6 py-3 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
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
          <div className="hidden lg:flex space-x-8 items-center ml-auto">
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

          {/* Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 pl-6">
            <button
              onClick={handleLogin}
              className="text-gray-800 hover:bg-gray-100 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Log in
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-orange-700 text-white hover:bg-orange-800 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get started
            </button>
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
            <button
              onClick={handleLogin}
              className="text-gray-800 hover:bg-gray-100 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Log in
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-orange-700 text-white hover:bg-orange-800 transition px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
