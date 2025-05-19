import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './pages/HeroSection';
import Header1 from './components/Header1';
import QuickExplore from './pages/QuickExplore';
import ServiceCards from './pages/ServiceCards';
import BookSection from './pages/BookSection';
import Footer from './components/Footer';
import BookStoreSection from './pages/BookStoreSection';
import BookDashboard from './pages/BookDashboard'; // ✅ Already imported

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
                <Header1 />
                <BookStoreSection />
                <BookDashboard />
                <Footer />
              </>
            }
          />

          {/* ✅ Book Dashboard Page Route (Standalone) */}
          <Route
            path="/dashboard"
            element={
              <>
                <Header1 />
                <BookDashboard />
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
