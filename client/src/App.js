import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SectionNav from "./components/SectionNav";
import Summary from "./components/Summary";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axios.get("/api/resume");
        setResumeData(response.data);
      } catch (error) {
        console.error("Error fetching resume data:", error);

        let errorMessage = "Unknown error occurred";
        let errorDetails = [];

        if (error.code === "ECONNREFUSED" || error.message.includes("Network Error")) {
          errorMessage = "Cannot connect to backend server";
          errorDetails = [
            "The backend server is not running or not accessible.",
            "Start the backend with npm run server.",
            "Confirm the API is available at http://localhost:5000/api/resume.",
            "Check whether port 5000 is already in use.",
          ];
        } else if (error.response) {
          errorMessage = `Backend error: ${error.response.status} ${error.response.statusText}`;
          errorDetails = [
            `The backend responded with status code ${error.response.status}.`,
            "Check the backend logs for more detail.",
            "Verify that the /api/resume route exists and returns JSON.",
          ];
        } else if (error.request) {
          errorMessage = "No response from backend server";
          errorDetails = [
            "The request was sent but no response was received.",
            "The backend may be down or not responding.",
            "Check the proxy setting in client/package.json.",
          ];
        } else {
          errorMessage = error.message || "Unknown error";
          errorDetails = [
            "An unexpected client error occurred.",
            "Check the browser console for more detail.",
            "Try refreshing the page after restarting the app.",
          ];
        }

        setResumeData({
          error: true,
          message: errorMessage,
          details: errorDetails,
          fullError: error.toString(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  useEffect(() => {
    if (!resumeData || resumeData.error || !resumeData.seo) {
      return;
    }

    document.title = resumeData.seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", resumeData.seo.description);
    }
  }, [resumeData]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>Loading portfolio data</h2>
          <p>Please wait while the resume content is being prepared.</p>
        </div>
      </div>
    );
  }

  if (resumeData.error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>{resumeData.message || "Error loading resume data"}</h2>
          <div className="error-details">
            <p>
              <strong>Error details</strong>
            </p>
            <ul>
              {resumeData.details &&
                resumeData.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
            </ul>
          </div>
          <div className="error-solutions">
            <p>
              <strong>Suggested fixes</strong>
            </p>
            <ol>
              <li>Run `npm run install-all` from the project root if dependencies are missing.</li>
              <li>Start the backend with `npm run server` and the frontend with `npm run client`.</li>
              <li>Open `http://localhost:5000/api/resume` to confirm the API responds.</li>
            </ol>
          </div>
          {resumeData.fullError && (
            <details className="error-full">
              <summary>Technical details</summary>
              <pre>{resumeData.fullError}</pre>
            </details>
          )}
          <div className="error-actions">
            <button onClick={() => window.location.reload()} className="retry-button">
              Retry
            </button>
            <a
              href="http://localhost:5000/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="retry-button secondary-button"
            >
              Open API
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="resume-container">
        <Header personalInfo={resumeData.personalInfo} quickFacts={resumeData.quickFacts} />
        <SectionNav />
        <Summary summary={resumeData.summary} />
        <Highlights highlights={resumeData.highlights} />
        <Experience experience={resumeData.experience} />
        <Education education={resumeData.education} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>
  );
}

export default App;
