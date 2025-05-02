import React, { useEffect, useRef } from 'react';
import {
  Store,
  Users,
  MapPin,
  ClipboardList,
  MonitorPlay,
} from 'lucide-react';
import './ServiceCards.css';

const services = [
  { icon: <Store size={40} />, label: 'Text Books Download Centers' },
  { icon: <Users size={40} />, label: 'Book Evaluation Forum Login' },
  { icon: <MapPin size={40} />, label: 'Book Sales Promotion Centers' },
  { icon: <ClipboardList size={40} />, label: 'Text Book and TIM Requisition' },
  { icon: <MonitorPlay size={40} />, label: 'Digital Learning Systems' },
];

const ServiceCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    let index = 0;
    const scrollInterval = setInterval(() => {
      if (!scrollContainer || window.innerWidth > 768) return; // Only for mobile

      const cardWidth = scrollContainer.firstChild.offsetWidth + 45; // card width + gap
      index++;

      // Reset to first card if end is reached
      if (index >= services.length) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        index = 0;
      } else {
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000); // Every 3 seconds

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="service-cards-container" ref={containerRef}>
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <p className="service-label">{service.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
