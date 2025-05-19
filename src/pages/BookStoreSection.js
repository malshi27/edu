import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookStoreSection.css";

function BookStoreSection() {
  const [books, setBooks] = useState([]);
  const [grade, setGrade] = useState("");

  // Fetch books from API based on grade
  useEffect(() => {
    axios.get("http://localhost:8000/api/books", {
      params: { grade: grade } // sends ?grade=... in the URL
    })
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, [grade]); // triggers on grade change

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  return (
    <div className="bookstore-container">
      {/* Sidebar */}
      <aside className="bookstore-sidebar">
        <h2>Grade</h2>
        <input
          type="text"
          value={grade}
          onChange={handleGradeChange}
          placeholder="Enter Grade (e.g., 6)"
          className="grade-input"
        />
      </aside>

      {/* Main content */}
      <main className="bookstore-main">
        <h1 className="main-heading">Book Store</h1>
        <div className="book-grid">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-title">{book.title}</div>
                <button className="download-button">Download</button>
              </div>
            ))
          ) : (
            <p>No books found for grade {grade}</p>
          )}
        </div>

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
