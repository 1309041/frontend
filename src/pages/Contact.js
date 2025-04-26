import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding, FaClock, FaGlobeEurope } from 'react-icons/fa';
import { FiSend, FiTool } from 'react-icons/fi';
import '../assets/styles/contact.css'; // Fichier CSS avec vos variables

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Section Hero */}
      <section className="contact-hero">
        <div className="containerinfo">
          <h1 className='titrename' >Contactez notre équipe</h1>
          <p>Nous sommes à votre disposition pour répondre à vos questions</p>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="contact-containerinfo ">
        {/* Colonne de gauche - Coordonnées */}
        <div className="contact-info">
          <h2><FaBuilding className="iconInfos" /> Coordonnées</h2>
          
          <div className="info-card">
            <h3><FaMapMarkerAlt className="iconInfos" /> Siège social</h3>
            <p>al Massar N° 182<br /> étage 1 app 2 Marrakech, Maroc</p>
          </div>

          <div className="info-card">
            <h3><FaPhone className="iconInfos" /> Téléphone</h3>
            <p>+212 6 23 18 87 59</p>
          </div>

          <div className="info-card">
            <h3><FaEnvelope className="iconInfos" /> Email</h3>
            <p>ktmingenierie@gmail.com</p>
          </div>
        </div>

        {/* Colonne de droite - Formulaires */}
        <div className="form-column">
          {/* Formulaire Général */}
          <div className="form-containerinfo">
            <h3 className='Demande' ><FiSend className="iconInfos" /> Demande générale</h3>
            <form className="contact-form">
              <div className="formulaire">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" required />
              </div>
              <div className="formulaire">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="formulaire">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" ></textarea>
              </div>
              <button type="submit" className="Ebutton large">Envoyer la demande</button>
            </form>
          </div>

         
        </div>
      </div>

      {/* Infos pratiques */}
      <section className="practical-info">
        <div className="containerinfo">

          <h2><FaClock className="iconInfos" /> Horaires de disponibilité</h2>
          <div className="opening-hours">
            <p>Lundi au Vendredi : 9h00 - 18h00</p>
            <p>Samedi : 9h00 - 13h00 </p>
            <p>Dimanche : Fermé</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;