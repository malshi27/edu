import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Head.css'; // Ensure this is where your styles are

const Header1 = () => {
  return (
    <header className="header-background-1">  {/* Add a class for background */}
      {/* Top Bar Language Links */}
      <div className="top-bar-text-1">
        <a href="#">ENGLISH</a>
        <a href="#">සිංහල</a>
        <a href="#">தமிழ்</a>
      </div>

      {/* Logo and Search Bar */}
      <div className="top-bar-1">
        <div className="top-bar-left-1">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>
        <div className="top-bar-right-1">
          <input
            type="text"
            placeholder="find your books here..."
            className="search-input"
          />
          <button className="search-button-1">
            <FaSearch className="search-icon-1" />
          </button>
          <div className="hotline-1">
            <p><strong>HOTLINE</strong></p>
            <p className="hotline-number-1">011 278 48 15</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar-1">
        <Link to="/">HOME</Link>
        <Link to="#">ABOUT US</Link>
        <Link to="/bookstore">BOOK STORE</Link>
        <Link to="#">PROCUREMENTS</Link>
        <Link to="#">CAREERS</Link>
        <Link to="#">MEDIA</Link>
        <Link to="#">NEWS</Link>
      </div>
    </header>
  );
};

export default Header1;
