import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope, FaLightbulb } from 'react-icons/fa';
import '../assets/styles/header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='brand-container'>
          <div className='logo-wrapper'>
            <img src={logo} alt="STE ORIGINAL RA & BET KTM" className="logo" />
          </div>
          <div className='brand-text'>
            <h1 className='company-name'>STE ORIGINAL RA & BET KTM</h1>
            <p className='company-slogan'>Deux expertises, un seul partenaire : travaux & études techniques</p>
          </div>
        </div>
        
        <nav className='navigation'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>
                <FaHome className='nav-icon' />
                <span>Accueil</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='nav-link'>
                <FaTools className='nav-icon' />
                <span>Services</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/projets" className='nav-link'>
                <FaProjectDiagram className='nav-icon' />
                <span>Projets réalisés</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" className='nav-link'>
                <FaEnvelope className='nav-icon' />
                <span>Contact</span>
              </Link>
            </li>
            <li className='nav-item highlight'>
              <Link to="/besoin" className='nav-link highlight-link'>
                <FaLightbulb className='nav-icon' />
                <span>Exprimer un besoin</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;