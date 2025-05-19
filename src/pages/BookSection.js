import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookSection.css';

const BookSection = () => {
  const [activeTab, setActiveTab] = useState('newReleases'); // Tab = category
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books when tab changes
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8000/api/books', {
        params: activeTab === 'supplementaryReadings' ? { grade: 'Supplementary' } : {},
      })
      .then((res) => {
        // Only keep the first 5 books
        const slicedBooks = res.data.slice(0, 5);
        setBooks(slicedBooks);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch books:', err);
        setBooks([]);
        setLoading(false);
      });
  }, [activeTab]);

  // Optional: Maintain 3-column layout with placeholders
  const placeholders = [];
  const remainder = books.length % 3;
  const toAdd = remainder === 0 ? 0 : 3 - remainder;
  for (let i = 0; i < toAdd; i++) {
    placeholders.push(<div key={`placeholder-${i}`} className="book-card-1 invisible" />);
  }

  return (
    <div className="book-section">
      <h2 className="book-section__title">GET YOUR BOOKS ONLINE</h2>

      <div className="book-section__tabs">
        <button
          className={`tab ${activeTab === 'newReleases' ? 'active' : ''}`}
          onClick={() => setActiveTab('newReleases')}
        >
          New Releases
        </button>
        <button
          className={`tab ${activeTab === 'supplementaryReadings' ? 'active' : ''}`}
          onClick={() => setActiveTab('supplementaryReadings')}
        >
          Supplementary Readings
        </button>
      </div>

      {loading ? (
        <p>Loading books...</p>
      ) : books.length > 0 ? (
        <div className="book-grid-1">
          {books.map((book, index) => (
            <div key={index} className="book-card-1">
              <img
                src={book.image}
                alt={book.title || 'Book Cover'}
                className="book-image-1"
              />
              <div className="book-content-1">
                <h3 className="book-title-1">{book.title}</h3>
                <p className="book-grade-1">{book.grade}</p>
                <button className="download-button-1">DOWNLOAD</button>
              </div>
            </div>
          ))}
          {placeholders}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookSection;
