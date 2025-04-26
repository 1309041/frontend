import React from 'react';
import {Link} from 'react-router-dom';
import { FaBuilding, FaRegCheckCircle, FaSearchPlus, FaIndustry } from 'react-icons/fa';
import { MdLocationOn, MdDateRange } from 'react-icons/md';
import '../assets/styles/projets.css';
import SOMLAKO from '../assets/images/projet1.png';
import SNL from '../assets/images/entre/SNL.png';
import SAKITRA from '../assets/images/entre/SAKITRA.png';
import SGTRA from '../assets/images/entre/SGTRA.png';
import MENARA from '../assets/images/entre/MENARA.png';
import AGREGA from '../assets/images/entre/AGREGA.png';
import JHL from '../assets/images/entre/JHL.png';
import Works from '../assets/images/entre/Works.png';
import Excellent from '../assets/images/entre/Excellent.png';
import KMASTE from '../assets/images/projet3.png';
import RIMAXE from '../assets/images/entre/RIMAXE.png';
import LAGLITA from '../assets/images/entre/LAGLITA.png';
import OBH from '../assets/images/entre/OBH.png';
import SAB from '../assets/images/entre/SAB.png';
import TIFA from '../assets/images/projet3.png';
import TLOUH from '../assets/images/entre/TLOUH.png';
import AJMAR from '../assets/images/entre/AJMAR.png';
import SELTRAP from '../assets/images/entre/SELTRAP.png';
import SEHI from '../assets/images/entre/SEHI.png';
import BTP from '../assets/images/entre/BTP.png';
import MARAH from '../assets/images/entre/MARAH.png';
import NOTAM from '../assets/images/entre/NOTAM.png';
import TRAIN from '../assets/images/entre/TRAIN.png';
import TCHI from '../assets/images/projet5.png';

