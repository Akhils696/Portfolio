import React from "react";
import "./Highlights.css";

const Highlights = ({ highlights }) => {
  return (
    <section className="section highlights-section" id="highlights">
      <div className="section-heading-row">
        <h2 className="section-title">Core Strengths</h2>
        <p className="section-kicker">A quick snapshot of how this portfolio is built to present value.</p>
      </div>
      <div className="highlights-grid">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="highlight-card">
            <h3 className="highlight-title">{highlight.title}</h3>
            <p className="highlight-description">{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
