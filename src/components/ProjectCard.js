import React from 'react';
import '../assets/styles/projets.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-category">{project.category}</div>
      </div>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta">
          <span className="project-location">
            <i className="fas fa-map-marker-alt"></i> {project.location}
          </span>
          <span className="project-year">
            <i className="far fa-calendar-alt"></i> {project.year}
          </span>
        </div>
        
        <a href={project.link} className="project-link">
          Voir le projet <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;