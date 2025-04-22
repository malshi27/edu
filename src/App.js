import React from 'react';
import HeroSection from './HeroSection';
import QuickExplore from './QuickExplore';
import ServiceCards from './ServiceCards';
import BookSection from './BookSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <QuickExplore/>
      <ServiceCards/>

      <BookSection/>
    </div>
  );
}

export default App;
