import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import './HeroSection.css';

const slides = [
  {
    image: '/education.jpg',
    grade: '11',
    title: 'SMART TEXTBOOK',
    subtext: 'NOW YOU CAN ACCESS THE ONLINE VERSIONS',
    visit: 'SMARTTEXTBOOK.EPD.GOV.LK'
  },
  {
    image: '/header-image.jpg',
    grade: '10',
    title: 'DIGITAL LEARNING',
    subtext: 'LEARN ANYWHERE, ANYTIME',
    visit: 'LEARNONLINE.EPD.GOV.LK'
  },
  {
    image: '/edu.jpg',
    grade: '9',
    title: 'eBOOK COLLECTION',
    subtext: 'EXPLORE SUBJECT-WISE DIGITAL BOOKS',
    visit: 'EBOOKS.EPD.GOV.LK'
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${currentSlide.image})` }}>
      {/* Top Bar */}
      <div className="top-bar-text">
        <a href="#">ENGLISH</a>
        <a href="#">සිංහල</a>
        <a href="#">தமிழ்</a>
      </div>

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
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">BOOK STORE</a>
        <a href="#">PROCUREMENTS</a>
        <a href="#">CAREERS</a>
        <a href="#">MEDIA</a>
        <a href="#">NEWS</a>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          <MdArrowBackIos />
        </button>

        <div className="hero-text">
          <p className="grade">
            GRADE <span className="grade-number">{currentSlide.grade}</span> SCIENCE
          </p>
          <h1 className="smart-title">{currentSlide.title}</h1>
          <p className="subtext">{currentSlide.subtext}</p>
          <div className="lang-box">
          <div className="lang-buttons">
            {/* <button className="btn english">ENGLISH</button>
            <button className="btn sinhala">සිංහල</button>
            <button className="btn tamil">தமிழ்</button> */}
                <a href="#">ENGLISH</a>
                <a href="#">සිංහල</a>
                <a href="#">தமிழ்</a>
          </div>
          </div>
          <p className="visit-text">
            VISIT: <span className="visit-link">{currentSlide.visit}</span>
          </p>
        </div>

        <button className="arrow right-arrow" onClick={goToNext}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
