import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { useAuth } from '../context/auth';

const Header = () => {
  const { isAuthenticated, logout } = useAuth(); // ✅ use the hook here
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">RYOKO</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/explore" className="nav-link">Explore</Link>
        <Link to="/services" className="nav-link">Services</Link>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
