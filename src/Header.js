// Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'; // Or a separate CSS file like Header.css if preferred

const Header = () => {
  return (
    <header>
      {/* Top Bar Language Links */}
      <div className="top-bar-text">
        <a href="#">ENGLISH</a>
        <a href="#">සිංහල</a>
        <a href="#">தமிழ்</a>
      </div>

      {/* Logo and Search Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>
        <div className="top-bar-right">
          <input
            type="text"
            placeholder="find your books here..."
            className="search-input"
          />
          <button className="search-button">
            <FaSearch className="search-icon" />
          </button>
          <div className="hotline">
            <p><strong>HOTLINE</strong></p>
            <p className="hotline-number">011 278 48 15</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <Link to="/">HOME</Link>
        <a href="#">ABOUT US</a>
        <Link to="/bookstore">BOOK STORE</Link>
        <a href="#">PROCUREMENTS</a>
        <a href="#">CAREERS</a>
        <a href="#">MEDIA</a>
        <a href="#">NEWS</a>
      </div>
    </header>
  );
};

export default Header;
