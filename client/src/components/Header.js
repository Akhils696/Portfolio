import React from 'react';
import './Header.css';

const Header = ({ personalInfo }) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title">{personalInfo.title}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <span className="icon">📱</span>
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
        <div className="social-links">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
          )}
          {personalInfo.website && (
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="social-link">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;



