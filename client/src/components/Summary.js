import React from 'react';

const Summary = ({ summary }) => {
  return (
    <section className="section" id="summary">
      <h2 className="section-title">Professional Summary</h2>
      <p className="summary-text">{summary}</p>
    </section>
  );
};

export default Summary;



