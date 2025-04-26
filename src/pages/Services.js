import React from 'react';
import { FaHardHat, FaMountain, FaRoad, FaBuilding, FaTruck, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Exploitation de Mines",
      description: "Services complets d'exploitation minière incluant l'extraction, le traitement et la gestion des ressources minérales.",
      icon: <FaMountain className="service-icon" />,
      details: [
        "Exploitation à ciel ouvert",
        "Exploitation souterraine",
        "Gestion des résidus miniers",
        "Planification minière stratégique"
      ]
    },
    {
      id: 2,
      title: "Travaux Publics",
      description: "Réalisation d'infrastructures publiques de qualité répondant aux normes internationales.",
      icon: <FaRoad className="service-icon" />,
      details: [
        "Routes et autoroutes",
        "Ponts et viaducs",
        "Réseaux d'assainissement",
        "Aménagements urbains"
      ]
    },
    {
      id: 3,
      title: "Construction",
      description: "Construction de bâtiments résidentiels, commerciaux et industriels avec des matériaux de haute qualité.",
      icon: <FaBuilding className="service-icon" />,
      details: [
        "Bâtiments industriels",
        "Complexes résidentiels",
        "Structures commerciales",
        "Travaux de finition"
      ]
    },
    {
      id: 4,
      title: "Services Miniers",
      description: "Services spécialisés pour l'industrie minière incluant la prospection et l'analyse géologique.",
      icon: <FaHardHat className="service-icon" />,
      details: [
        "Prospection géologique",
        "Forage et sondage",
        "Analyse de gisements",
        "Consulting minier"
      ]
    },
    {
      id: 5,
      title: "Transport de Matériaux",
      description: "Solutions logistiques pour le transport sécurisé de matériaux en vrac et produits miniers.",
      icon: <FaTruck className="service-icon" />,
      details: [
        "Transport lourd",
        "Logistique minière",
        "Gestion de flotte",
        "Transport spécialisé"
      ]
    },
    {
      id: 6,
      title: "Études et Conseils",
      description: "Expertise technique et conseils stratégiques pour vos projets de génie civil.",
      icon: <FaChartLine className="service-icon" />,
      details: [
        "Études de faisabilité",
        "Audits techniques",
        "Plans d'affaires",
        "Optimisation de projets"
      ]
    }
  ];

  const handleServiceSelect = (service) => {
    navigate('/Besoin', { 
      state: { 
        preselectedService: {
          id: service.id,
          title: service.title,
          description: service.description
        } 
      } 
    });
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Nos Services de Génie Civil</h1>
        <p>Des solutions intégrées pour vos projets les plus exigeants</p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => handleServiceSelect(service)}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-details">
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="service-button">
              <Link to="/Besoin" >
              Demander  <FaFileAlt className="button-icon" />
              </Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;