const Projets = () => {
  // Données des projets (à remplacer par vos données réelles)
  const projets = [
    {
      id: 1,
      entreprise: "STE SOMLAKO",
      secteur: "BTP, spécialisée en génie civil, voirie, assainissement et électricité.",
      image: SOMLAKO,
      lieu: " Echemmaia, Morocco",
      date: "Janvier 2023",
      },
    {
      id: 2,
      entreprise: "STE SNL TRAVAUX",
      secteur: "BTP — spécialisée en travaux routiers, assainissement, voirie, ouvrages d'art et fabrication de matériaux de construction ",
      image: SNL,
      lieu: "Marrakech, Maroc",
      date: "Mars 2023",
    },{
      id: 3,
      entreprise: "STE SAKITRA",
      secteur: "BTP — spécialisée en terrassement, assainissement, voirie, aménagement de lotissements et location de matériel.",
      image: SAKITRA,
      lieu: "Marrakech, Maroc",
      date: "Mars 2023",
      description: "Installation d'un parc solaire intelligent avec gestion optimisée de l'énergie."
    },
    {
      id: 4,
      entreprise: "STE SGTRA",
      secteur: "BTP — spécialisée en travaux routiers, assainissement, voirie et construction d'ouvrages publics et privés",
      image: SGTRA,
      lieu: "Kénitra, Maroc",
      date: "Mars 2023",
    },
    {
      id: 5,
      entreprise: "MENARA AMENAGEMENT",
      secteur: "Énergie renouvelable",
      image: MENARA,
      lieu: "Marrakech, Maroc",
      date: "Mars 2023",
    },
    {
      id: 6,
      entreprise: "STE MENARA AGREGA",
      secteur: "BTP",
      image: AGREGA,
      lieu: "Marrakech , Moroco",
      date: "Mars 2023",
   },
    {
      id: 7,
      entreprise: "STE 2JHL HOLDING",
      secteur: "BTP et aménagement urbain — spécialisée dans les travaux de construction, réhabilitation, aménagements urbains, voirie, assainissement, éclairage public et espaces verts.",
      image: JHL,
      lieu: "Marrakech, Maroc",
      date: "Mars 2023",
    },
    {
      id: 8,
      entreprise: "STE WORK.S SARL",
      secteur: "BTP — spécialisée dans les travaux divers de construction. ",
      image: Works,
      lieu: "Non précisée",
      date: "Mars 2023",
   },
    {
      id: 9,
      entreprise: "STE EXCELLENT HOLDING",
      secteur: "BTP et génie civil — spécialisée dans les travaux de construction, de bâtiments tous corps d'état, de routes, de barrages, ainsi que dans les travaux publics de génie civil et d'hydraulique. ",
      image: Excellent,
      lieu: " Marrakech-Médina, Maroc",
      date: "Mars 2023",
    },{
      id: 10,
      entreprise: "STE MENARA KMASTE",
      secteur: "Énergie renouvelable",
      image: KMASTE,
      lieu: "Marrakech, Morocco",
      date: "Mars 2023",
    },{
      id: 11,
      entreprise: "STE RIMAXE",
      secteur: "Énergie renouvelable",
      image: RIMAXE,
      lieu: "Tanger, Maroc",
      date: "Mars 2023",
    },
    {
      id: 12,
      entreprise: "STE LAGLITA",
      secteur: "La société est active dans le secteur de la construction et des matériaux, offrant des services de négoce dans ces domaines.",
      image: LAGLITA,
      lieu: "Aït Melloul 86150, Maroc",
      date: "Mars 2023",
    },
    {
      id: 13,
      entreprise: "STE OBH TRAVAUX",
      secteur: "BTP et travaux publics - spécialisée dans les travaux divers de construction, la location d'engins, ainsi que l'achat, la vente et la distribution de matériaux de construction.",
      image: OBH,
      lieu: "Ait Ourir, Al Haouz, Marrakech, Maroc",
      date: "Mars 2023",
    },
    {
      id: 14,
      entreprise: "STE SA2B",
      secteur: "BTP",
      image: SAB,
      lieu: "Marrakech, Maroc",
      date: "Mars 2023",
   },
    {
      id: 15,
      entreprise: "STE TIFAOUNEINO",
      secteur: " BTP, génie civil, travaux divers, transport de marchandises, négoce de matériaux de construction",
      image: TIFA,
      lieu: "Massira III, Marrakech, Maroc",
      date: "Mars 2023",
    },{
      id: 16,
      entreprise: "STE TLOUH TRAVAUX",
      secteur: "Travaux divers, BTP, location de matériel industriel",
      image: TLOUH,
      lieu: "Non précisée",
      date: "Mars 2023",
    },
    {
      id: 17,
      entreprise: "STE AJMAR",
      secteur: "Construction ou travaux divers ​",
      image: AJMAR,
      lieu: " Tazarine, Zagora, Maroc",
      date: "Mars 2023",
    },
    {
      id: 18,
      entreprise: "STE SELTRAP",
      secteur: "Travaux publics et environnement — spécialisée dans les travaux divers de construction, la plantation, le reboisement et le négoce.",
      image: SELTRAP,
      lieu: " Immeuble Koutoubia, Marrakech, Maroc",
      date: "Mars 2023",
    },
    {
      id: 19,
      entreprise: "STE SEH",
      secteur: "Équipements hydrauliques et industriels — spécialisée dans l'importation, la vente et la maintenance de matériel hydromécanique, de pompes, de groupes électrogènes, ainsi que dans le commerce de véhicules automobiles et de fournitures industrielles",
      image: SEHI,
      lieu: "Casablanca, Maroc",
      date: "Mars 2023",
    },{
      id: 2,
      entreprise: "STE BTP CONSULTING",
      secteur: "Ingénierie et études techniques — spécialisée dans les études techniques en génie civil, l'assainissement, les VRD, l'adduction d'eau, le béton armé, et le suivi de projets de construction.",
      image: BTP,
      lieu: " Ouezzane, Maroc",
      date: "Mars 2023",
   },
    {
      id: 20,
      entreprise: "STE ECA EL MARAH",
      secteur: "Construction et aménagement — spécialisée dans les travaux de construction, l'aménagement, la location de machines-outils, le transport de matériaux et le transport pour le compte d'autrui.",
      image: MARAH,
      lieu: "Sidi Ghanem, Marrakech, Maroc",
      date: "Mars 2023",
   },
    {
      id: 21,
      entreprise: "STE NOTAM DEVELOPPEMENT",
      secteur: "Travaux publics et génie civil",
      image: NOTAM,
      lieu: "Tameslouht, Maroc",
      date: "Mars 2023",
    },
    {
      id: 22,
      entreprise: "STE TRAINVEST",
      secteur: "Travaux publics et location de matériel BTP — spécialisée dans les travaux de voirie, la construction civile lourde, la location de matériel de chantier et les aménagements d'infrastructures.",
      image: TRAIN,
      lieu: " Marrakech, Maroc",
      date: "Mars 2023",
   },
    {
      id: 23,
      entreprise: "STE TCHINJHAR",
      secteur: "Travaux publics, exploitation de carrières et transport de marchandises ",
      image: TCHI,
      lieu: " Taroudant, Maroc",
      date: "Mars 2023",
   },
  ];

  return (
    <div className="projets-page">
      {/* Hero Section */}
      <section className="projets-hero">
        <div className="container">
          <h1>Nos Partenaires</h1>
          <p>Les entreprises avec lesquelles nous avons établi des relations d'affaires</p>
        </div>
      </section>

      {/* Grille des projets */}
      <div className="projets-grid container">
        {projets.map((projet) => (
          <div key={projet.id} className="projet-card">
            <div className="projet-image">
              <img src={projet.image} alt={projet.entreprise} />
              <div className="overlay">
                <button className="view-btn">
                  <FaSearchPlus /> Voir plus
                </button>
              </div>
            </div>
            <div className="projet-content">
              <h3><FaBuilding /> {projet.entreprise}</h3>
              <p className="secteur"><FaIndustry /> {projet.secteur}</p>
              <div className="projet-meta">
                <span><MdLocationOn /> {projet.lieu}</span>
                <span><MdDateRange /> {projet.date}</span>
              </div>
              <div className="badges">
                <span className="badge"><FaRegCheckCircle /> Projet livré</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="projets-cta">
        <div className="container">
          <h2>Un projet similaire ?</h2>
          <p>Contactez-nous pour discuter de vos besoins spécifiques</p>
          <Link  to="/contact" ><button className="cta-btn">Nous contacter</button>
       </Link> </div>
      </section>
    </div>
  );
};

export default Projets;