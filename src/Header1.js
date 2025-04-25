import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // 👈 Use NavLink instead of Link
import './Header1.css';

const Header1 = () => {
  return (
    <header className="header-background-1">
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
            className="search-input-1"
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
        <NavLink to="/" end className="nav-link-1">HOME</NavLink>
        <NavLink to="/about" className="nav-link-1">ABOUT US</NavLink>
        <NavLink to="/bookstore" className="nav-link-1">BOOK STORE</NavLink>
        <NavLink to="/procurements" className="nav-link-1">PROCUREMENTS</NavLink>
        <NavLink to="/careers" className="nav-link-1">CAREERS</NavLink>
        <NavLink to="/media" className="nav-link-1">MEDIA</NavLink>
        <NavLink to="/news" className="nav-link-1">NEWS</NavLink>
      </div>
    </header>
  );
};

export default Header1;
