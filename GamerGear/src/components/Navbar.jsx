import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { isDarkTheme, toggleTheme } = useTheme();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>GamerGear</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#deals">Deals</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
        <div className="nav-cart">
          <a href="#cart">
            <i className="cart-icon">🛒</i>
            <span className="cart-count">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
