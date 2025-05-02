import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection';
import Header1 from './Header1';
import QuickExplore from './QuickExplore';
import ServiceCards from './ServiceCards';
import BookSection from './BookSection';
import Footer from './Footer';
import BookStoreSection from './BookStoreSection'; // Import the new Book Store section

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
