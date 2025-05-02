import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import Header1 from './components/Header1';
import QuickExplore from './pages/QuickExplore';
import ServiceCards from './pages/ServiceCards';
import BookSection from './pages/BookSection';
import Footer from './components/Footer';
import BookStoreSection from './pages/BookStoreSection'; // Import the new Book Store section

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <QuickExplore />
                <ServiceCards />
                <BookSection />

                <Footer />
              </>
            }
          />

          {/* Book Store Page Route */}
          <Route
            path="/bookstore"
            element={
              <>
                <Header1/> {/* Optional: keep top layout consistent */}
                <BookStoreSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
