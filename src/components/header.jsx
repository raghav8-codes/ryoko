import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { useAuth } from '../context/auth';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">RYOKO</div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/explore" className="nav-link" onClick={() => setMenuOpen(false)}>Explore</Link>
        <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>

        {isAuthenticated ? (
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="nav-link logout-btn"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
