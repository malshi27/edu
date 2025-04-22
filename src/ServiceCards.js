import React from 'react';
import {
  Store,
  Users,
  MapPin,
  ClipboardList,
  MonitorPlay,
} from 'lucide-react';
import './ServiceCards.css'; // Import the CSS file

const services = [
  { icon: <Store size={40} />, label: 'Text Books Download Centers' },
  { icon: <Users size={40} />, label: 'Book Evaluation Forum Login' },
  { icon: <MapPin size={40} />, label: 'Book Sales Promotion Centers' },
  { icon: <ClipboardList size={40} />, label: 'Text Book and TIM Requisition' },
  { icon: <MonitorPlay size={40} />, label: 'Digital Learning Systems' },
];

const ServiceCards = () => {
  return (
    <div className="service-cards-container">
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
