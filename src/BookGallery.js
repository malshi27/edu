import React, { useState } from 'react';
import './BookGallery.css';

export default function BookGallery() {
  const [activeTab, setActiveTab] = useState('New Releases');

  const books = [

    {
      id: 1,
      title: 'Birds of Sri Lanka',
      subtitle: 'new version',
      edition: 'New edition',
      cover: '/api/placeholder/180/240',
      bgColor: 'yellow'
    },

    {
      id: 2,
      title: 'Science Smart 7',
      subtitle: 'Workbook',
      edition: 'New',
      cover: '/api/placeholder/180/240',
      bgColor: 'green'
    },

    {
      id: 3,
      title: 'Echelon',
      subtitle: 'Testing Way',
      grade: 'Grade 12',
      cover: '/api/placeholder/180/240',
      bgColor: 'blue'
    },

    {
      id: 4,
      title: 'Science Smart 9',
      subtitle: 'Workbook',
      grade: 'Grade 09',
      cover: '/api/placeholder/180/240',
      bgColor: 'orange'
    },

    {
      id: 5,
      title: 'Workbook Science',
      subtitle: 'Class IX',
      grade: 'Class 10',
      cover: '/api/placeholder/180/240',
      bgColor: 'red'
    }

  ];

  return (

    <div className="book-gallery-container">
      <h2 className="gallery-title">GET YOUR BOOKS ONLINE</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === 'New Releases' ? 'active' : ''}
          onClick={() => setActiveTab('New Releases')}
        >
          New Releases
        </button>
        <button
          className={activeTab === 'Supplementary Readings' ? 'active' : ''}
          onClick={() => setActiveTab('Supplementary Readings')}
        >
          Supplementary Readings
        </button>
      </div>

      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className={`book-cover ${book.bgColor}`}>
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-info">
              <h3> {book.title} </h3>
              <p> {book.subtitle} </p>
              <small> {book.edition || book.grade} </small>
            </div>
            <button className = "download-btn"> Download </button>
          </div>
        ))}

      </div>
    </div>
  );
}
