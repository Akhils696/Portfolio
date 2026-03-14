import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="skill-tags">
              {items.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



