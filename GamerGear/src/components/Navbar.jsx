import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    { name: 'Keyboards', href: '#keyboards', icon: '⌨️' },
    { name: 'Mice', href: '#mice', icon: '🖱️' },
    { name: 'Headphones', href: '#headphones', icon: '🎧' },
    { name: 'Monitors', href: '#monitors', icon: '🖥️' },
    { name: 'Decoration Items', href: '#decoration', icon: '💡' }
  ];
  
  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-light">GamerGear</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden bg-primary-light p-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
        
        {/* Desktop & Mobile Menu */}
        <div className={`w-full lg:flex lg:w-auto lg:items-center ${isMenuOpen ? 'block' : 'hidden'} mt-4 lg:mt-0 transition-all duration-300 ease-in-out`}>
          <ul className="lg:flex lg:space-x-8 flex-col lg:flex-row space-y-2 lg:space-y-0">
            <li><a href="#home" className="hover:text-primary-light block py-2 transition-colors duration-200">Home</a></li>
            
            {/* Categories Dropdown */}
            <li className="relative group">
              <button 
                className="hover:text-primary-light block py-2 transition-colors duration-200 flex items-center"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onMouseEnter={() => setIsCategoriesOpen(true)}
              >
                Categories
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
                  isCategoriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                } lg:absolute lg:z-50`}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <div className="py-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={category.href}
                      className="flex items-center px-4 py-3 text-gray-300 hover:text-primary-light hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      <span className="text-lg mr-3">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </li>
            
            <li><a href="#deals" className="hover:text-primary-light block py-2 transition-colors duration-200">Deals</a></li>
            <li><a href="#about" className="hover:text-primary-light block py-2 transition-colors duration-200">About</a></li>
            <li><a href="#contact" className="hover:text-primary-light block py-2 transition-colors duration-200">Contact</a></li>
          </ul>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0 lg:ml-8">
            <button 
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
              onClick={toggleTheme} 
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
            <a href="#cart" className="relative">
              <span className="sr-only">Cart</span>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute -top-2 -right-2 bg-primary-light text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
