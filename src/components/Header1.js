import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header1.css';

const Header1 = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="header-background-1">
      {/* Top Bar Language Links */}
      <div className="top-bar-text-1">
        <a href="#">ENGLISH</a>
        <a href="#">සිංහල</a>
        <a href="#">தமிழ்</a>
      </div>

      {/* Logo, Search, and Mobile Icons */}
      <div className="top-bar-1">
        <div className="top-bar-left-1">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>

        <div className="top-bar-right-1">
          <div className={`search-area-1 ${searchVisible ? 'visible' : ''}`}>
            <input
              type="text"
              placeholder="find your books here..."
              className="search-input-1"
            />
            <button className="search-button-1">
              <FaSearch className="search-icon-1" />
            </button>
          </div>

          <div className="hotline-1">
            <p><strong>HOTLINE</strong></p>
            <p className="hotline-number-1">011 278 4815</p>
          </div>

          <div className="icons-mobile-1">
            <FaSearch onClick={() => setSearchVisible(!searchVisible)} />
            {navVisible ? (
              <FaTimes onClick={() => setNavVisible(false)} />
            ) : (
              <FaBars onClick={() => setNavVisible(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`nav-bar-1 ${navVisible ? 'nav-visible' : ''}`}>
        <NavLink to="/" end className="nav-link-1">HOME</NavLink>
        <NavLink to="/about" className="nav-link-1">ABOUT US</NavLink>
        <NavLink to="/bookstore" className="nav-link-1">BOOK STORE</NavLink>
        <NavLink to="/procurements" className="nav-link-1">PROCUREMENTS</NavLink>
        <NavLink to="/careers" className="nav-link-1">CAREERS</NavLink>
        <NavLink to="/media" className="nav-link-1">MEDIA</NavLink>
        <NavLink to="/news" className="nav-link-1">NEWS</NavLink>

        {/* ✅ New Link to Book Dashboard */}
        <NavLink to="/dashboard" className="nav-link-1">BOOK DASHBOARD</NavLink>
      </div>
    </header>
  );
};

export default Header1;
