import React from 'react';
import { BookOpen } from 'lucide-react'; // icon
import './QuickExplore.css'; // CSS import

const quickExploreItems = [
  {
    title: 'School Text Book Distribution 2021',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
  },
  {
    title: 'Registration for Sales Outlets of Books',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
  },
  {
    title: '"Sip Saviya" Online Book Fair 2021',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link: '#',
  },
];

const QuickExplore = () => {
  return (
    <div className="quick-explore-container">
      <div className="quick-explore-left">
        <BookOpen size={40} className="quick-explore-icon" />
        <h2 className="quick-explore-heading">QUICK EXPLORE</h2>
        <p className="quick-explore-sub">News | Events</p>
      </div>

      {quickExploreItems.map((item, index) => (
        <div key={index} className="quick-explore-card">
          <h3 className="quick-explore-title">{item.title}</h3>
          <p className="quick-explore-text">{item.text}</p>
          <a href={item.link} className="quick-explore-link">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default QuickExplore;
