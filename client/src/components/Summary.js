import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="section">
      <h2 className="section-title">Professional Summary</h2>
      <p className="summary-text">{summary}</p>
    </div>
  );
};

export default Summary;



