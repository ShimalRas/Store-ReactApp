import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>GamerGear</h3>
          <p>Your one-stop shop for premium gaming gear and accessories. Elevate your gaming experience today.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">📱</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📺</a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><span>📞</span> 1-800-GAMER-GEAR</p>
          <p><span>✉️</span> support@gamergear.com</p>
          <p><span>🏠</span> 123 Gaming Street, Pixel City</p>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and deals!</p>
          <form>
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 GamerGear | All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
