import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from 'react-icons/fa';
import '../assets/styles/home.css';

import { FaHardHat, FaRoad, FaBuilding, FaIndustry } from 'react-icons/fa';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import projet1 from '../assets/images/projet1.png';
import projet2 from '../assets/images/projet2.png';
import projet3 from '../assets/images/projet3.png';
import projet4 from '../assets/images/projet4.png';
import projet6 from '../assets/images/projet6.png';
import projet7 from '../assets/images/projet7.png';
import maplmage from '../assets/images/maplmage.png';
import partner1 from '../assets/images/projet2.png';
import partner2 from '../assets/images/projet2.png';

const Home = () => {
  const projects = [
    { id: 1, title: 'Exploitation de carrière', image: projet1, type: 'ste' },
    { id: 2, title: 'Construction minière', image: projet2, type: 'ste' },
    { id: 3, title: 'Travaux publics', image: projet3, type: 'ste' },
    { id: 4, title: 'Aménagement de site', image: projet4, type: 'ste' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed El Mansouri',
      company: 'Groupe MINAROC',
      text: 'Collaboration professionnelle et résultats au-delà de nos attentes.',
    },
    {
      id: 2,
      name: 'Fatima Zahra Benkirane',
      company: 'SARL Construction Plus',
      text: 'Expertise technique remarquable dans le domaine minier.',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Nouveau contrat signé',
      date: '15 juin 2023',
      excerpt: 'Nous avons obtenu un important contrat d\'exploitation minière dans la région de Marrakech.',
    },
    {
      id: 2,
      title: 'Certification ISO 9001',
      date: '2 mai 2023',
      excerpt: 'Notre entreprise a obtenu la certification qualité ISO 9001:2015.',
    },
  ];

  return (
    <div className='home-page'>
      {/* Section Hero */}
      <section className='hero-section'>
        <div className='container'>
          <h1>STE ORIGINAL RA & BET KTM</h1>
          <p className="subtitle">Expert en exploitation minière et travaux de construction</p>
          <Link to="/besoin"  className='Ebutton '>Exprimer un besoin</Link>
        </div>
      </section>

      {/* Section Présentation */}
      <section className='presentation-section'>
        <div className='container'>
          <h2>À propos de notre entreprise</h2>
          <div className='presentation-content'>
            <div className='presentation-text'>
              <p>
                L'ORIGINAL RA est une société à responsabilité limitée spécialisée dans l'exploitation de mines et de carrières, 
                ainsi que dans les travaux de construction divers. Basée à Marrakech, notre mission est de fournir des services 
                de qualité supérieure, soutenus par notre expertise et notre engagement envers la satisfaction des clients.
              </p>
              <div className="infoContainer">
  <div className="divInfo">
    <h3>Objets de la société :</h3>
    <p>
      Nous nous engageons à exercer nos activités dans le respect des lois et règlements en vigueur,
      offrant des solutions variées dans le secteur des mines et de la construction.
    </p>
  </div>
  
  <div className="divInfo">
    <h3>Durée :</h3>
    <p>
      Fondée pour une durée de 99 ans à compter de son immatriculation.
    </p>
  </div>

  <div className="divInfo">
    <h3>Capital social :</h3>
    <p>
      2.000.000,00 DHS, garantissant notre solidité financière et notre capacité d'investissement.
    </p>
  </div>
</div>

            </div>
            <div className='presentation-image'>
              <img src={projet7} alt="Site d'exploitation minière" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation */}
      <section className='location-section'>
  <div className='container'>
    <h2 className='Ltitle'>Notre siège social</h2>
    
    <div className='office-locations'>
      {/* Premier emplacement */}
      <div className='office-card'>
        <div className='office-image-container'>
          <img 
            src={maplmage} 
            alt="Siège principal L'ORIGINAL RA" 
            className='office-image'
          />
          <div className='image-overlay'></div>
        </div>
        <div className='office-info'>
          <h3>Siège Principal</h3>
          <p className='office-address'>
            <FaMapMarkerAlt className='address-icon' />
            Al Massar N° 182 étage 1 app 2<br />
            Marrakech, Maroc
          </p>
          <div className='contact-button-container'>
  <a 
    href="https://maps.app.goo.gl/4aLqfoEevCPFVVBf6?g_st=iwb" 
    className='Ebutton office-button'
    target="_blank" 
    rel="noopener noreferrer"
  >
    Voir sur Google Maps
    <FaArrowRight className='button-icon' />
  </a>
</div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className='services-section'>
  <div className='container'>
    <h2 className='services-title'>Nos services</h2>
    <div className='services-grid'>
      <div className='service-card'>
        <div className='service-icon'><FaHardHat /></div>
        <h3>Exploitation de mines</h3>
        <p>Gestion complète de sites miniers avec respect des normes environnementales.</p>
      </div>
      <div className='service-card'>
        <div className='service-icon'><FaRoad /></div>
        <h3>Travaux publics</h3>
        <p>Construction et aménagement d'infrastructures publiques et privées.</p>
      </div>
      <div className='service-card'>
        <div className='service-icon'><FaBuilding /></div>
        <h3>Construction</h3>
        <p>Réalisation de projets de construction clés en main.</p>
      </div>
      <div className='service-card'>
        <div className='service-icon'><FaIndustry /></div>
        <h3>Services miniers</h3>
        <p>Expertise et conseil dans le domaine de l'industrie minière.</p>
      </div>
    </div>
  </div>
</section>
      {/* Section Engagement */}
      <section className='commitment-section'>
        <div className='container'>
          <h2>Notre engagement</h2>
          <p className='commitment-text'>
            Nous nous engageons à respecter les normes de qualité les plus élevées et à assurer la sécurité 
            de nos employés et partenaires. Notre approche combine expertise technique et respect des délais.
          </p>
        </div>
      </section>

      {/* Section Projets */}
<section className="projects-section">
  <div className="container">
    <h2 className="section-title">Nos Partenaires</h2>
    <div className="projects-grid">
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <div className="project-image-container">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
              loading="lazy"
            />
           
          </div>
        </div>
      ))}
    </div>
    <div className="see-more-container">
      <Link to="/projets" className="see-more-button">
        Voir tous <FaArrowRight className="arrow-icon" />
      </Link>
    </div>
  </div>
</section>

      {/* CTA Final */}
      <section className='final-cta'>
        <div className='container'>
          <h2>Prêt à démarrer votre projet?</h2>
          <Link to="/contact" className='Ebutton large'>Contactez-nous dès aujourd'hui</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;