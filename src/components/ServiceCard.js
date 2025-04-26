import React from 'react';
import '../assets/styles/services.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={service.icon}></i>
      </div>
      
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>
            <i className="fas fa-check-circle"></i> {feature}
          </li>
        ))}
      </ul>
      
      <a href={service.link} className="service-link">
        En savoir plus <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default ServiceCard;