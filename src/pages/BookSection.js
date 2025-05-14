import React, { useState } from 'react';
import './BookSection.css';

const books = {
  newReleases: [
    {
      title: 'Birds of Sri Lanka Part II',
      subtitle: 'new version',
      grade: 'New edition',
      image: './bird.jpg',
    },
    {
      title: 'Science Smart 7 Workbook',
      subtitle: '',
      grade: 'Grade 07',
      image: './bird.jpg',
    },
    {
      title: 'Echelon Tertiary Way Part II',
      subtitle: '',
      grade: 'Grade 12',
      image: './bird.jpg',
    },
    {
      title: 'Science Smart 9 Workbook',
      subtitle: '',
      grade: 'Grade 09',
      image: './bird.jpg',
    },
    {
      title: 'Workbook Science Part II',
      subtitle: 'Class IX',
      grade: 'Grade 10',
      image: './bird.jpg',
    },
  ],
  supplementaryReadings: [
    {
      title: 'Additional Book 1',
      subtitle: '',
      grade: 'Supplementary',
      image: './bird.jpg',
    },
  ],
};

const BookSection = () => {
  const [activeTab, setActiveTab] = useState('newReleases');
  const currentBooks = books[activeTab];

  // Calculate placeholders to fill row (optional: target 3 columns for consistency)
  const placeholders = [];
  const remainder = currentBooks.length % 3;
  const toAdd = remainder === 0 ? 0 : 3 - remainder;
  for (let i = 0; i < toAdd; i++) {
    placeholders.push(<div key={`placeholder-${i}`} className="book-card-1 invisible"></div>);
  }

  return (
    <div className="book-section">
      <h2 className="title">GET YOUR BOOKS ONLINE</h2>
      <div className="tabs">
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

      <div className="book-grid-1">
        {currentBooks.map((book, index) => (
          <div key={index} className="book-card-1">
            <img src={book.image} alt={book.title} className="book-image-1" />
            <div className="book-content-1">
              <h3 className="book-title-1">{book.title}</h3>
              <p className="book-grade-1">{book.grade}</p>
              <button className="download-button-1">DOWNLOAD</button>
            </div>
          </div>
        ))}
        {placeholders}
      </div>
    </div>
  );
};

export default BookSection;
