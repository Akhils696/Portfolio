import React from "react";
import "./Header.css";

const Header = ({ personalInfo, quickFacts }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="hero-copy">
          <p className="eyebrow">Software Portfolio</p>
          <h1 className="name">{personalInfo.name}</h1>
          <h2 className="title">{personalInfo.title}</h2>
          <p className="tagline">{personalInfo.tagline}</p>
          <p className="availability">{personalInfo.availability}</p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-item">
              <span className="label">Phone</span>
              <span>{personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span className="label">Location</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href={`mailto:${personalInfo.email}`} className="primary-action">
              Contact Me
            </a>
            <div className="social-links">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
              )}
              {personalInfo.website && (
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Portfolio Repo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="hero-panel" aria-label="Professional snapshot">
          <p className="panel-title">Why this portfolio works</p>
          <div className="facts-grid">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <span className="fact-label">{fact.label}</span>
                <strong className="fact-value">{fact.value}</strong>
              </div>
            ))}
          </div>
          <p className="panel-note">
            Structured to help hiring teams scan strengths, projects, and implementation detail quickly.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
