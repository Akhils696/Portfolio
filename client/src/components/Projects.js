import React from "react";
import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <div className="section-heading-row">
        <h2 className="section-title">Projects</h2>
        <p className="section-kicker">Focused on what was built, how it was built, and why it matters.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`project-card${project.featured ? " featured-project" : ""}`}
          >
            <div className="project-top">
              <div>
                {project.featured && <span className="featured-badge">Featured</span>}
                <h3 className="project-name">{project.name}</h3>
              </div>
              <span className="project-role">{project.role}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-outcome">{project.outcome}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Repository
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
