import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <div className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="school">{edu.school}</h4>
            <div className="education-meta">
              <span className="edu-location">{edu.location}</span>
              <span className="edu-period">{edu.period}</span>
            </div>
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="achievements">
                {edu.achievements.map((achievement, idx) => (
                  <span key={idx} className="achievement-badge">{achievement}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;



