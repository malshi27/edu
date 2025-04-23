import React, { useState } from 'react';
import './BookSection.css';


const books = {
  newReleases: [
    {
      title: 'Birds of Sri Lanka',
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
      title: 'Echelon Tertiary Way',
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
      title: 'Workbook Science',
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


      <div className="book-grid">
        {books[activeTab].map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-grade">{book.grade}</p>
              <button className="download-button">DOWNLOAD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default BookSection;
