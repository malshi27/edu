// BookStoreSection.js
import React, { useState } from "react";
import "./BookStoreSection.css";

const books = [
  { title: "Birds of Sri Lanka", image: "/bird.jpg" },
  { title: "Plants of the Island", image: "/bird.jpg" },
  { title: "History for Grade 6", image: "/bird.jpg" },
  { title: "Mathematics - Volume 1", image: "/bird.jpg" },
  { title: "Science Workbook", image: "/bird.jpg" },
  { title: "Geography Basics", image: "/bird.jpg" },
  { title: "English Grammar Guide", image: "/bird.jpg" },
  { title: "Art and Craft", image: "/bird.jpg" },
  { title: "ICT for Beginners", image: "/bird.jpg" },
  { title: "Environmental Studies", image: "/bird.jpg" },
  { title: "Music Theory", image: "/bird.jpg" },
  { title: "Civics and Society", image: "/bird.jpg" }
];

function BookStoreSection() {
  const [grade, setGrade] = useState("");

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  return (
    <div className="bookstore-container">
 
      {/* Sidebar for filters */}
      <aside className="bookstore-sidebar">
        <h2>Book Type</h2>
        <div className="filter-group">
          <label><input type="checkbox"/> School Text Books</label>
          <label><input type="checkbox"/> Private Text Books</label>
          <label><input type="checkbox"/> Supplementary Reading Books</label>
        </div>

        <h2>Language</h2>
        <div className="filter-group">
          <label><input type="checkbox"/> Sinhala</label>
          <label><input type="checkbox"/> Tamil</label>
          <label><input type="checkbox"/> English</label>
        </div>

        <h2>Grade</h2>
        <input
          type="text"
          value={grade}
          onChange={handleGradeChange}
          placeholder="Enter Grade"
          className="grade-input"
        />

        <h2>Subjects</h2>
        <p className="subject-note">
          Select one or more subjects from the list by ticking the appropriate checkboxes.
        </p>
        {/* Dynamic subjects can be added here later */}
      </aside>

      {/* Main content area */}
      <main className="bookstore-main">
        <h1 className="main-heading">Book Store</h1>
        <div className="book-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-title">{book.title}</div>
              <button className="download-button">Download</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>{'\u00AB'}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>{'\u00BB'}</button>
        </div>
      </main>
    </div>
  );
}

export default BookStoreSection;
