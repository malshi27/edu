// Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // <-- Use NavLink instead of Link
import './Header.css';

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
            <p className="hotline-number">011 278 4815</p>
          </div>
        </div>
      </div>

      {/*Navigation Bar*/}
      <div className="nav-bar">
        <NavLink to="/" end className="nav-link">HOME</NavLink>
        <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
        <NavLink to="/bookstore" className="nav-link">BOOK STORE</NavLink>
        <NavLink to="/procurements" className="nav-link">PROCUREMENTS</NavLink>
        <NavLink to="/careers" className="nav-link">CAREERS</NavLink>
        <NavLink to="/media" className="nav-link">MEDIA</NavLink>
        <NavLink to="/news" className="nav-link">NEWS</NavLink>
      </div>
    </header>
  );
};

export default Header;
