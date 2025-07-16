import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">RYOKO Travels</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Buses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-middle">
        <p>Your trusted partner for comfortable journeys across India 🇮🇳</p>
        <p>Plan. Book. Travel. Relax.</p>
        <p>📞 <a href="tel:63044755159">+91 63044755159</a></p>
        <p>📧 <a href="mailto:csairaghavendra@gmail.com">csairaghavendra@gmail.com</a></p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} RYOKO Travels. All rights reserved.</span>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="mailto:csairaghavendra@gmail.com">✉️</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
