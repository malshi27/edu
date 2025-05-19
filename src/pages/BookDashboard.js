import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookDashboard.css";

function BookDashboard() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    image: "",
    type: "",
    language: "",
    grade: "",
    subject: "",
  });
  const [editingBookId, setEditingBookId] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get("http://localhost:8000/api/books")
      .then(res => setBooks(res.data))
      .catch(err => alert("Error fetching books: " + err.message));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = editingBookId
      ? axios.put(`http://localhost:8000/api/books/${editingBookId}`, form)
      : axios.post("http://localhost:8000/api/books", form);

    request
      .then(() => {
        fetchBooks();
        resetForm();
      })
      .catch(err => alert("Error saving book: " + err.message));
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditingBookId(book.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`http://localhost:8000/api/books/${id}`)
        .then(() => fetchBooks())
        .catch(err => alert("Error deleting book: " + err.message));
    }
  };

  const resetForm = () => {
    setForm({ title: "", image: "", type: "", language: "", grade: "", subject: "" });
    setEditingBookId(null);
  };

  return (
    <div className="dashboard-container">
      <h2>{editingBookId ? "Edit Book" : "Add New Book"}</h2>
      <form onSubmit={handleSubmit} className="book-form">
        {["title", "type", "language", "grade", "subject"].map((field) => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              id={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required={["title", "grade"].includes(field)}
            />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {form.image && (
            <div className="preview-image">
              <img src={form.image} alt="Book Preview" width="100" />
            </div>
          )}
        </div>

        <div className="form-buttons">
          <button type="submit">{editingBookId ? "Update Book" : "Add Book"}</button>
          {editingBookId && (
            <button type="button" onClick={resetForm} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2>Book List</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Grade</th>
            <th>Language</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5">No books found.</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.grade}</td>
                <td>{book.language}</td>
                <td>
                  {book.image && (
                    <img src={book.image} alt={book.title} width="60" />
                  )}
                </td>
                <td>
                  <button onClick={() => handleEdit(book)}>Edit</button>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookDashboard;
