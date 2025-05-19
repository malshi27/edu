// Header.js
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      {/* Language Links */}
      <div className="top-bar-text">
        <a href="#">ENGLISH</a>
        <a href="#">සිංහල</a>
        <a href="#">தமிழ்</a>
      </div>

      {/* Logo + Search + Hotline + Icons */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>

        <div className="top-bar-right">
          <div className={`search-area ${showSearch ? 'visible' : ''}`}>
            <input
              type="text"
              placeholder="find your books here..."
              className="search-input"
            />
            <button className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </div>

          <div className="icons-mobile">
            <FaSearch onClick={() => setShowSearch(!showSearch)} />
            {showNav ? (
              <FaTimes onClick={() => setShowNav(false)} />
            ) : (
              <FaBars onClick={() => setShowNav(true)} />
            )}
          </div>

          <div className="hotline">
            <p><strong>HOTLINE</strong></p>
            <p className="hotline-number">011 278 4815</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`nav-bar ${showNav ? 'nav-visible' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setShowNav(false)}>HOME</NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setShowNav(false)}>ABOUT US</NavLink>
        <NavLink to="/bookstore" className="nav-link" onClick={() => setShowNav(false)}>BOOK STORE</NavLink>
        
        <NavLink to="/procurements" className="nav-link" onClick={() => setShowNav(false)}>PROCUREMENTS</NavLink>
        <NavLink to="/careers" className="nav-link" onClick={() => setShowNav(false)}>CAREERS</NavLink>
        <NavLink to="/media" className="nav-link" onClick={() => setShowNav(false)}>MEDIA</NavLink>
        <NavLink to="/news" className="nav-link" onClick={() => setShowNav(false)}>NEWS</NavLink>
        <NavLink to="/bookstore#dashboard" className="nav-link" onClick={() => setShowNav(false)}>BOOK DASHBOARD</NavLink> {/* ✅ Added */}
      </div>
    </header>
  );
};

export default Header;
