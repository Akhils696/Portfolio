import React from "react";
import "./SectionNav.css";

const sections = [
  { id: "summary", label: "Summary" },
  { id: "highlights", label: "Strengths" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SectionNav = () => {
  return (
    <nav className="section-nav" aria-label="Resume sections">
      <div className="section-nav-inner">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="section-nav-link">
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SectionNav;
