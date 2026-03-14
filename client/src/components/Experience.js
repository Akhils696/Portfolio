import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="job-title">{exp.title}</h3>
                <h4 className="company-name">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="location">{exp.location}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="experience-achievements">
                {exp.achievements.map((achievement) => (
                  <span key={achievement} className="achievement-pill">
                    {achievement}
                  </span>
                ))}
              </div>
            )}
            <ul className="job-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
