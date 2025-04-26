import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { FaMountain, FaRoad, FaBuilding, FaHardHat, FaTruck, FaChartLine } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/besoin.css';

const Besoin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    projet: '',
    budget: '',
    delai: '',
    details: ''
  });

  const services = [
    {
      id: 1,
      title: "Exploitation de Mines",
      icon: <FaMountain className="service-icon" />
    },
    {
      id: 2,
      title: "Travaux Publics",
      icon: <FaRoad className="service-icon" />
    },
    {
      id: 3,
      title: "Construction",
      icon: <FaBuilding className="service-icon" />
    },
    {
      id: 4,
      title: "Services Miniers",
      icon: <FaHardHat className="service-icon" />
    },
    {
      id: 5,
      title: "Transport de Matériaux",
      icon: <FaTruck className="service-icon" />
    },
    {
      id: 6,
      title: "Études et Conseils",
      icon: <FaChartLine className="service-icon" />
    }
  ];

  // Vérifier si un service a été présélectionné
  useEffect(() => {
    if (location.state?.preselectedService) {
      setSelectedServices([location.state.preselectedService.id]);
      setStep(2);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      services: selectedServices.map(id => services.find(s => s.id === id).title),
      ...formData
    };

    try {
      const response = await axios.post('http://localhost:8000/api/envoyer-besoin', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.status >= 200 && response.status < 300) {
        setStep(3);
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const selectedServicesData = selectedServices.map(id => 
    services.find(service => service.id === id)
  );

  return (
    <div className="express-need-container">
      {step === 1 && (
        <div className="service-selection-step">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Retour
          </button>
          
          <div className="step-header">
            <h1>Exprimer votre besoin</h1>
            <p className="step-indicator">Sélectionnez vos services</p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div 
                key={service.id}
                className={`service-card ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedServices(prev =>
                    prev.includes(service.id)
                      ? prev.filter(id => id !== service.id)
                      : [...prev, service.id]
                  );
                }}
              >
                <div className="service-icon-container">
                  {service.icon}
                  {selectedServices.includes(service.id) && (
                    <div className="check-mark">
                      <FaCheckCircle />
                    </div>
                  )}
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="step-actions">
            <button 
              className="next-button"
              onClick={() => setStep(2)}
              disabled={selectedServices.length === 0}
            >
              Continuer vers le formulaire
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <button className="back-button" onClick={() => {
            if (location.state?.preselectedService) {
              navigate('/services');
            } else {
              setStep(1);
            }
          }}>
            <FaArrowLeft /> Retour
          </button>
          
          <div className="step-header">
            <h1>Détails de votre projet</h1>
            <p className="step-indicator">Remplissez le formulaire</p>
          </div>
          
          <div className="selected-services-preview">
            <h3>Service(s) sélectionné(s) :</h3>
            <div className="selected-services-list">
              {selectedServicesData.map(service => (
                <div key={service.id} className="selected-service-tag">
                  {service.icon}
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="need-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom complet *</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  value={formData.nom}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="entreprise">Entreprise</label>
                <input 
                  type="text" 
                  id="entreprise" 
                  name="entreprise" 
                  value={formData.entreprise}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telephone">Téléphone *</label>
                <input 
                  type="tel" 
                  id="telephone" 
                  name="telephone" 
                  value={formData.telephone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="projet">Description de votre projet *</label>
              <textarea 
                id="projet" 
                name="projet" 
                value={formData.projet}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget estimé</label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="0-50k">0 - 50 000 dh</option>
                  <option value="50-100k">50 000 - 100 000 dh</option>
                  <option value="100-500k">100 000 - 500 000 dh</option>
                  <option value="500k+">500 000 dh et plus</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="delai">Délai souhaité</label>
                <select 
                  id="delai" 
                  name="delai" 
                  value={formData.delai}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="urgence">Urgent (moins de 1 mois)</option>
                  <option value="1-3mois">1 - 3 mois</option>
                  <option value="3-6mois">3 - 6 mois</option>
                  <option value="6mois+">6 mois et plus</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="details">Informations complémentaires</label>
              <textarea 
                id="details" 
                name="details" 
                value={formData.details}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-button">
                Envoyer ma demande <FaPaperPlane className="button-icon" />
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="confirmation-step">
          <div className="confirmation-content">
            <div className="confirmation-icon">
              <FaCheckCircle />
            </div>
            <h1>Merci pour votre demande !</h1>
            <p>Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.</p>
            <p>Notre équipe étudiera votre projet et vous proposera une solution adaptée à vos besoins.</p>
            <button 
              className="home-button"
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Besoin;