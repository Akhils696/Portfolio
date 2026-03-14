import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axios.get('/api/resume');
        setResumeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('❌ Error fetching resume data:', error);
        setLoading(false);
        
        // Store detailed error for display
        let errorMessage = 'Unknown error occurred';
        let errorDetails = [];
        
        if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
          errorMessage = 'Cannot connect to backend server';
          errorDetails = [
            'The backend server is not running or not accessible',
            'Make sure you started the backend with: npm run server',
            'Backend should be running on: http://localhost:5000',
            'Check if port 5000 is available and not blocked by firewall'
          ];
        } else if (error.response) {
          errorMessage = `Backend error: ${error.response.status} ${error.response.statusText}`;
          errorDetails = [
            `The backend responded with status code: ${error.response.status}`,
            'Check the backend server logs for more details',
            'Verify the API endpoint exists: /api/resume'
          ];
        } else if (error.request) {
          errorMessage = 'No response from backend server';
          errorDetails = [
            'The request was sent but no response was received',
            'Backend server might be down or not responding',
            'Check if the backend is running: npm run server',
            'Verify the backend URL in client/package.json proxy setting'
          ];
        } else {
          errorMessage = error.message || 'Unknown error';
          errorDetails = [
            'An unexpected error occurred',
            'Check the browser console for more details',
            'Try refreshing the page or restarting both servers'
          ];
        }
        
        // Set error state for display
        setResumeData({ 
          error: true, 
          message: errorMessage, 
          details: errorDetails,
          fullError: error.toString()
        });
      }
    };

    fetchResumeData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading resume...</p>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>⏳ Loading Resume Data...</h2>
          <p>Please wait while we fetch your resume information.</p>
        </div>
      </div>
    );
  }

  if (resumeData.error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>❌ {resumeData.message || 'Error Loading Resume Data'}</h2>
          <div className="error-details">
            <p><strong>Error Details:</strong></p>
            <ul>
              {resumeData.details && resumeData.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="error-solutions">
            <p><strong>🔧 How to Fix:</strong></p>
            <ol>
              <li><strong>Start the backend server:</strong>
                <br /><code>cd server</code>
                <br /><code>npm install</code> (if not installed)
                <br /><code>npm run dev</code> or <code>npm start</code>
              </li>
              <li><strong>Verify backend is running:</strong>
                <br />Open <code>http://localhost:5000/api/resume</code> in your browser
                <br />You should see JSON data, not an error page
              </li>
              <li><strong>Check ports:</strong>
                <br />Backend: Port 5000
                <br />Frontend: Port 3000
                <br />Make sure both ports are available
              </li>
              <li><strong>Install dependencies (if needed):</strong>
                <br /><code>npm run install-all</code> from the root directory
              </li>
            </ol>
          </div>
          {resumeData.fullError && (
            <details className="error-full">
              <summary>Technical Details (Click to expand)</summary>
              <pre>{resumeData.fullError}</pre>
            </details>
          )}
          <div className="error-actions">
            <button onClick={() => window.location.reload()} className="retry-button">
              🔄 Retry
            </button>
            <button 
              onClick={() => {
                const newWindow = window.open('http://localhost:5000/api/resume', '_blank');
                if (!newWindow) {
                  alert('Please manually open: http://localhost:5000/api/resume');
                }
              }} 
              className="retry-button"
              style={{ marginLeft: '10px' }}
            >
              🔗 Test Backend API
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="resume-container">
        <Header personalInfo={resumeData.personalInfo} quickFacts={resumeData.quickFacts} />
        <Summary summary={resumeData.summary} />
        <Experience experience={resumeData.experience} />
        <Education education={resumeData.education} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>
  );
}

export default App;



