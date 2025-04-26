import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="Pagefooter">
      <div className="footer-container">
        {/* Brand and Description */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={logo} alt="STE ORIGINAL RA & BET KTM" className="footer-logo" />
            <h3 className="footer-company-name">STE ORIGINAL RA & BET KTM</h3>
          </div>
          <p className="footer-description">
            Deux expertises, un seul partenaire : travaux & études techniques. 
            Nous offrons des solutions complètes pour vos projets de construction et d'ingénierie.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Liens Rapides</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Accueil</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/projets" className="footer-link">Projets réalisés</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/besoin" className="footer-link">Exprimer un besoin</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contactez-nous</h4>
          <ul className="contacts-info">
          <ul className="contacts-list">
  {/* Appel téléphonique */}
  <li className="contacts-item">
    <a href="tel:+212623188759" className="contacts-link">
      <FaPhone className="contacts-icon" />
      <span>+212 6 23 18 87 59</span>
    </a>
  </li>

  {/* Email */}
  <li className="contacts-item">
    <a href="mailto:ktmingenierie@gmail.com" className="contacts-link">
      <FaEnvelope className="contacts-icon" />
      <span>ktmingenierie@gmail.com</span>
    </a>
  </li>

  {/* Lien vers Google Maps */}
  <li className="contacts-item">
    <a 
      href="https://maps.app.goo.gl/4aLqfoEevCPFVVBf6?g_st=iwb" 
      target="_blank" 
      rel="noopener noreferrer"
      className="contacts-link"
    >
      <FaMapMarkerAlt className="contacts-icon" />
      <span>al Massar N° 182 étage 1 app 2 Marrakech, Maroc</span>
    </a>
  </li>
</ul>

            <li className="contacts-item">
              <FaClock className="contacts-icon" />
              <span>Lun-Ven: 9h00 - 18h00</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-text">
          Vous avez une question ? Envoyez-nous un message, nous vous répondrons rapidement !</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="newsletter-input" 
              required 
            />
            <textarea className='TextareaCo'
      name="message"
      placeholder=" Votre message... "
      rows="4"
      required
    ></textarea>
            <button type="submit" className="newsletter-button">
            Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} STE ORIGINAL RA & BET KTM. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;